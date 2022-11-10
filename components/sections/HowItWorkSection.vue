<template>
  <section class="how-it-works">
    <div class="how-it-works__left">
      <p class="how-it-works__left__little-title">How it works</p>
      <h1 class="how-it-works__left__title">
        Start find a Crypto expert you love with us easily
      </h1>
      <div class="how-it-works__left__accordion">
        <HowItWorkItem />
        <HowItWorkItem />
        <HowItWorkItem />
      </div>
    </div>
    <div class="how-it-works__right">
      <div class="how-it-works__right__video">
        <img src="/img/index/how it works/preview.png" alt="" />
        <video controls width="500" height="450" hidden>
          <source src="/img/index/how it works/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.how-it-works {
  max-width: 85%;
  margin: 70px auto;
  display: flex;
  justify-content: space-between;
  &__left {
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    &__little-title {
      color: $purpleColor;
      font-size: 18px;
    }
    &__title {
      color: $darkColor;
      font-size: 40px;
      font-weight: 600;
    }
    &__accordion {
      &__text:hover {
        display: block;
      }
      &__btn {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #444;
        cursor: pointer;
        padding: 18px;
        width: 645px;
        border: none;
        text-align: left;
        border-radius: 20px;
        box-shadow: 0px 7px 22px rgba(143, 134, 196, 0.07);
        transition: box-shadow 0.3s ease-in-out;
      }
      &__btn:hover {
        box-shadow: 0px 10px 29px rgba(62, 53, 120, 0.14);
      }
      &__btn1__number,
      &__btn2__number,
      &__btn3__number {
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 600;
        & span {
          font-weight: 600;
        }
      }

      &__btn1__number {
        & button {
          padding: 13px 25px;
          background-color: #f6ebff;
          border-radius: 20px;
          color: $purpleColor;
          font-size: 26px;
        }
      }
      &__btn2__number {
        & button {
          padding: 13px 25px;
          background-color: #e7e9ff;
          border-radius: 20px;
          color: #2b3dc7;
          font-size: 26px;
        }
      }
      &__btn3__number {
        & button {
          padding: 13px 25px;
          background-color: #e9ffef;
          border-radius: 20px;
          color: #3dcd65;
          font-size: 26px;
        }
      }
    }
  }
  &__right {
    &__video {
      & img,
      video {
        width: 500px;
        height: 450px;
        border-radius: 40px;
      }
    }
  }
}
</style>
