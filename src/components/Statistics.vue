<template>
    <div>
        <div class="statistics">
            <h3>Статистика</h3>
            <ul>
                <li @click="$router.push({path : '/general'})">Еңбек нарығындағы жағдай туралы</li>
                <li @click="$router.push({path : '/avg-salary'})">Орташа айлық жайлы</li>
                <li @click="$router.push({path : '/employment'})">Жұмыспен қамту және жұмыссыздық</li>
                <li @click="$router.push({path : '/young-employment'})">Жастар арасындағы жұмыссыздық</li>
                <li @click="$router.push({path : '/profession-type-salary'})">IT мамандарының жалақысы</li>
                <li @click="$router.push({path : '/it-employment'})">IT мамандардың жұмыспен қамтылуы</li>
                <li @click="$router.push({path : '/profession-type-salary'})">Жалдамалы қызметкерлердің жалақысы</li>
<!--                <li @click="$router.push({path : '/chart'})">IT саласындағы мамандықтардың сұранысы</li>-->
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Statistics",
        methods:{
            goChart(data){
                this.$router.push({path : '/chart'})
            }
        }
    }
</script>

<style scoped>
    h3{
    }
    .statistics {
        padding: 15px;
        margin: 0;
        display: flex;
        flex-direction: column;
    }

    ul {
        list-style: none;
        text-align: start;
    }

    li {
        margin: 8px 0;
        text-decoration: underline;
        cursor: pointer;
        padding: 0;
    }
</style>