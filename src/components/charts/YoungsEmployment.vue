<template>
    <div>
        <div class="selecter">
            <el-select v-model="year" @change="getInfo" value-key="id" size="small">
                <el-option v-for="item in years" :value="item" :label="item"></el-option>
            </el-select>
        </div>
        <div class="wrapper">
            <div class="image">
                <apex-chart v-if="chart" type="bar" height="350" :options="chartOptions" :series="series"></apex-chart>
            </div>
            <div class="chart-text">Заманауи экономикалық даму жағдайында цифрлық технологияларды барлық салаларда
                қолдану аясы кеңейіп келеді. «Цифрлық экономика» термині ғылыми зерттеулерде алғаш рет 1995 жылы
                қолданылғанына қарамастан, қазіргі уақытта еңбек нарығының процесстерін цифрландыру өзектілігін
                жоғалтпаған. Еңбек нарығы нарықтық экономикадағы өзгерістердің ең сезімтал индикаторы болып табылады
                және цифрландыру әсерінен айтарлықтай өзгеріске ұшырауда. Цифрландыру процестері туралы айтатын болсақ,
                біз ақпараттық-коммуникациялық технологияларды (АКТ) әп түрлі қызмет салаларына енгізу жайлы айтамыз.
            </div>
        </div>
    </div>
</template>

<script>
  import ApexChart from 'vue-apexcharts'
  import axios from 'axios'

  export default {
    name: "YoungsEmployment",
    components: {
      ApexChart
    },
    data() {
      return {
        years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
          2015, 2016, 2017, 2018, 2019, 2020],
        year: null,
        series: [
          {name:'Жұмыссыздар саны (18-25 ж.а)', data: []}
        ],
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
        chart: false,
      }
    },
    async created() {
      await this.getInfo();
    },
    methods: {
      async getInfo() {
        await this.resetData();
        let response = await axios.get(`/api/statistics/young-employment/${this.year}`)
        if (!response.error) {
          response.data.forEach(d => {
            this.chartOptions.xaxis.categories.push(d.id)
            this.series[0].data.push(d.value.unemployed);
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
        justify-content: space-between;
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

    .image {
        width: 60%;
    }

    .btn-wrapper {
        display: flex;
        flex-direction: column;
        text-align: start;
    }

    .btn {
        margin-top: 10px;
    }
</style>