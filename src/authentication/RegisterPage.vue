<template>
  <div class="pa-4 text-center">
    <v-dialog v-model="dialog" max-width="600">
      <!-- Trigger modal -->
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn class="text-none font-weight-bold buttom" text="Registrarse" variant="" color="white" rounded="xl"
          :elevation="2" v-bind="activatorProps"></v-btn>
      </template>

      <!-- Card body -->
      <v-card rounded="xl" class="card-content">
        <div class=" flex-column align-center justify-center pa-2">

          <!-- Logo -->
          <div class="d-flex justify-center mb-2">
            <img src="@/assets/HERDIX.svg" width="30%" height="auto" alt="logo">
          </div>

          <!-- Form -->
          <v-card-text class="text-center font-weight-medium">
            Lleva tu finca al próximo nivel.
          </v-card-text>

          <v-card-text class="w-100 px-6">
            <v-form>
              <v-row dense justify="center">

                <v-col cols="12" md="4" sm="6">
                  <v-text-field label="Correo electrónico*" required variant="outlined" rounded="xl"></v-text-field>
                </v-col>
              </v-row>
              <v-row dense justify="center">
                <v-col cols="12" md="4" sm="6">
                  <v-text-field label="Contraseña*" type="password" required variant="outlined"
                    rounded="xl"></v-text-field>
                </v-col>
              </v-row>
              <v-row dense justify="center">
                <v-col cols="12" md="4" sm="6">
                  <v-text-field label="Confirmar Contraseña*" type="password" required variant="outlined"
                    rounded="xl"></v-text-field>
                </v-col>
              </v-row>

              <div class="text-center mt-2">
                <small class="text-caption text-medium-emphasis">*Indica que el campo es obligatorio</small>
              </div>
              
              <!-- Submit buttom -->
              <div class="d-flex justify-center mt-2">
                <v-btn type="submit" rounded="pill" class="submit-btn text-none" color="white"
                  variant="">Registrarse</v-btn>
              </div>
            </v-form>

          </v-card-text>

          <v-divider></v-divider>

          <!-- Cancel buttom -->
          <v-card-actions class="w-100 justify-center">
            <v-spacer></v-spacer>

            <v-btn text="Cerrar" variant="" rounded="xl" color="white" class="text-none submit-btn"
              @click="dialog = false"></v-btn>
          </v-card-actions>
        </div>


      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { shallowRef } from 'vue';
export default {
  name: 'RegisterModal',
  data: () => ({
    dialog: shallowRef(false),

  }),
};
</script>

<style lang="scss" scoped>
.buttom {
  background-color: $primary-color;
}

.card-content {
  background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(209, 227, 177, 1) 100%);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.card-content .submit-btn {
  background-color: $primary-color;
}
</style>
