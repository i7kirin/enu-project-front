<template>
    <div id="app">
        <el-card class="body">
            <h4>Аймақтық еңбек нарығына арналған мониторинг</h4>
            <el-row :gutter="20">
                <el-col :span="18">
                    <div class="header-wrapper">
                        <div class="header-block">
                            <el-button @click="changeRoute('/enbek_narygy')" size="small" type="primary"
                                       icon="el-icon-s-home">
                            </el-button>
                            <el-button @click="changeRoute('/statistics')" size="small">Статистика</el-button>
                            <el-button @click="changeRoute('/popular-professions')" size="small">Сұранысқа ие мамандықтар</el-button>
                            <el-button @click="changeRoute('/choose-profession')" size="small">Мамандық таңдау
                            </el-button>
                        </div>
                        <div class="map">
                            <router-view></router-view>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="right-block">
                        <div class="right-menu">
                            <a target="_blank" rel="noopener noreferrer"
                               href="https://stat.gov.kz/about/general/regulation">
                                Қосымша ақпарат
                            </a>
                        </div>
                        <div class="right-menu">
                            <a target="_blank" rel="noopener noreferrer"
                               href="https://stat.gov.kz/official/economic_quality">
                                Сапа бойынша есептер
                            </a>
                        </div>
                        <div class="right-menu">
                            <a target="_blank" rel="noopener noreferrer"
                               href="https://stat.gov.kz/respondent/for_respondents">
                                Респонденттерге
                            </a>
                        </div>
                        <div class="right-menu">
                            <a target="_blank" rel="noopener noreferrer"
                               href="https://hh.kz/search/vacancy?area=159&st=searchVacancy&text=Java&fromSearch=true">
                                Актуалды вакансиялар
                            </a>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <div class="wrapper">
                <div class="header-block">

                </div>

            </div>
        </el-card>
    </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "Home",
    data() {
      return {
        showMap: true,
        center: {lat: 45.508, lng: -73.587},
        markers: [],
        places: [],
        currentPlace: null
      }
    },
    mounted() {
      this.geolocate();
    },
    methods: {
      changeRoute(path) {
        this.showMap = path === '/enbek_narygy';
        this.$router.push(path);
      },
      geolocate() {
        navigator.geolocation.getCurrentPosition(position => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
        });
      }
    }
  }
</script>

<style scoped>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        background-color: rgba(241, 246, 250, 0.25);
    }

    h4 {
        margin-top: 0;
        margin-bottom: 50px;
    }

    .body {
        width: 1000px;
        margin: auto;
        padding: 20px;
    }

    .wrapper {
        display: flex;
        flex-direction: row;
    }

    .header-block {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: auto auto 20px auto;
        width: 100%;
    }

    .right-block {
        height: 500px;
        background-color: #e7faf4;
    }

    .map {
        height: 100%;
        background-color: #e7faf4;
        padding: 20px;
        border: 1px solid grey;
    }

    .right-menu {
        padding: 5px 10px;
        text-align: start;
        cursor: pointer;
        border: 1px solid grey;
    }
</style>