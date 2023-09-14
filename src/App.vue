<template>
  <v-app>

  <router-view></router-view>

  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import Login from "./views/Login.vue";
import Dashboard from "./views/Dashboard.vue"

export default {
  name: "App",

  components: {
    // HelloWorld,
 //   Login,
    Dashboard,
  },

  
};
</script>
<style>

</style>

