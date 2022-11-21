<template>
  <div class="sponsors">
    <SponsorListItem
      v-for="(sponsor, index) in sponsors"
      :key="index"
      :img="sponsor"
    />
  </div>
</template>

<script>
import SponsorListItem from '~/components/SponsorListItem.vue';

export default {
  components: { SponsorListItem },
  data: () => {
    return {
      sponsors: ['logo1', 'logo2', 'logo3', 'logo4', 'logo5'],
    };
  },
};
</script>

<style lang="scss" scoped>
.sponsors {
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 15px;
  @include rwdmax(375px) {
    margin: 0;
    width: 100%;
  }
}
</style>
