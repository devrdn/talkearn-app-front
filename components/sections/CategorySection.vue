<template>
  <section class="crypto-topics">
    <h1 class="main-header">Crypto topics</h1>
    <BaseHeaderLine />
    <div class="crypto-topics__all">
      <CategoryCard
        v-for="category in categories"
        :key="category.id"
        :category="category"
      />
    </div>
  </section>
</template>

<script>
import {  mapGetters } from 'vuex';
import CategoryCard from '~/components/CategoryCard.vue';
import BaseHeaderLine from '~/components/ui/BaseHeaderLine.vue';

export default {
  components: { CategoryCard, BaseHeaderLine},
  computed: {
    ...mapGetters({
      categories: 'category/getCategories',
    }),
  },
};
</script>

<style lang="scss" scoped>
.crypto-topics {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  gap: 50px;
  &__all {
    display: flex;
    gap: 25px;
    &__topic {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      // background-color: #5241c1;
      width: 220px;
      height: 225px;
      box-shadow: 0px 5px 10px rgba(31, 31, 51, 0.3);
      border-radius: 20px;
      color: $darkColor;
      font-size: 20px;
      font-weight: 500;
      transition: background-color 0.3s ease-in-out;
      transition: color 0.15s ease-in-out;
    }
    &__topic:hover {
      color: $whiteColor;
      background-color: $purpleColor;
    }
  }
}
</style>
