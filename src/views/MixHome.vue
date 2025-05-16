<template>
  <div>
    <HomeView></HomeView>
  </div>
  <div id="about">
    <CardText></CardText>
  </div>
</template>

<script>
  import HomeView from './HomeView.vue';
  import CardText from '@/components/CardText.vue';
  export default{
    name: "MixHome",
    components:{
      HomeView,
      CardText,
    }
  }
</script>
