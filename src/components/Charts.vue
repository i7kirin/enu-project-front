<template>
    <div>
        <div class="wrapper">
            <div class="image">
                <GChart
                        type="ColumnChart"
                        :data="chartData"
                        :options="chartOptions"
                />

            </div>
            <div class="chart-text">Заманауи экономикалық даму жағдайында цифрлық технологияларды барлық салаларда
                қолдану аясы кеңейіп келеді. «Цифрлық экономика» термині ғылыми зерттеулерде алғаш рет 1995 жылы
                қолданылғанына қарамастан, қазіргі уақытта еңбек нарығының процесстерін цифрландыру өзектілігін
                жоғалтпаған. Еңбек нарығы нарықтық экономикадағы өзгерістердің ең сезімтал индикаторы болып табылады
                және цифрландыру әсерінен айтарлықтай өзгеріске ұшырауда. Цифрландыру процестері туралы айтатын болсақ,
                біз ақпараттық-коммуникациялық технологияларды (АКТ) әп түрлі қызмет салаларына енгізу жайлы айтамыз.
            </div>
        </div>
        <div class="btn-wrapper">
            <div class="btn">
                <a href="#">Жүктеу</a>
            </div>
            <div class="btn">
                <el-button size="small" icon="el-icon-download">PDF</el-button>
            </div>
            <div class="btn">
                <el-button size="small" icon="el-icon-download">WORD</el-button>
            </div>
        </div>
    </div>
</template>

<script>
  import {GChart} from 'vue-google-charts'

  export default {
    name: "Charts",
    components:{
      GChart
    },
    data(){
      return {
        chartData: [
          ['Year', 'Sales', 'Expenses', 'Profit'],
          ['2014', 1000, 400, 200],
          ['2015', 1170, 460, 250],
          ['2016', 660, 1120, 300],
          ['2018', 660, 1120, 300],
          ['2017', 1030, 540, 350]
        ],
        chartOptions: {
          chart: {
            title: 'Company Performance',
            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
          }
        }
      }
    },
    created() {
      console.log(this.$route.query.info)
    }
  }
</script>

<style scoped>
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