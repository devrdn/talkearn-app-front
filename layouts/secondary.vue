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
import TheFooter from '~/components/TheFooter.vue';
import TheHeader from '~/components/TheHeader.vue';
import TheSecondaryHero from '~/components/TheSecondaryHero.vue';
import TheSubscribe from '~/components/TheSubscribe.vue';

export default {
  components: { TheSecondaryHero, TheHeader, TheFooter, TheSubscribe },
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
