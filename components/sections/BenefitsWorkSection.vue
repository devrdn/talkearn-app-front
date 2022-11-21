<template>
  <section class="benefits">
    <div class="benefits__left">
      <div class="benefits__left__title">
        <h1 class="benefits__left__title">
          Benefits Of Working on
          <span class="benefits__left__title-purple">TalkEarn</span> platform
        </h1>
      </div>
      <p class="benefits__left__text">
        Watch on-demand video lectures from renowned instructors in subjects
        such as Proggraming, business, computer science, data science, and
        language learning.
      </p>
      <div class="benefits__left__btn">
        <a href="/src/#" class="benefits__left__btn-main">Start learning</a>
        <a href="/src/#" class="benefits__left__btn-secondary"
          ><u>Read more</u></a
        >
      </div>
    </div>
    <div class="benefits__right">
      <img src="/img/index/benefits/benefits.png" alt="man" />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.benefits {
  width: 85%;
  margin: 70px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @include rwdmax(1074px) {
    text-align: center;
    flex-direction: column;
  }
  &__left {
    @include rwdmax(1074px) {
      width: 100%;
      align-items: center;
      gap: 30px;
    }
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 100px;
    &__title {
      font-size: 40px;
      font-weight: 600;
      color: $darkColor;
    }
    &__title span {
      color: $purpleColor;
    }
    &__text {
      @include rwdmax(1074px) {
        text-align: center;
      }
      font-size: 18px;
      font-weight: 400;
      line-height: 1.3;
    }
    &__btn {
      @include rwdmax(1074px) {
        margin-top: 30px;
      }
      @include rwdmax(405px) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      &-main {
        color: $whiteColor;
        font-size: 18px;
        font-weight: 600;
        background-color: $purpleColor;
        border-radius: 16px;
        padding: 20px 43px;
      }
      &-secondary {
        margin-left: 50px;
        font-size: 18px;
        color: $purpleColor;
        @include rwdmax(405px) {
          margin-left: 0px;
        }
      }
    }
  }
  &__right {
    @include rwdmax(1074px) {
      margin-top: 40px;
    }

    @include rwdmax(528px) {
      display: none;
    }
    & img {
      height: 450px;
      border-radius: 90px 0 90px 0;
    }
  }
}
</style>
