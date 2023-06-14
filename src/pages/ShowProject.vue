<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col">
                <div class="card">
                    <img :src="project.image" class="card-img-top" alt="">
                    <div class="card-body">
                        <h3 class="card-title">{{ project.title }}</h3>
                        <p class="card-text">Cosa ho fatto: {{ project.description }}</p>
                        <p class="card-text">Linguaggio utilizzato: {{ project.programming_language }}</p>
                        <p class="card-text">Diffioltà: {{ project.difficulty }}</p>
                        <p class="card-text">Category: {{ project.category.name }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
</template>

<script>
import axios from 'axios';
export default {
    name: 'ShowProject',
    data() {
    return {
      project: '',
      apiUrl:'http://127.0.0.1:8000/api',

    };
  },
  
  methods: {
    
    getData() {
      
      axios.get(`${this.apiUrl}/project/${this.$route.params.slug}`)
      .then((res) => {
        console.log(res.data)
        this.project = res.data.data;
      })
      
    },
    
  },
  mounted() {
    console.log(this.$router);
    console.log(this.$route);
    this.getData();
  },

}
</script>

<style>

</style>