<template>
  <div>
    <div class="how-it-works__left__accordion__btn">
      <div class="how-it-works__left__accordion__btn1__number">
        <button><span>{{ info.number }}</span></button>
        <p>{{ info.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      required: true,
    }
  },
};
</script>

<style lang="scss" scoped>
.how-it-works {
  &__left {
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
        @include rwdmax(735px) {
          width: 500px;
        }

        @include rwdmax(561px) {
          width: 300px;
        }

        @include rwdmax(360px) {
          width: 240px;
        }

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
}
</style>
