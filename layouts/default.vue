<template>
  <v-app>
    <v-container fluid class="bckg">
      <TheHeader />
      <TheMainHero />
    </v-container>
    <v-main>
      <Nuxt />
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
import TheFooter from '~/components/TheFooter.vue';
import TheHeader from '~/components/TheHeader.vue';
import TheMainHero from '~/components/TheMainHero.vue';

export default {
  name: 'DefaultLayout',
  components: { TheHeader, TheMainHero, TheFooter },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
    };
  },
};
</script>

<style lang="scss">
@import '@/assets/nullstyle.scss';
.main-header {
  font-weight: 600;
  font-size: 40px;
  text-align: center;
  color: $darkColor;
}
.bckg {
  background-color: $bckgColor;
}
</style>
