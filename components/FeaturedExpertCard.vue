<template>
  <v-slide-item>
    <div class="all-experts__container__cards__block">
      <nuxt-link
        :to="{ path: `/expert/${expert.categorySlug}/${expert.slug}` }"
      >
        <div class="all-experts__container__cards__block__photo">
          <img :src="expert.image" alt="photo" />
          <div
            :class="{
              'all-experts__container__cards__block__photo__online':
                expert.available,
              'all-experts__container__cards__block__photo__offline':
                !expert.available,
            }"
          >
            {{ expert.available ? 'ONLINE' : 'UNAVAILABLE' }}
          </div>
        </div>
        <div class="all-experts__container__cards__block__info">
          <p class="all-experts__container__cards__block__info__name">
            {{ expert.name }}
          </p>
          <p
            v-if="expert.profession"
            class="all-experts__container__cards__block__info__proffesion"
          >
            {{ expert.profession }}
          </p>
          <div class="all-experts__container__cards__block__info__rating">
            <v-rating
              color="#F4C95D"
              background-color="#F4C95D"
              readonly
              hover
              length="5"
              :value="Number(expert.rating)"
            >
            </v-rating>
            <p
              class="all-experts__container__cards__block__info__rating__number"
            >
              {{ expert.rating }}
            </p>
          </div>
        </div>
        <div class="all-experts__container__cards__block__more-info">
          <div
            v-if="expert.region"
            class="all-experts__container__cards__block__more-info__text"
          >
            <span>From</span>
            <p>{{ expert.region }}</p>
          </div>
          <div class="all-experts__container__cards__block__more-info__text">
            <span>Member since</span>
            <p>
              {{ expert.memberSince }}
            </p>
          </div>
          <div class="all-experts__container__cards__block__more-info__text">
            <span>Rate</span>
            <p>$ {{ expert.price }} /hr</p>
          </div>
          <div
            v-if="expert.lastReview"
            class="all-experts__container__cards__block__more-info__text"
          >
            <span>Latest Review</span>
            <p>{{ expert.lastReview }}</p>
          </div>
        </div>
      </nuxt-link>
      <div class="all-experts__btns">
        <nuxt-link to="/"></nuxt-link>
        <nuxt-link
          v-show="expert.available === 'ONLINE'"
          to="/"
          class="all-experts__btn"
          >Call
        </nuxt-link>
        <nuxt-link to="/" class="all-experts__btn">Schedule</nuxt-link>
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
.all-experts {
  color: #1f2131 !important;
  &__btns {
    margin-top: 10px;
    padding-bottom: 10px;
  }
  &__btn {
    background: $purpleColor;
    padding: 15px 30px;
    color: $whiteColor;
    font-size: $fs;
    font-weight: 700;
    border-radius: 60px;
    box-shadow: 0px 5px 29px rgba(62, 53, 120, 0.14);
  }
  &__container {
    &__cards {
      margin-top: 50px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      justify-items: center;
      gap: 45px;

      &__block {
        width: 300px;
        border-radius: 18px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 25px;
        padding: 10px;

        &__photo {
          display: flex;
          flex-direction: column;
          align-items: center;

          &__online {
            color: $whiteColor;
            font-size: 14px;
            font-weight: 700;
            background-color: #30c736;
            border-radius: 39px;
            padding: 10px 20px;
            margin-top: -25px;
          }

          &__offline {
            color: $whiteColor;
            font-size: 14px;
            font-weight: 700;
            background-color: rgb(187, 187, 187);
            border-radius: 39px;
            padding: 10px 20px;
            margin-top: -25px;
          }

          & img {
            width: 110px;
            height: 110px;
            border-radius: 50%;
            object-fit: cover;
          }
        }

        &__info {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;

          &__name {
            font-size: 20px;
            font-weight: 600;
          }

          &__proffesion {
            font-size: 15px;
            font-weight: 400;
          }

          &__rating {
            display: flex;
            align-items: center;
            gap: 10px;

            &__number {
              font-size: 16px;
              font-weight: 700;
            }
          }
        }

        &__more-info {
          display: flex;
          flex-direction: column;
          gap: 10px;

          &__text {
            display: flex;
            justify-content: space-between;
            gap: 60px;

            & span {
              font-size: 14px;
              font-weight: 400;
            }

            & p {
              font-size: 14px;
              font-weight: 600;
            }
          }
        }
      }

      &__block:hover {
        box-shadow: 0px 11px 39px rgba(0, 0, 0, 0.07);
      }
    }
  }
}
// .featured-experts {
//   &__experts {
//     &__card {
//       padding: 20px;
//       width: 320px;
//       margin-right: 30px;

//       &_left {
//         display: flex;
//         flex-direction: row;
//         align-items: center;
//         gap: 10px;

//         &__photo {
//           width: 85px;
//           height: 85px;
//           overflow: hidden;

//           & img {
//             width: 100%;
//             height: 100%;
//             object-fit: cover;
//             border-radius: 50%;
//           }
//         }

//         &__text {
//           display: flex;
//           flex-direction: column;
//           gap: 5px;

//           &_name {
//             font-weight: 600;
//           }

//           & _profession {
//             font-weight: 400;
//           }
//         }
//       }

//       &_right {
//         display: flex;
//         flex-direction: row;
//         justify-content: space-around;
//         align-items: center;

//         &_stars {
//           display: flex;
//           align-items: center;
//           gap: 7px;
//           margin-right: 15px;
//         }

//         & img {
//           display: inline-block;
//         }

//         &_btn {
//           background-color: $accentColor;
//           color: $whiteColor;
//           padding: 10px 20px;
//           border-radius: 40px;
//         }
//       }
//     }
//   }
// }
</style>
