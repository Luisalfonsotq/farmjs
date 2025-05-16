<template>
  <v-row>
    <v-col>
      <v-card
        :color="color"
        :variant="variant"
        class="mx-auto"
      >
        <v-card-item>
          <div>
            <div class="text-overline mb-1">
              {{ variant }}
            </div>
            <div class="text-h6 mb-1">
              Headline
            </div>
            <div class="text-caption">Greyhound divisely hello coldly fonwderfully</div>
          </div>
        </v-card-item>

        <v-card-actions>
          <v-btn>
            Button
          </v-btn>
        </v-card-actions>
      </v-card>
      </v-col>
  </v-row>
</template>
<script>
export default{
  name:"CardText",
  data: () => ({
    variants: ['elevated', 'flat', 'tonal', 'outlined'],
    color:'indigo'
  })
}
</script>
