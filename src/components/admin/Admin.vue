<template>
    <div class="admin-wrapper">
        <el-card>
            <h3>Администрирование</h3>
            <el-divider></el-divider>
            <h4>Добавление города</h4>
            <el-row :gutter="20">
                <el-col :span="8">
                    <label for="name">Город</label>
                    <el-input id="name" v-model="cityForm.name"></el-input>
                </el-col>
                <el-col :span="16">
                    <label>Описание</label>
                    <el-input type="textarea" :rows="4" v-model="cityForm.description"></el-input>
                </el-col>
                <el-col :span="8">
                    <label for="longitude ">Долгота</label>
                    <el-input id="longitude " v-model="cityForm.longitude"></el-input>
                </el-col>
                <el-col :span="8">
                    <label for="latitude">Широта</label>
                    <el-input id="latitude" v-model="cityForm.latitude"></el-input>
                </el-col>
                <el-col :span="24">
                    <div class="btn-wrp">
                        <el-button @click="addCity" type="primary">Добавить</el-button>
                    </div>
                </el-col>
            </el-row>
            <el-divider></el-divider>
            <el-row :gutter="20">
                <el-col :span="8">
                    <label for="professionType">Тип профессии</label>
                    <el-input id="professionType" v-model="professionTypeForm.type"></el-input>
                </el-col>
                <el-col :span="16">
                    <label for="profTypeDesc">Описание</label>
                    <el-input type="textarea" :rows="4" id="profTypeDesc" v-model="professionTypeForm.description"></el-input>
                </el-col>
                <el-col :span="24">
                    <div class="btn-wrp">
                        <el-button @click="addProfessionType" type="primary">Добавить</el-button>
                    </div>
                </el-col>
            </el-row>
            <el-divider></el-divider>
            <h4>Добавление информации о городе</h4>
            <el-row :gutter="20">
                <el-col :span="8">
                    <div class="select-wrp">
                        <label for="year">Город</label>
                        <el-select v-model="informationForm.city" value-key="id">
                            <el-option v-for="item in cities" :label="item.name" :value="item"></el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col :span="8">
                    <label for="year">Год</label>
                    <el-input type="number" id="year" v-model="informationForm.year"></el-input>
                </el-col>
                <el-col :span="8">
                    <label for="population">Население</label>
                    <el-input type="number" id="population" v-model="informationForm.population"></el-input>
                </el-col>
                <el-col :span="16">
                    <label for="description">Описание</label>
                    <el-input type="textarea" :rows="4" id="description" v-model="informationForm.description"></el-input>
                </el-col>
                <el-col :span="24">
                    <div class="btn-wrp">
                        <el-button @click="addInformation" type="primary">Добавить</el-button>
                    </div>
                </el-col>
            </el-row>
            <el-divider></el-divider>
            <h4>Добавление информации о городе(профессия)</h4>
            <el-row :gutter="20">
                <el-col :span="8">
                    <div class="select-wrp">
                        <label for="year">Город</label>
                        <el-select v-model="cityId" @change="getInfos">
                            <el-option v-for="item in cities" :label="item.name" :value="item.id"></el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="select-wrp">
                        <label for="year">Год</label>
                        <el-select v-model="year" value-key="id">
                            <el-option v-for="item in cityInformation" :label="item.year" :value="item.year"></el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="select-wrp">
                        <label for="year">Тип профессии</label>
                        <el-select v-model="profession.professionType" value-key="id">
                            <el-option v-for="item in professionType" :label="item.type" :value="item"></el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col :span="8">
                    <label for="profession">Профессия</label>
                    <el-input id="profession" v-model="profession.name"></el-input>
                </el-col>
                <el-col :span="8">
                    <label for="salary">Зарплата</label>
                    <el-input type="number" id="salary" v-model="profession.salary"></el-input>
                </el-col>
                <el-col :span="8">
                    <label for="employeeCount">Количество специалистов</label>
                    <el-input type="number" id="employeeCount" v-model="profession.employeeCount"></el-input>
                </el-col>
                <el-col :span="8">
                    <label for="employerCount">Количество работодателей</label>
                    <el-input type="number" id="employerCount" v-model="profession.employerCount"></el-input>
                </el-col>
                <el-col :span="8">
                    <label for="unemployedCount">Количество безработных</label>
                    <el-input type="number" id="unemployedCount" v-model="profession.unemployedCount"></el-input>
                </el-col>
                <el-col :span="8">
                    <label for="age">Возраст</label>
                    <el-input type="number" id="age" v-model="profession.age"></el-input>
                </el-col>
                <el-col :span="24">
                    <div class="btn-wrp">
                        <el-button @click="addProfession" type="primary">Добавить</el-button>
                    </div>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "Admin",
    data() {
      return {
        cityForm: {
          name: null,
          description: null,
          latitude: null,
          longitude: null
        },
        informationForm: {
          city: null,
          year: null,
          population: null,
          description: null
        },
        profession: {
          name: null,
          salary: null,
          employeeCount: null,
          unemployedCount: null,
          age: null,
          employerCount: null,
          professionType: null
        },
        professionType: null,
        professionTypeForm: {
          type: null,
          description: null
        },
        cities: null,
        cityId: null,
        cityInformation: null,
        year: null
      }
    },
    beforeMount() {
      this.fetchData();
    },
    methods: {
      async fetchData() {
        let res = await axios.get('/api/statistics/city/all');
        let professionTypeResponse = await axios.get(`/api/statistics/profession-type`)
        if (!res.error)
          this.cities = res.data;
        if(!professionTypeResponse.error)
          this.professionType = professionTypeResponse.data;
      },
      async addCity() {
        let res = await axios.post("/api/statistics/city", this.cityForm);
        if (!res.error)
          await this.fetchData();
        this.resetForm(this.cityForm);
      },
      async addInformation(){
        let res = await axios.post("/api/statistics/information", this.informationForm);
        if (!res.error)
          await this.fetchData();
        this.resetForm(this.informationForm);
      },
      async addProfession(){
        let res = await axios.put(`/api/statistics/professions/${this.cityId}/${this.year}`, this.profession);
        if (!res.error)
          await this.fetchData();
        this.resetForm(this.profession);
        this.cityId = null;
        this.year = null;
      },
      async getInfos(){
        let res = await axios.get(`/api/statistics/information/${this.cityId}`);
        if (!res.error)
          this.cityInformation = res.data;
      },
      async addProfessionType(){
        let res = await axios.post(`/api/statistics/profession-type`, this.professionTypeForm)
        if (!res.error)
          await this.fetchData();
        this.resetForm(this.professionTypeForm);
      },
      resetForm(form) {
        Object.getOwnPropertyNames(form).forEach(prop => {
          form[prop] = null;
        });
      }
    }
  }
</script>

<style scoped>
    body {
        margin: 0;
        padding: 0;
    }

    .admin-wrapper {
        width: 75%;
        height: 100vh;
        margin: 20px auto;
    }

    .btn-wrp {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 100%;
        padding: 10px 0;
    }

    .select-wrp {
        display: flex;
        flex-direction: column;
    }

    .el-col{
        margin-bottom: 10px;
    }
</style>