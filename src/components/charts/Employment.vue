<template>
    <div>
        <div class="selecter">
            <el-select style="margin-right: 10px" v-model="city" @change="getInfo" value-key="id" size="small">
                <el-option v-for="item in cities" :value="item" :label="item.name"></el-option>
            </el-select>
            <el-select v-model="year" @change="getEmployment" value-key="id" size="small">
                <el-option v-for="item in years" :value="item" :label="item"></el-option>
            </el-select>
        </div>
        <div class="wrapper">
            <div class="image">
                <apex-chart type="pie" :options="chartOptions" :series="series"></apex-chart>
            </div>
            <div class="chart-text" v-text="city.description"></div>
        </div>
    </div>
</template>

<script>
  import axios from 'axios';
  import ApexChart from 'vue-apexcharts'

  export default {
    name: "Employment",
    components: {
      ApexChart
    },
    data() {
      return {
        years: [],
        year: null,
        series: [],
        chartOptions: {
          chart: {
            type: 'pie'
          },
          labels: ['Жұмыспен қамтылған', 'Жұмыссыздар саны'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
        city: {
          description: null
        },
        cities: null
      }
    },
    async created() {
      await this.fetchData();
      await this.getInfo();
    },
    methods: {
      async fetchData() {
        let resCity = await axios.get('/api/statistics/city/all');
        if (!resCity.error) {
          this.cities = resCity.data;
          this.city = resCity.data[0]
        }
      },
      async getInfo() {
        this.years = [];
        this.year = null;
        this.series = [];
        let response = await axios.get(`/api/statistics/information/${this.city.id}`)
        if (!response.error)
          response.data.forEach(d => {
            this.years.push(d.year)
          })
      },
      async getEmployment() {
        await this.resetData();
        let response = await axios.get(`/api/statistics/employment/${this.city.name}/${this.year}`)
        if (!response.error) {
          response.data.forEach(d => {
            this.series.push(parseInt(d.value.employee), parseInt(d.value.unemployed))
          })
        }
      },
      resetData() {
        this.series = [];
      }
    }
  }
</script>

<style scoped>
    .selecter {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0 0 10px 0;
    }

    .wrapper {
        display: flex;
        justify-content: flex-start;
        height: 365px;
    }

    .image {
        width: 60%;
    }

    .chart-text {
        width: 40%;
    }

    .chart-text {
        padding: 0 10px;
        text-align: justify;
        font-size: 13px;
    }
</style>