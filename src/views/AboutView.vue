<template>
  <v-app class="container">
      <div class="texto">
        <div class="img">
          <img src="@/assets/HERDIX.svg" alt="logo" width="400">
      </div>
          <h2>Nosotros</h2>
          <br>
          <p>
              Somos un grupo SENA  de desarrolladores y hemos creado HERDIX para ayudarte a llevar el control de tu finca dedicada al ganado.<br>

              En HERDIX podrás diseñar potreros únicos, programar eventos clave y recibir notificaciones de sus procesos.<br>

              Simplifica la gestión y lleva tu negocio al siguiente nivel con HERDIX.
          </p>
      </div>

  </v-app>
</template>
<style scoped lang="scss">
  .container{
      display: flex;
      padding: 40px;
      // background-color: $white;
       background-image: url('@/assets/fondo_prueba.jpg');
       background-size: cover;
      background-position: center;
      margin: 0;
      position: relative;

  }

  .texto{
      text-align: center;
      align-content: center;
      font-size: larger;
      font-weight: 900;
      padding: 20px;
      color:black;
      background-color: rgba(211, 211, 211, 0.8);
      border-radius: 30px;
      letter-spacing: 1px;
  }

  .img{
      margin: 20px;
      align-self: center;
  }
</style>
