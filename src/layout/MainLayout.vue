<template>
  <v-responsive class="border rounded">
  <v-layout>
    <!-- NavBar -->
    <NavBarLayout :onToggleDrawer="ToggleDrawer"/>

    <!-- Navigation drawer similar to sidebar -->
    <v-navigation-drawer color="surface-variant" location="start" name="drawer" v-model="drawer" :permanent="!isMobile">
      <v-list>
        <v-list-item link to="/">
          <v-list-item-title>Panel de navegación</v-list-item-title>
        </v-list-item>
      </v-list>
      <div class="d-flex justify-center align-center">
        <GoogleMaps></GoogleMaps>
      </div>
    </v-navigation-drawer>

    <!-- Main for children views -->
    <v-main>
        <RouterView></RouterView>
    </v-main>

    <!-- Footer -->
    <FooterLayout />

  </v-layout>
</v-responsive>
</template>

<script>
import NavBarLayout from '@/layout/layoutComponents/NavBarLayout.vue'
import FooterLayout from '@/layout/layoutComponents/FooterLayout.vue'
import GoogleMaps from '@/layout/layoutComponents/GoogleMaps.vue'

export default {
  name: 'MainLayout',
  components: {
    NavBarLayout,
    FooterLayout,

    GoogleMaps,
  },
  data: () => ({
    drawer: false,
    isMobile: false,
  }),
  methods: {
    ToggleDrawer () {
      this.drawer = !this.drawer
    },
    handleResize () {
      this.isMobile = window.innerWidth < 600
      if (this.isMobile) {
        this.drawer = false
      }
    }
  },
}
</script>
