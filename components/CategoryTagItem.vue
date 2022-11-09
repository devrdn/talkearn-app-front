<template>
  <div class="main-cat__container__content__tag">
    <span>{{ tagName }}</span>
  </div>
</template>

<script>
export default {
  props: {
    tagName: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.main-cat {
  &__container {
    &__content {
      margin-top: 75px;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 30px;

      &__tag {
        display: flex;
        gap: 20px;

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
</style>
