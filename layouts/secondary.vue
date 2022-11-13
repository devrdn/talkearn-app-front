<template>
  <v-app>
    <div class="bckg">
      <TheHeader />
      <TheSecondaryHero />
    </div>
    <v-main>
      <Nuxt />
    </v-main>
    <TheSubscribe />
    <TheFooter />
  </v-app>
</template>

<script>
export default {
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

.bckg {
  background-color: $bckgColor;
}
</style>
