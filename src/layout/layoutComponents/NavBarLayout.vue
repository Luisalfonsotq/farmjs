<template>
  <v-app-bar :elevation="2" color="teal" rounded="lg">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="onToggleDrawer"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Welcome to our website</v-app-bar-title>
  </v-app-bar>
</template>
<script>
  export default {
    name: 'NavBar',
    props: {
      onToggleDrawer: {
        type: Function,
        required: true,
      }
    },
  }
</script>