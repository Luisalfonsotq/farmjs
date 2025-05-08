<template>
  <div class="pa-4 text-center">
    <v-dialog
      v-model="dialog"
      max-width="600"
    >
    <!-- Trigger modal -->
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          class="text-none font-weight-regular buttom"
          text="Sign up"
          variant=""
          color="white"
          rounded="xl"
          :elevation="2"
          v-bind="activatorProps"
        ></v-btn>
      </template>
      <v-card rounded="xl" class="card-content" >
        <div  >
        <!-- Logo -->
        <div class="d-flex justify-center pa-4">
          <img src="@/assets/HERDIX.svg" width="30%" height="auto" alt="">
        </div>

        <!-- Form -->
        <v-card-text class="d-flex justify-center pa-4" >
          ¡Welcome to Herdix! <br> Take your farm to the next level.
        </v-card-text>
        <v-card-text>
          <v-form>
            <v-row dense>
              <v-col
                cols="12"
                md="4"
                sm="6"
              >
                <v-text-field
                  label="First name*"
                  required
                  variant="outlined"
                  rounded="xl"
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="4"
                sm="6"
              >
                <v-text-field
                  label="Surname*"
                  variant="outlined"
                  rounded="xl"
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="4"
                sm="6"
              >
                <v-text-field
                  label="Age*"
                  persistent-hint
                  required
                  variant="outlined"
                  rounded="xl"
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="4"
                sm="6"
              >
                <v-text-field
                  label="Email*"
                  required
                  variant="outlined"
                  rounded="xl"
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="4"
                sm="6"
              >
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                  variant="outlined"
                  rounded="xl"
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="4"
                sm="6"
              >
                <v-text-field
                  label="Confirm Password*"
                  type="password"
                  required
                  variant="outlined"
                  rounded="xl"
                ></v-text-field>
              </v-col>
            </v-row>

            <!-- Submit buttom -->
            <div class="d-flex justify-center" >
              <v-btn type="submit" rounded="pill" class="submit-btn text-none" color="white" variant="">Submit</v-btn>
            </div>
          </v-form>
          <small class="text-caption text-medium-emphasis">*indicates required field</small>
        </v-card-text>

        <v-divider></v-divider>

        <!-- Cancel buttom -->
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text="Close"
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

.background-img {
  background-image: url("@/assets/fondoVacas.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
}

.card-content {
  background-color: $white;
  background: radial-gradient(circle,rgba(255, 255, 255, 1) 0%, rgba(209, 227, 177, 1) 100%);
}

.card-content .submit-btn {
  background-color: $primary-color;
}










</style>
