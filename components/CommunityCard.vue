<template>
  <div class="community__container__cards__block">
    <img
      src="/img/become-expert/photo.png"
      alt="photo"
      class="community__container__cards__block__img"
    />
    <div class="community__container__cards__block__text">
      <div class="community__container__cards__block__text__name">
        Angela Moss
      </div>
      <div class="community__container__cards__block__text__profession">
        Near developer
      </div>
    </div>
    <img
      src="/img/become-expert/dots.svg"
      alt="dots"
      class="community__container__cards__block__dots"
    />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.community {
  &__container {
    &__cards {
      position: relative;
      display: flex;
      gap: 40px;

      &__block {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
        padding: 20px 70px;
        box-shadow: 0px 2px 28px rgba(62, 53, 120, 0.09);
        border-radius: 18px;

        &__img {
          width: 115px;
          height: 115px;
          border-radius: 50%;
        }

        &__text {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;

          &__name {
            font-weight: 600;
            font-size: 20px;
            color: $darkColor;
          }

          &__profession {
            font-weight: 400;
            font-size: 14px;
            color: $darkColor;
          }
        }

        &__dots {
          position: absolute;
          width: 30px;
          transform: translateX(100px);
        }
      }

      &__block:hover {
        box-shadow: 0px 11px 39px rgba(0, 0, 0, 0.07);
      }
    }
  }
}
</style>
