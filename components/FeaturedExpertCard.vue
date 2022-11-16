<template>
  <v-slide-item>
    <div class="featured-experts__experts__card">
      <div class="featured-experts__experts__card_left">
        <div class="featured-experts__experts__card_left__photo">
          <v-badge
            v-if="expert.available"
            offset-x="-60"
            offset-y="38"
            color="green darken-1"
          />
          <v-badge v-else offset-x="-60" offset-y="38" color="grey lighten-1" />
          <v-avatar size="80">
            <img :src="expert.image" alt="photo" />
          </v-avatar>
        </div>
        <div class="featured-experts__experts__card_left__text">
          <p class="featured-experts__experts__card_left__text_name">
            {{ expert.name }}
          </p>
          <p class="featured-experts__experts__card_left__text_profession">
            {{ expert.profession }}
          </p>
        </div>
      </div>
      <div class="featured-experts__experts__card_right">
        <div class="featured-experts__experts__card_right_stars">
          <v-rating
            background-color="#eee"
            color="warning"
            readonly
            hover
            size="20"
            length="5"
            :value="Number(expert.rating)"
          ></v-rating>
          <span>{{ expert.rating }}</span>
        </div>
        <nuxt-link
          class="featured-experts__experts__card_right_btn"
          :to="`/expert/${expert.categorySlug}/${expert.slug}`"
        >
          ${{ expert.price }}/hr
        </nuxt-link>
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
      margin-right: 30px;
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
          margin-right: 15px;
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
