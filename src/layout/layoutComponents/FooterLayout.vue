<template>
  <v-footer absolute inset app width="auto"  class="d-flex flex-column" color="white" rounded="lg" :elevation="2">
    <div class="d-flex w-100 align-center px-4 py-2">
      <strong>Get connected with us on social networks!</strong>

      <div class="d-flex ga-2 ms-auto">
        <v-btn v-for="icon in icons" :key="icon" :icon="icon" size="small" variant="plain"></v-btn>
      </div>

    </div>

    <div class="px-4 py-2 section text-center w-100 rounded-lg">
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: 'FooterLayout',
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ]
  })
}

</script>

<style lang="scss" scoped>
  .section {
    background-color: $primary-color;
    color: $white;
  }

</style>
