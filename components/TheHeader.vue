<template>
  <header class="header">
    <div class="header__container">
      <img
        src="/img/index/main/TET-circle-icon.svg"
        class="mobile-icon"
        alt=""
      />
      <div class="header__container__logo">
        <TheLogo />
      </div>

      <TheSearch />

      <TheNavigation />
      <img src="/img/index/main/wallet.svg" class="mobile-wallet" alt="" />
    </div>
  </header>
</template>

<script>
import TheNavigation from '~/components/TheNavigation.vue';
import TheSearch from '~/components/TheSearch.vue';

export default { components: { TheNavigation, TheSearch } };
</script>

<style lang="scss">
.mobile {
  &-icon {
    display: none;
    @include rwdmax(730px) {
      display: block !important;
      width: 50px;
      margin-left: 78px;
    }
    @include rwdmax(450px) {
      display: block !important;
      margin-left: 60px;
      width: 30px;
    }
    @include rwdmax(345px) {
      display: block !important;
      margin-left: 40px;
      width: 30px;
    }
  }
  &-wallet {
    display: none !important;
    @include rwdmax(575px) {
      display: block !important;
      width: 41px;
    }
    @include rwdmax(450px) {
      display: block !important;
      width: 30px;
    }
  }
}
.header {
  background-color: $bckgColor;
  width: 100%;

  &__container {
    max-width: 85%;
    @include rwdmax(1207px) {
      margin: 0px auto;
      max-width: 85%;
    }
    @include rwdmax(1400px) {
      margin: 0px auto;
      max-width: 95%;
    }

    @include rwdmax(1184px) {
      width: 100%;
    }

    @include rwdmax(850px) {
      display: flex;
      flex-direction: row !important;
      align-items: center;
    }

    @include rwdmax(730px) {
      max-width: 100%;
      margin: 0;
      padding-top: 10px;
      padding-bottom: 10px;
      background: #fff;
      padding-right: 10px;
      padding-left: 10px;
    }
    margin: 0px auto;
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__logo {
      display: flex;
      @include rwdmax(730px) {
        display: none;
      }
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
