<template>
  <v-app>
    <the-header />
    <v-main>
      <nuxt />
    </v-main>
    <the-footer />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
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
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/nullstyle.scss';

.main-header {
  font-weight: 600;
  font-size: 40px;
  text-align: center;
  color: $darkColor;
}
</style>
