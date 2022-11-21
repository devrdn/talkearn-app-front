<template>
  <div class="category-page">
    <div class="crypto-topics">
      <h1 class="main-header">Crypto topics</h1>
      <UiBaseHeaderLine />
      <div v-if="error.message" class="crypto-topics__error">
        Ошибка загрузки
      </div>
      <div v-else class="crypto-topics__all">
        <CategoryCard
          v-for="category in categories"
          :key="category.id"
          :category="category"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CategoryCard from '~/components/CategoryCard.vue';
export default {
  components: { CategoryCard },
  async fetch({ store }) {
    if (store.getters['category/getCategories'].length === 0) {
      await store.dispatch('category/fetchCategories');
    }
  },
  computed: {
    ...mapGetters({
      categories: 'category/getCategories',
      error: 'category/getError',
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
  margin-bottom: 50px;
  gap: 50px;
  &__all {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    @include rwdmax(1200px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
}
</style>
