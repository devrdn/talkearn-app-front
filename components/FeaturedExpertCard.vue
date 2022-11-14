<template>
  <v-slide-item>
    <div class="featured-experts__experts__card">
      <div class="featured-experts__experts__card_left">
        <div class="featured-experts__experts__card_left__photo">
          <v-avatar size="80">
            <img :src="`/img/index/experts/${expert.img}`" alt="photo" />
          </v-avatar>
        </div>
        <div class="featured-experts__experts__card_left__text">
          <p class="featured-experts__experts__card_left__text_name">
            {{ expert.name }}
          </p>
          <p class="featured-experts__experts__card_left__text_profession">
            {{ expert.job }}
          </p>
        </div>
      </div>
      <div class="featured-experts__experts__card_right">
        <div class="featured-experts__experts__card_right_stars">
          <v-rating
              color="#F4C95D"
              background-color="#F4C95D"
              readonly
              hover
              size="20"
              length="5"
              :value="3"
            ></v-rating>
          <span>4.3</span>
        </div>
        <a class="featured-experts__experts__card_right_btn" href="#">
          ${{ expert.price }}/hr
        </a>
      </div>
    </div>
  </v-slide-item>
</template>

<script>
export default {
  props: {
    expert: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.featured-experts {
  &__experts {
    &__card {
      padding: 20px;
      width: 320px;
      &_left {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        &__photo {
          width: 85px;
          height: 85px;
          overflow: hidden;
          & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
          }
        }

        &__text {
          display: flex;
          flex-direction: column;
          gap: 5px;
          &_name {
            font-weight: 600;
          }
          & _profession {
            font-weight: 400;
          }
        }
      }
      &_right {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        &_stars {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-right: 5px;
        }
        & img {
          display: inline-block;
        }
        &_btn {
          background-color: $accentColor;
          color: $whiteColor;
          padding: 10px 20px;
          border-radius: 40px;
        }
      }
    }
  }
}
</style>
