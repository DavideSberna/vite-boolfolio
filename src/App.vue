<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 col-md-4 pt-4" v-for="project in projects" :key="project.id">
        <div class="card">
          <div class="card-image">
            <div>
              <img class="card-img-top" :src="project.image" :alt="project.title">
            </div>
            <div class="p-2">
              <div class="card-title">
                <h4>{{ project.title }}</h4>
                <p>{{ project.description }}</p>
                <p>{{ project.difficulty }}</p>
                <p>{{ project.programming_language }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  'name': 'App',
  data() {
      return {
          prova: 'Project',
          projects: [],
          apiUrl: 'http://127.0.0.1:8000/api',
          imgBasePath: 'http://127.0.0.1:8000/storage/'
           
      }
  },
  methods:{
    getData(){
      axios.get(`${this.apiUrl}/project`).then((res) => {
        console.log(res)
        this.projects = res.data.results;

      })

    },
  },
  mounted() {
        this.getData();
    }
   

}
</script>

<style lang="scss" scoped>

</style>
