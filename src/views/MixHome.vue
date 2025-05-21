<template>
  <div>
    <HomeView></HomeView>
  </div>
  <div>
    <HerdixOffer/>
  </div>
</template>

<script>
  import HomeView from './HomeView.vue';
  import HerdixOffer from '@/components/HerdixOffer.vue';
  export default{
    name: "MixHome",
    components:{
      HomeView,
      HerdixOffer,
    }
  }
</script>
