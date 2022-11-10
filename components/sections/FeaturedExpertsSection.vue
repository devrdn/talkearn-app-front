<template>
  <section class="featured-experts">
    <h1 class="main-header">Featured Experts this week</h1>
    <UiBaseHeaderLine />
    <div class="featured-experts__experts">
      <!-- TODO: change key (temporary use index as key) -->
      <v-slide-group show-arrows class="expert-slider">
        <FeaturedExpertCard
          v-for="(expert, index) in experts"
          :key="index"
          :expert="expert"
        />
      </v-slide-group>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      experts: 'expert/getExperts',
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
    justify-content: space-between;
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
