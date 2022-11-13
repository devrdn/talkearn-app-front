<template>
  <header class="header">
    <div class="header__container">
      <div class="header__container__logo">
        <TheLogo />
      </div>

      <div class="header__container__searchfield">
        <input
          type="search"
          class="header__container__searchfield__input"
          placeholder="Search here..."
        />
        <a href="/src/search-page.html">
          <img src="/img/index/search.svg" alt="search" />
        </a>
      </div>

      <!-- ~ TODO: make separate component with own classes ~ -->
      <TheNavigation />
      <!-- ~ -->
    </div>
  </header>
</template>

<script>
import TheNavigation from './TheNavigation.vue';

export default { components: { TheNavigation } };
</script>

<style lang="scss">
.header {
  background-color: $bckgColor;
  width: 100%;
  &__container {
    max-width: 85%;
    margin: 0px auto;
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &__logo {
      display: flex;
    }

    &__buttons {
      display: flex;
      align-items: center;
      &__menu {
        list-style-type: none;
        font-size: $fs;
        font-weight: 400;
        li {
          display: inline-block;
          margin-right: 50px;
        }
        a {
          display: block;
          color: $darkColor;
        }
      }
      &__connect {
        color: $whiteColor !important;
        font-size: $fs;
        font-weight: 600;
        background-color: $purpleColor;
        padding: 16px;
        border-radius: 37px;
      }
    }
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
