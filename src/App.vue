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
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" :class="{ 'disabled': currentPage === 1 }" @click="getData(currentPage - 1)" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>

        <li v-for="current in lastPage" :key="current" class="page-item"><a class="page-link" :class="{'active': currentPage == current}" @click="getData(current)">{{current}}</a></li>

        <li class="page-item">
          <a class="page-link" :class="{ 'disabled': currentPage === lastPage }" @click="getData(currentPage + 1)" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>

    <div>
      <ul>
        <li v-for="category in categories" :key="category.id"><a @click="getProjectsCategory(category)" href="#">{{ category.name }}</a></li>
      </ul>
    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      projects: [],
      categories: [],
      currentPage: 1,
      lastPage: null,
    };
  },
  computed: {
    apiUrl() {
      return 'http://127.0.0.1:8000/api';
    },
    
  },
  methods: {
    
    getData(numPage) {
      const params = {
        page: numPage,
      }
      axios.get(`${this.apiUrl}/project`,{ params })
      .then((res) => {
        //console.log(res.data.data.projects);
        this.projects = res.data.data.projects.data;
        this.lastPage = res.data.data.projects.last_page;
        this.currentPage = res.data.data.projects.current_page;
        
        //console.log(res.data.data);
        this.categories = res.data.data.categories;
      })
      .catch((error) => {
        console.error(error);
      });
    },
    getProjectsCategory(category) {
      axios.get(`${this.apiUrl}/project/${category.id}`)
        .then((res) => {
          console.log(res)
          
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>

</style>
