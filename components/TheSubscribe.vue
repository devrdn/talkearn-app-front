<template>
  <div class="subscribe">
    <div class="subscribe__container">
      <div class="subscribe__container__left">
        <p>Don't miss our weekly updates about experts</p>
      </div>
      <div class="subscribe__container__right">
        <div class="subscribe__container__right__form">
          <input
            type="email"
            class="subscribe__container__right__form__input"
            placeholder="Enter your email address..."
          />
          <input
            type="submit"
            class="subscribe__container__right__form__btn"
            value="SUBSCRIBE"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.subscribe {
  width: 100%;
  margin-top: 70px;
  background-color: #1f2131;
  color: $whiteColor;
  &__container {
    width: 85%;
    //margin: 0 auto;
    padding: 100px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include rwdmax(425px) {
      flex-direction: column;
    }
    @include rwdmax(375px) {
      margin: 0 auto;
      width: 100%;
    }
    &__left {
      width: 50%;
      & p {
        font-size: 40px;
        font-weight: 600;
        @include rwdmax(425px) {
          font-size: 30px;
          text-align: center;
        }
      }
    }
    &__right {
      &__form {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        @include rwdmax(768px) {
          flex-direction: column;
        }
        &__input {
          color: $whiteColor;
          font-size: 18px;
          font-weight: 400;
          width: 580px;
          height: 74px;
          border: 1px solid #363843;
          border-radius: 60px;
          background: #1f2131;
          padding-left: 20px;
          position: relative;
          @include rwdmax(768px) {
            margin-top: 15px;
            width: 300px;
          }
          @include rwdmax(590px) {
            font-size: 14px;
          }
          @include rwdmax(425px) {
            height: 50px;
          }
          @include rwdmax(375px) {
            width: 220px;
          }
        }
        &__btn {
          position: absolute;
          background: $accentColor;
          box-shadow: 0px 19px 29px rgba(62, 53, 120, 0.14);
          border-radius: 37px;
          padding: 16px 40px;
          color: $whiteColor;
          font-size: 18px;
          font-weight: 600;
          transform: translateX(-13px);
          @include rwdmax(768px) {
            position: relative;
            margin-top: 20px;
          }
        }
      }
    }
  }
}
</style>
