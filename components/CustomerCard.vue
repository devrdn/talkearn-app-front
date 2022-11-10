<template>
  <v-carousel-item>
    <div class="customers__container">
      <div class="customers__container__left">
        <img :src="`/img/index/customers/${customer.avatar}`" alt="customer" />
      </div>
      <div class="customers__container__right">
        <div class="customers__container__right__head">
          <div class="customers__container__right__head__naming">
            <p class="customers__container__right__head__naming_name">
              {{ customer.name }}
            </p>
            <p class="customers__container__right__head__naming_status">
              {{ customer.job }}
            </p>
          </div>
          <div class="customers__container__right__head__rating">
            <v-rating
              color="#F4C95D"
              background-color="#F4C95D"
              readonly
              hover
              length="5"
              :value="customer.stars"
            ></v-rating>
            <p class="customers__container__right__head__rating_digit">
              {{ customer.stars }}
            </p>
          </div>
        </div>
        <div class="customers__container__right__text">
          <p>"{{ customer.quote }}"</p>
        </div>
      </div>
    </div>
  </v-carousel-item>
</template>

<script>
export default {
  props: {
    customer: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.customers {
  &__container {
    display: flex;
    gap: 60px;
    &__left {
      & img {
        height: 330px;
        border-radius: 180px 20px 180px 180px;
      }
    }
    &__right {
      display: flex;
      flex-direction: column;
      gap: 100px;
      &__head {
        display: flex;
        justify-content: space-between;
        &__naming {
          display: flex;
          flex-direction: column;
          gap: 7px;
          color: $darkColor;
          &_name {
            font-size: 20px;
            font-weight: 600;
          }
          &_status {
            font-size: 16px;
            font-weight: 400;
          }
        }
        &__rating {
          display: flex;
          flex-direction: row;
          align-items: center;
          font-size: 30px;
          font-weight: 600;
          gap: 20px;
        }
      }
      &__text {
        font-size: $fs;
        font-weight: 400;
        line-height: 1.5;
      }
      &__icons {
        display: flex;
        justify-content: space-between;
        &__arrows {
          & a {
            background-color: $purpleColor;
            padding: 14px 12px;
            border-radius: 95px;
            margin-right: 10px;
          }
        }
        &__avatars {
          background-color: $purpleColor;
          border-radius: 95px;
          width: 60px;
          &__circle {
            margin-right: 20px;
            border: 4px solid #ffffff;
          }
        }
      }
    }
  }
}
</style>
