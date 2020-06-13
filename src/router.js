import Vue from 'vue'
import Router from 'vue-router'
import Home from "./views/Home";
import Statistics from "./components/Statistics";
import Professions from "./components/Professions";
import Charts from "./components/Charts";
import YandexMap from "./components/YandexMap";
import Admin from "./components/admin/Admin";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
            name: "home",
            redirect: {name: 'yandexMap'},
            children: [
                {
                    path: '/enbek_narygy',
                    name: 'yandexMap',
                    component: YandexMap,
                },
                {
                    path: '/statistics',
                    component: Statistics,
                },
                {
                    path: '/choose-profession',
                    component: Professions
                },
                {
                    path: '/chart',
                    component: Charts
                },
            ]
        },
        {
            path: "/admin",
            name: "admin",
            component: Admin
        }
    ]
})