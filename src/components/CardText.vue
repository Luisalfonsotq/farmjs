<template>
  <v-row>
    <v-col>
      <v-card
        class="card-container"
        variant="elevated"
        width="300"
        height="320"
      >
        <v-card-item>
          <div>
            <div :class='item.icon + " card-icon"'></div>
            <div class="text-h5 text-center mb-1">
              {{ item.title }}
            </div>
            <div class="text-body-2 text-justify">
              {{ item.content }}
            </div>
          </div>
        </v-card-item>
        <v-card-actions position="right" >
          <v-btn text="Leer más" class="text-none font-weight-bold"></v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'CardText',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    color: 'cyan-lighten-4',
  }),
};
</script>
<style scoped lang="scss">
.card-container {
  background-color: $white;
}
.card-icon{
  font-size: 4rem;
  color: $primary-color;
  margin-bottom: 2px;
  text-align: center;
}
</style>