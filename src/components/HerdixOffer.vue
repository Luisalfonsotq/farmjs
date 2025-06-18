<template>
  <div class="container">
    <div class="oferta mb-4 pt-6" align="center">
      <h1 class="pb-2">¿Qué ofrece Herdix?</h1>
      <p class="pa-2">Herdix es una opción confiable para gestionar su finca ganadera, que ofrece una amplia gama de características para administrar fácilmente su negocio.</p>
    </div>
    <div class="cards-container">
      <div v-for="item in items" :key="item.id">
        <CardText :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import CardText from '@/components/CardText.vue';

export default {
  name: 'HerdixOffer',
  components: {
    CardText,
  },
  data: () => ({
    items: [
      { id: 1, icon: 'mdi mdi-cloud-check-variant', title: 'Registra tu ganado facilmente', content: 'En la plataforma puedes agregar a todos tu animales y monitorear datos clave como su rendimiento y estado' },
      { id: 2, icon: 'mdi mdi-fence', title: 'Crea tus corrales virtuales', content: 'Separa tus animales según las necesidades de tu finca, por ejemplo, puedes crear potreros de destete, ceba y reproductores' },
      { id: 3, icon: 'mdi mdi-account-group', title: 'Asigna roles a tu equipo de colaboradores', content: 'Cada rol podrá tener tareas específicas que ayudan al ganado crecer sanos y sin estrés, e incluso puedes vincular a tus veterinarios' },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  place-items: center;
  background-image: url('@/assets/fondo_prueba.jpg');
  background-size:cover;
  background-position: center;
}

.container .oferta {
  display: block;
  background-color: rgba(209, 227, 177, 0.5);
  width: 60%;
  border-radius: 2rem;
  margin-top: 1rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.cards-container {
  @include grid-center;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 4rem;
}
</style>