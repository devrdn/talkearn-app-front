<template>
  <div class="become-expert">
    <div class="become-expert__container">
      <img
        src="/img/index/become an expert/bckg.png"
        alt="backgroung image"
        class="become-expert__container__img"
      />
      <div class="become-expert__container__text">
        <h2 class="become-expert__container__text__header">
          Are you interested in
        </h2>
        <h2 class="become-expert__container__text__header">
          becoming an expert?
        </h2>
        <a href="#" class="become-expert__container__text__btn">Join With Us</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.become-expert {
  margin-top: 60px;
  &__container {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    &__text {
      margin-left: 500px;
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      &__header {
        font-size: 30px;
        font-weight: 600;
        color: $darkColor;
        line-height: 1.3;
      }
      &__btn {
        margin-top: 20px;
        color: $whiteColor;
        font-size: 18px;
        font-weight: 700;
        background-color: $purpleColor;
        border-radius: 16px;
        padding: 20px 40px;
      }
    }
    & img {
      width: 85%;
      height: 100%;
    }
  }
}
</style>
