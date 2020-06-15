<template>
    <div>
        <div class="selecter">
            <el-select v-model="city" @change="getInfo" value-key="id" size="small">
                <el-option v-for="item in cities" :value="item" :label="item.name"></el-option>
            </el-select>
        </div>
        <div class="wrapper">
            <div class="image">
                <apex-chart v-if="chart" type="bar" height="350" :options="chartOptions" :series="series"></apex-chart>
            </div>
            <div class="chart-text" v-text="city.description"></div>
        </div>
    </div>
</template>

<script>
  import axios from 'axios';
  import ApexChart from 'vue-apexcharts'

  export default {
    name: "AverageSalary",
    components: {
      ApexChart
    },
    data() {
      return {
        series: [{
          name: 'Орташа жалақы',
          data: []
        }],
        chartOptions: {
          chart: {
            type: 'bar',
            height: 350
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: [],
          }
        },
        city: {
          description: null
        },
        cities: null,
        chart: false,
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
        await this.resetData();
        let response = await axios.get(`/api/statistics/get-avg-salary/${this.city.name}`)
        if (!response.error) {
          response.data.forEach(d => {
            this.chartOptions.xaxis.categories.push(parseInt(d.id.year))
            this.series[0].data.push(parseInt(d.value.avg))
          })
        }
        this.chart = true;
      },
      resetData(){
        this.chart = false;
        this.chartOptions.xaxis.categories = [];
        this.series[0].data = [];
      }
    }
  }
</script>

<style scoped>
    .selecter {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0 0 10px 0;
    }

    .wrapper {
        display: flex;
        justify-content: flex-start;
    }

    img {
        height: 300px;
    }

    .chart-text {
        padding: 0 10px;
        text-align: justify;
        font-size: 13px;
        width: 40%;
    }

    .image{
        width: 60%;
    }
</style>