<template>
    <div>
        <div class="statistics">
            <h3>Статистика</h3>
            <ul>
                <li @click="goChart('1')">Еңбек нарығындағы жағдай туралы</li>
                <li @click="goChart('')">Орташа айлық жайлы</li>
                <li @click="goChart('')">Жұмыспен қамту және жұмыссыздық</li>
                <li @click="goChart('')">Жұмыссыздық деңгейі(өңірлер бойынша)</li>
                <li @click="goChart('')">Жастар арасындағы жұмыссыздық</li>
                <li @click="goChart('')">Жалдамалы қызметкерлердің жалақысы</li>
                <li @click="goChart('')">IT мамандардың жұмыспен қамтылуы</li>
                <li @click="goChart('')">IT мамандарының жалақысы</li>
                <li @click="goChart('')">IT саласындағы мамандықтардың сұранысы</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Statistics",
        methods:{
            goChart(data){
                this.$router.push({path : '/chart', query: {info:data}})
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