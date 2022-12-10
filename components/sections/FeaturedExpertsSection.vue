<template>
  <section class="featured-experts">
    <h1 class="main-header">{{ title }}</h1>
    <BaseHeaderLine />
    <div class="featured-experts__experts">
      <v-slide-group  show-arrows class="expert-slider">
        <template #next>
          <svg
            id="icons_1_"
            class="slider__right-arrow"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            fill="#5f4bdb"
            viewBox="0 0 128 128"
            style="enable-background: new 0 0 128 128"
            xml:space="preserve"
          >
            <g id="row1_1_">
              <g id="_x31__3_">
                <path
                  id="_x32__2_"
                  class="st2"
                  d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 121.6C32.2 121.6 6.4 95.8 6.4 64S32.2 6.4 64 6.4s57.6 25.8 57.6 57.6-25.8 57.6-57.6 57.6zM49.2 38.4 73.6 64 49.2 89.6h13.5L86.4 64 62.7 38.4H49.2z"
                />
              </g>
            </g>
          </svg>
        </template>
        <template #prev>
          <svg
            id="icons_1_"
            version="1.1"
            fill="#5f4bdb"
            class="slider__left-arrow"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            viewBox="0 0 128 128"
            style="enable-background: new 0 0 128 128"
            xml:space="preserve"
          >
            <g id="row2_1_">
              <g id="_x31__4_">
                <path
                  id="left_3_"
                  class="st2"
                  d="M64 .3C28.7.3 0 28.8 0 64s28.7 63.7 64 63.7 64-28.5 64-63.7S99.3.3 64 .3zm0 121C32.2 121.3 6.4 95.7 6.4 64 6.4 32.3 32.2 6.7 64 6.7s57.6 25.7 57.6 57.3c0 31.7-25.8 57.3-57.6 57.3zm1.3-82.8L41.6 64l23.6 25.5h13.5L54.4 64l24.4-25.5H65.3z"
                />
              </g>
            </g>
          </svg>
        </template>
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
  props: {
    title: {
      type: String,
      default: 'Featured Experts this week',
    },
  },
  computed: {
    ...mapGetters({
      featuredExperts: 'expert/getFeaturedExperts',
    }),
  },
};
</script>

<style lang="scss" scoped>
.slider__left-arrow {
  width: 40px;
  position: absolute;
  top: -60px;
  right: 120px;
  @include rwdmax(670px) {
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 60px;
    text-align: center;
  }
}
.slider__right-arrow {
  position: absolute;
  top: -60px;

  right: 60px;
  width: 40px;
  @include rwdmax(670px) {
    margin-left: auto;
    margin-right: auto;
    left: 60px;
    right: 0;
    text-align: center;
  }
}
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
    @include rwdmax(670px) {
      margin-top: 70px;
      width: 100%;
    }
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
