<template>
  <v-app class="container">

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
 position: absolute;
  width: 450px;
  height: auto;
  background: transparent;
  top: 10%;
  left: 5%;
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
  font-size: 2rem;
}
.container .father>div:first-child {
  width: 450px !important;
  height: auto;
}

.container .father>div:last-child {
  background-color: $primary-color;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  padding: 1.2rem;
}
</style>
