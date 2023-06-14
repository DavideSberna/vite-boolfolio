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
                        <p class="card-text" v-if="project.category">Category: {{ project.category.name }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-5">
            <div v-if="relatedProjects.length > 0">
                <div class="d-none d-sm-block">
                    <div class="row mt-5">
                        <h4 class="text-center">Prodotti correlati</h4>
                        <div v-for="related in relatedProjects" :key="related" class="col-md-4 col-lg-3 mt-3">
                            <div class="card mb-4">
                                <a href="">
                                    <img class="card-img-top card-img" :src="related.image" :alt="related.title" />
                                </a>
                                <div class="card-body">
                                    <h5 class="card-title">{{ related.title }}</h5>
                                    <p class="small text-muted">{{ related.description }}</p>
                                    <p class="card-text">{{ related.programming_language }}</p>
                                    <p class="card-text">{{ related.difficulty }}</p>
                                    <a class="btn btn-primary btn-sm" href="">Dettagli</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="carouselExample" class="carousel slide d-sm-none mt-5">
                    <div class="carousel-inner ps-3 pe-3">
                        <h4 class="text-center">Prodotti correlati</h4>
                        <div v-for="(related, index) in relatedProjects" :key="related.id" class="card mt-2 carousel-item" :class="{ active: index === 0 }">
                            <a :href="'/project/' + related.slug">
                                <img class="card-img-top card-img" :src="related.image" :alt="related.title" />
                            </a>
                            <div class="card-body p-3">
                                <h5 class="card-title">{{ related.title }}</h5>
                                <p class="small text-muted">{{ related.created_at }}</p>
                                <p class="card-text">{{ related.description }}</p>
                                <a class="btn btn-primary btn-sm" :href="'/project/' + related.slug">Dettagli</a>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                
            </div>
            <div class="d-none d-sm-block" v-else>
                <h4 class="text-center">Non ci sono progetti correlati</h4>
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
      relatedProjects: '',
      apiUrl:'http://127.0.0.1:8000/api',

    };
  },
  
  methods: {
    
    getData() {
      
      axios.get(`${this.apiUrl}/project/${this.$route.params.slug}`)
      .then((res) => {
        console.log(res.data.data.projects)
        console.log(res.data.data.relatedProjects)
        this.project = res.data.data.projects;
        this.relatedProjects = res.data.data.relatedProjects;
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

<style lang="scss" scoped>
.card-img {
    width: 100%;
    height: 350px;
    object-fit: cover;
}

</style>