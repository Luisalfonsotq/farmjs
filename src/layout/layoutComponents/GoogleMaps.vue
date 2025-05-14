<template>
  <div class="pa-4 text-center">
    <v-dialog v-model="dialog" max-width="800">
      <!-- Trigger modal -->
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          class="text-none font-weight-regular buttom"
          text="Encuéntranos"
          variant=""
          color="white"
          rounded="xl"
          :elevation="2"
          v-bind="activatorProps"
        ></v-btn>
      </template>
      <v-card rounded="xl" class="card-content">
        <div>
          <!-- Logo -->
          <div class="d-flex justify-center pa-4">
            <img src="@/assets/HERDIX.svg" width="30%" height="auto" alt="" />
          </div>
          <section class="map-section">
            <div class="container">
              <h2 class="section-title">Estamos aquí</h2>
              <div class="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7886.883125863815!2d-75.87729811708333!3d8.744456831252458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5a2fe110b189d5%3A0xfa5214d2481d0ab1!2sSena!5e0!3m2!1ses-419!2sco!4v1747249575794!5m2!1ses-419!2sco"
                  width="100%"
                  height="100%"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div class="map-info">
                <div class="map-card">
                  <h3>Dirección</h3>
                  <p>
                    <i class="mdi mdi-map-marker"></i> Carrera 27 14-39, Barrio Costa de Oro, Montería,
                    Córdoba, Colombia
                  </p>
                </div>
                <div class="map-card">
                  <h3>Horario de Atención</h3>
                  <p><i class="mdi mdi-clock"></i> Lunes a Viernes: 9:00 AM - 05:00 PM</p>
                </div>

              </div>
            </div>
          </section>

          <v-divider></v-divider>

          <!-- Cancel buttom -->
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              text="Cerrar"
              variant=""
              rounded="xl"
              color="white"
              class="text-none submit-btn"
              @click="dialog = false"
            ></v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { shallowRef } from "vue";
export default {
  name: "RegisterModal",
  data: () => ({
    dialog: shallowRef(false),
  }),
};
</script>

<style lang="scss" scoped>
.buttom {
  background-color: $primary-color;
}

.background-img {
  background-image: url("@/assets/fondoVacas.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
}

.card-content {
  background-color: $white;
  background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(209, 227, 177, 1) 100%);
  padding: 2rem;
}

.card-content .submit-btn {
  background-color: $primary-color;
}

.map-section {
  padding: 2rem;
  background-color: $secondary-color;
  border-radius: 2rem;
}

.map-container {
  height: 350px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.map-info {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.map-card {
  flex: 1;
  min-width: 250px;
  background-color: var(--light-color);
  padding: 20px;
  border-radius: 10px;
}

.map-card h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: var(--secondary-color);
}

.map-card p {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: #555;
}

.map-card i {
  // color: var(--primary-color);
  margin-right: 10px;
  width: 20px;
  text-align: center;
}
</style>
