<template>
  <v-app class="container">
    <v-container >

      <div class="father">

        <div class="child">
          <img class="logo" src="../assets/HERDIX.svg" alt="logo">
        </div>

        <div class="child">
          <p class="text-center">
            ¡Descubre la forma más fácil y eficiente de administrar tu finca con Herdix!
          </p>
        </div>
      </div>

    </v-container>
  </v-app>
</template>
<script>
export default {
  name: 'HomeView',
  data: () => ({

  }),
}
</script>
<style lang="scss" scoped>
.container {
  margin: 0;
  position: relative;
  background-image: url('../assets/interaccion.jpg');
  background-size: cover;
  background-position: center;
}

.container .father {
  width: 350px;
  height: auto;
  background: transparent;
}

.container .father * {
  width: 100%;
}

.container .father .logo {
  width: 100%;
  height: auto;
}

.container .father p {
  color: white;
  font-family: $font-stack;
  font-size: 1.2rem;
}
.container .father>div:first-child {
  width: 350px !important;
  height: auto;
}

.container .father>div:last-child {
  background-color: $primary-color;
  border-bottom-left-radius: 180px;
  border-bottom-right-radius: 180px;
  padding: 1rem;
}
</style>
