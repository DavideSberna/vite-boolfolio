<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" v-for="(link, index) in menu" :key="index">
            <router-link :to="{ name: link.routeName }" class="nav-link" active-class="active">
              <p>{{ link.label }}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
    name: 'HeaderApp',
    data(){
        return{
          menu: [
                {
                    label: 'Home',
                    routeName: 'home'
                },
                {
                    label: 'Projects',
                    routeName: 'projects'
                }
            ]

        }
    }

}
</script>

<style lang="scss" scoped></style>