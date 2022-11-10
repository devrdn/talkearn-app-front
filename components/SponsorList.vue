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
export default {
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
}
</style>
