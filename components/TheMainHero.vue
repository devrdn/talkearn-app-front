<template>
  <div>
    <div class="main">
      <div class="main__container">
        <div class="main__left">
          <p class="main__left__title">Find out</p>
          <p class="main__left__title main__left__title_purple">
            Crypto Expert
          </p>
          <p class="main__left__title">for consulting and gigs</p>
          <p class="main__left__subtitle">
            A community of crypto freelancers what can consult you and give
            answers on every cypto topic
          </p>
          <div class="main__left__searchfield">
            <input
              type="search"
              placeholder="Search here..."
              class="main__left__searchfield__input"
            />
            <button class="main__left__searchfield__button">Search</button>
          </div>
        </div>
        <div class="main__right">
          <img class="main__right__man" src="/img/index/main/man.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.main {
  background-color: $bckgColor;
  &__container {
    max-width: 85%;
    margin: 0px 70px auto;
    padding-top: 70px;
    display: flex;
    justify-content: space-between;
  }
  &__left {
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 3px;
    &__title {
      margin-top: 5px;
      color: $darkColor;
      font-size: 55px;
      font-weight: 600;
      &_purple {
        color: $purpleColor;
      }
    }
    &__subtitle {
      font-size: $fs;
      color: $darkColor;
      font-weight: 500;
      line-height: 1.3;
      margin-top: 30px;
      margin-bottom: 0px;
    }
    &__searchfield {
      position: relative;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-size: $fs;
      margin-top: 30px;
      &__input {
        padding-left: 20px;
        font-size: inherit;
        width: 500px;
        height: 65px;
        background: $whiteColor;
        box-shadow: 0px 19px 84px rgba(0, 0, 0, 0.04);
        border-radius: 60px;
      }
      &__button {
        position: absolute;
        width: 170px;
        height: 50px;
        background: $purpleColor;
        border-radius: 30px;
        color: $whiteColor;
        font-size: inherit;
        font-family: 'inherit';
        transform: translateX(-8px);
        transition: background 0.3s ease-in-out;
      }
      &__button:hover {
        background-color: #5241c1;
      }
    }
  }
  &__right {
    width: 50%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    &__man {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
