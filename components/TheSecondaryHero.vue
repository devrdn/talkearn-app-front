<template>
  <div class="main-cat">
    <div class="main-cat__container">
      <div class="main-cat__container__content">
        <img
          src="/img/favicon/favicon.svg"
          alt="Logo"
          class="main-cat__container__content__logo"
        />
        <div class="cat__container__content__text">
          <div class="main-cat__container__content__text-1">
            Search over <span>30,000+</span> talented experts
          </div>
          <div class="main-cat__container__content__text-2">
            in the world through <span>TalkEarn</span>
          </div>
        </div>
        <div class="main-cat__container__content__searchfield">
          <select class="main-cat__container__content__searchfield__select">
            <option value="">Category</option>
            <option value="1">Blockchains</option>
            <option value="2">Wallets</option>
            <option value="3">Money tranfers</option>
            <option value="4">Investments</option>
          </select>
          <input
            type="search"
            class="main-cat__container__content__searchfield__input"
            placeholder="Search here..."
          />
          <div class="main-cat__container__content__searchfield__link">
            <a
              href="/#"
              class="main-cat__container__content__searchfield__link__text"
              >Search
            </a>
            <img src="/img/cat-one/main/search.svg" alt="search" />
          </div>
        </div>
        <div class="main-cat__container__content__tags">
          <CategoryTagItem
            v-for="(tag, index) in tags"
            :key="index"
            :tag-name="tag"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      tags: [
        'Blockchains',
        'Wallets',
        'Investments',
        'Trading',
        'Money Transfers',
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.main-cat {
  background-color: $bckgColor;
  &__container {
    width: 85%;
    height: 700px;
    margin: 0px 70px auto;
    padding-top: 70px;
    position: relative;
    display: flex;
    justify-content: center;
    background-image: url('/img/cat-one/main/background.png');
    background-repeat: no-repeat;
    background-size: 100%;

    &__content {
      margin-top: 75px;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 30px;

      &__logo {
        height: 100px;
      }

      &__text {
        &-1,
        &-2 {
          font-size: 35px;
          font-weight: 500;
          text-align: center;
          color: $darkColor;
          margin-bottom: 7px;

          & span {
            color: $purpleColor;
            font-weight: 800;
          }
        }
      }

      &__searchfield {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 850px;
        height: 80px;

        & select {
          background-color: #fff;
          border-radius: 50px 0 0 50px;
          padding: 19.5px;
          appearance: none;
          background-image: url('/img/cat-one/all-experts/arrow.svg');
          background-position: calc(100% - 1.1em) 1.7em;
          background-repeat: no-repeat;
        }

        &__input {
          padding: 20px;
          width: 500px;
          border-radius: 0 50px 50px 0;
          background-color: #fff;
        }

        &__link {
          display: flex;
          align-items: center;
          gap: 10px;
          position: absolute;
          transform: translateX(245px);
          background: $accentColor;
          box-shadow: 0px 19px 84px rgba(62, 53, 120, 0.05);
          border-radius: 37px;
          padding: 12px 35px;

          & img {
            height: 20px;
          }

          & a {
            color: $whiteColor;
            font-weight: 600;
            padding-top: 1px;
          }
        }
      }

      &__tags {
        display: flex;
        gap: 20px;

        &-1,
        &-2,
        &-3,
        &-4,
        &-5 {
          border: 1px solid #e9e6fe;
          border-radius: 50px;
          padding: 8px 22px;

          & span {
            font-size: 14px;
            font-weight: 500;
            color: $darkColor;
          }
        }
      }
    }
  }
}
</style>
