<template>
  <div class="header__container__searchfield">
    <input
      v-model="searchValue"
      type="search"
      class="header__container__searchfield__input"
      placeholder="Search here..."
    />
    <button @click.prevent="search(searchValue)">
      <img src="/img/index/search.svg" alt="search" />
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    searchValue: '',
  }),
  methods: {
    search(searchValue) {
      searchValue = '';
      this.$router.replace({ path: `/search/${searchValue}` });
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  &__container {
    &__searchfield {
      display: flex;
      align-items: center;

      & input {
        width: 400px;
        height: 50px;
        background: #ffffff;
        box-shadow: 0px 19px 84px rgba(0, 0, 0, 0.04);
        border-radius: 60px;
        padding-left: 20px;
        font-weight: 400;
        font-size: $fs;
      }

      &__input::-ms-clear {
        display: none;
      }

      & img {
        transform: translateX(-45px);
      }
    }
  }
}
</style>
