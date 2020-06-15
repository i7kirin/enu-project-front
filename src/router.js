import Vue from 'vue'
import Router from 'vue-router'
import Home from "./views/Home";
import Statistics from "./components/Statistics";
import Professions from "./components/Professions";
import YandexMap from "./components/YandexMap";
import Admin from "./components/admin/Admin";
import General from "./components/charts/General";
import AverageSalary from "./components/charts/AverageSalary";
import Employment from "./components/charts/Employment";
import YoungsEmployment from "./components/charts/YoungsEmployment";
import ProfessionTypeSalary from "./components/charts/ProfessionTypeSalary";
import PopularProfessions from "./components/PopularProfessions";
import ItEmployment from "./components/charts/ItEmployment";

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
                    name: 'statistics',
                    component: Statistics,
                },
                {
                    path: '/choose-profession',
                    name: 'professions',
                    component: Professions
                },
                {
                    path: '/general',
                    name: 'charts',
                    component: General
                },
                {
                    path: '/avg-salary',
                    name: 'avg-salary',
                    component: AverageSalary
                },
                {
                    path: '/employment',
                    name: 'employment',
                    component: Employment
                },
                {
                    path: '/young-employment',
                    name: 'young-employment',
                    component: YoungsEmployment
                },
                {
                    path: '/profession-type-salary',
                    name: 'profession-type-salary',
                    component: ProfessionTypeSalary
                },
                {
                    path: '/popular-professions',
                    name: 'popular-professions',
                    component: PopularProfessions
                },
                {
                    path: '/it-employment',
                    name: 'it-employment',
                    component: ItEmployment
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