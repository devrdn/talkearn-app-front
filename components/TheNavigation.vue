<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item">
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li class="navigation__item">
        <nuxt-link to="/category">Category</nuxt-link>
      </li>
      <li class="navigation__item">
        <nuxt-link to="/docs">Docs</nuxt-link>
      </li>
    </ul>
    <a class="navigation__item--purple" href="/src/#"> Connect wallet </a>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navigation {
  // .navigation__list
  display: flex;
  align-items: center;
  &__list {
    list-style-type: none;
    font-size: $fs;
    font-weight: 400;
  }

  // .navigation__item

  &__item {
    display: inline-block;
    margin-right: 50px;
  }

  // .navigation__item--purple

  &__item--purple {
    color: $whiteColor !important;
    font-size: $fs;
    font-weight: 600;
    background-color: $purpleColor;
    padding: 16px;
    border-radius: 37px;
  }
}
</style>
