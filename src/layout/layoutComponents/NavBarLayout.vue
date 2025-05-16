<template>
  <v-app-bar :elevation="2" color="white" rounded="lg">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="onToggleDrawer"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>
      <a href="/">Herdix</a>
    </v-app-bar-title>
    <Router-link to="/about" class="pa-4">About Us</Router-link>
    <LoginPage/>
    <RegisterPage/>
  </v-app-bar>
</template>
<script>
import LoginPage from '@/authentication/LoginPage.vue'
import RegisterPage from '@/authentication/RegisterPage.vue'
  export default {
    name: 'NavBar',
    components: {
      LoginPage,
      RegisterPage,
    },
    props: {
      onToggleDrawer: {
        type: Function,
        required: true,
      }
    },
  }
</script>

<style lang="scss">
  a {
    text-decoration: none;
    color: $primary-color;
    font-weight: bold;
  }
</style>
