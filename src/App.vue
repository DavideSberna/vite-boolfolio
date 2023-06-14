<template>
  <header>
    <HeaderApp/>
  </header>
  <main>
    <router-view></router-view>
  </main>
  
</template>

<script>
import HeaderApp from './components/HeaderApp.vue';


export default {
  name: 'App',

  components:{
    HeaderApp,
  },
  data() {
    return {
      
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
