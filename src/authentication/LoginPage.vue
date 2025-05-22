<template>
  <div class="pa-2 text-center">
    <v-dialog max-width="600" v-model="dialog">
      <!-- Trigger buttom -->
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn 
        variant=""
        color="white" 
        text="Iniciar Sesión" 
        :elevation="2" 
        v-bind="activatorProps" 
        rounded="xl"
        class="text-none font-weight-bold button"
      >
      </v-btn>
      </template>

      <!-- Card body -->
      <v-card class="card pa-4" 
      variant="" 
      rounded="xl"
      elevation="4"
      >

      <!-- Logo -->
       <div class="d-flex justify-center align-center">
          <img class="logo" src="@/assets/HERDIX.svg" alt="logo" width="25%" height="auto">
      </div>
        <v-card-text class="text-center">
          ¡Bienvenido a Herdix! <br> Lleva tu finca al próximo nivel.
        </v-card-text>

        <!-- Form -->
        <v-card-text class="d-flex justify-center">
          <v-form class="w-100" style="max-width: 400px;">
          <v-row dense justify="center">
            <v-col cols="12">
              <v-text-field 
              label="Correo Electrónico*" 
              required 
              rounded="xl" 
              variant="outlined"
            ></v-text-field>
            </v-col>
          </v-row>

          <v-row dense justify="center">
            <v-col cols="12">
              <v-text-field 
              label="Contraseña*" 
              type="password" 
              required 
              rounded="xl" 
              variant="outlined"
              class="text-field"
            ></v-text-field>
            </v-col>
          </v-row>

          <div class="text-caption text-medium-emphasis text-left">
            *Indica que el campo es obligatorio
          </div>

          <!-- submit button -->
          <v-row justify="center" class="mt-4">
            <v-col cols="auto">
              <v-btn 
              variant="" 
              rounded="xl" 
              class="text-none submit-btn" 
              color="white"
            >Iniciar Sesión</v-btn>
            </v-col>
          </v-row>
        </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn 
          class="text-none button" 
          variant="" 
          color="white" 
          :elevation="2" 
          rounded="xl" 
          @click="dialog = false"
        >Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { shallowRef } from 'vue';

export default {
  name: 'LoginPage',
  data: () => ({
    dialog: shallowRef(false),
  }),
};
</script>

<style lang="scss" scoped>
.button {
  background-color: $primary-color;
}

.card {
  background-color: $white;
  background: radial-gradient(circle,rgba(255, 255, 255, 1) 0%, rgba(209, 227, 177, 1) 100%);
}
.card .submit-btn {
  background-color: $primary-color;
}

.logo {
  margin: 0 auto;
}
</style>