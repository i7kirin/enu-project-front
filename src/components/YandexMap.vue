<template>
    <div class="map-info">
        <div class="map-wrapper">
            <yandex-map
                    :coords="coords"
                    zoom=4
            >
                <ymap-marker
                        v-for="(item, index) in infos"
                        :coords="item.coords"
                        :marker-id="index"
                        marker-type="placemark"
                        :balloon="item.body"
                />
            </yandex-map>
        </div>
        <div class="info">
            Заманауи экономикалық даму жағдайында цифрлық технологияларды барлық салаларда қолдану аясы кеңейіп келеді.
            «Цифрлық экономика» термині ғылыми зерттеулерде алғаш рет 1995 жылы қолданылғанына қарамастан, қазіргі
            уақытта еңбек нарығының процесстерін цифрландыру өзектілігін жоғалтпаған. Еңбек нарығы нарықтық
            экономикадағы өзгерістердің ең сезімтал индикаторы болып табылады және цифрландыру әсерінен айтарлықтай
            өзгеріске ұшырауда. Цифрландыру процестері туралы айтатын болсақ, біз ақпараттық-коммуникациялық
            технологияларды (АКТ) әп түрлі қызмет салаларына енгізу жайлы айтамыз.
        </div>
    </div>
</template>

<script>
    import { yandexMap, ymapMarker } from 'vue-yandex-maps'
    import axios from "axios";
    export default {
        name: "YandexMap",
        components: { yandexMap, ymapMarker },
        data() {
            return {
              coords: [51.1796, 71.4475],
              infos: []
            };
        },

        async created() {
          await this.fetchData();
        },

        methods: {
            async fetchData(){
              let response = await axios.get(`/api/statistics/general-info/2020`)
              if (!response.error)
                response.data.forEach(d => {
                  this.infos.push({coords:[d.id.latitude, d.id.longitude], body:{ footer: d.id.name + '-'+ d.value.employee}})
                })
            }
        }
    };
</script>
<style scoped>
    .map-info{
        display: flex;
        flex-direction: row;
        height: 406px;
    }
    .map-wrapper{
        width: 65%;
    }
    .info{
        width: 35%;
        text-align: justify;
        padding: 0 10px;
        font-size: 13px;
    }
    .ymap-container {
        height: 100%;
    }
</style>