<template>
  <section class="featured-experts">
    <h1 class="main-header">Featured Experts this week</h1>
    <BaseHeaderLine />
    <div class="featured-experts__experts">
      <v-slide-group style="height: 460px" show-arrows class="expert-slider">
        <FeaturedExpertCard
          v-for="expert in featuredExperts"
          :key="expert.id"
          :expert="expert"
        />
      </v-slide-group>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import BaseHeaderLine from '~/components/ui/BaseHeaderLine.vue';
import FeaturedExpertCard from '~/components/FeaturedExpertCard.vue';
export default {
  components: { BaseHeaderLine, FeaturedExpertCard },
  computed: {
    ...mapGetters({
      featuredExperts: 'expert/getFeaturedExperts',
    }),
  },
};
</script>

<style lang="scss" scoped>
.featured-experts {
  margin: 70px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  &__experts {
    width: 85%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    &__arrow {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: $purpleColor;
      border-radius: 95px;
      width: 46px;
      height: 45px;
      & img {
        width: 24px;
        height: 24px;
      }
    }
  }
}
</style>
