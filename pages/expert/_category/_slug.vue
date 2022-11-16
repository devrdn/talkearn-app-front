<template>
  <div class="expert-page">
    <!-- Banner -->
    <BaseBanner :title="expert.name" />

    <!-- Expert Info -->
    <div class="expert">
      <div class="expert__head">
        <div class="expert__head__left">
          <img :src="expert.image" alt="" />
          <div class="expert__head__left__info">
            <div class="expert__head__left__info__about">
              <div class="expert__head__left__info__about__text">
                <p class="expert__head__left__info__about__text__name">
                  {{ expert.name }}
                </p>
                <p v-if="expert.profession" class="expert__head__left__info__about__text__profession">
                  {{ expert.profession }}
                </p>
                <div class="expert__head__left__info__about__text__rating">
                  <v-rating
                    background-color="#eee"
                    color="warning"
                    readonly
                    hover
                    size="20"
                    length="5"
                    :value="Number(expert.rating)"
                  ></v-rating>
                  <span>{{ Number(expert.rating) }}</span>
                </div>
              </div>
              <div class="expert__head__left__info__status">
                <p
                  :class="{
                    online: expert.available,
                    offline: !expert.available,
                  }"
                >
                  {{ expert.available ? 'ONLINE' : 'OFFLINE' }}
                </p>
              </div>
            </div>
            <div class="expert__head__left__info__extra">
              <div v-if="expert.region" class="expert__head__left__info__extra__block">
                <span class="expert__head__left__info__extra__block__label"
                  >From</span
                >
                <span class="expert__head__left__info__extra__block__text"
                  >{{ expert.region }}</span
                >
              </div>
              <div class="expert__head__left__info__extra__block">
                <span class="expert__head__left__info__extra__block__label"
                  >Rate</span
                >
                <span class="expert__head__left__info__extra__block__text"
                  >${{ expert.price }}/hr</span
                >
              </div>
              <div class="expert__head__left__info__extra__block">
                <span class="expert__head__left__info__extra__block__label"
                  >Member since</span
                >
                <span class="expert__head__left__info__extra__block__text">{{
                  expert.memberSince
                }}</span>
              </div>
              <div class="expert__head__left__info__extra__block">
                <span class="expert__head__left__info__extra__block__label"
                  >Latest Review</span
                >
                <span class="expert__head__left__info__extra__block__text">{{
                  expert.lastReview
                }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="expert__head__right">
          <button>Call</button>
          <button>Schedule meeting</button>
        </div>
      </div>
      <div class="expert__tags">
        <CategoryTagItem
          v-for="(tag, index) in tags"
          :key="index"
          :tag-name="tag"
        />
      </div>
      <div class="expert__video" v-html="removeSlashed(expert.video)"></div>

      <div class="expert__text">
        <p>
          {{ expert.description }}
        </p>
      </div>

      <div class="expert__cards">
        <ExpertCardCall
          v-for="(service, index) in expert.services"
          :key="index"
          :service="service"
          :expert="expert"
        />
      </div>
    </div>
  </div>
</template>

<script>
import expertApi from '~/api/expertApi.js';

import CategoryTagItem from '~/components/CategoryTagItem.vue';
import ExpertCardCall from '~/components/ExpertCardCall.vue';
import BaseBanner from '~/components/ui/BaseBanner.vue';

export default {
  components: { BaseBanner, CategoryTagItem, ExpertCardCall },
  layout: () => 'emptyhero',
  async asyncData({ params, error }) {
    return await expertApi
      .getExpertBySlug(params.category, params.slug)
      .then((response) => {
        return { expert: response.data.data };
      })
      .catch((e) => {
        error({ statusCode: 404, message: e.response.data.errors });
      });
  },
  ssr: true,
  data: () => {
    return {
      tags: [
        'Blockchains',
        'Wallets',
        'Investments',
        'Trading',
        'Money Transfers',
      ],
      title: 'Crypto Startup Advisor',
    };
  },
  methods: {
    removeSlashed(text) {
      return text.replace(/\\/g, '');
    },
  },
};
</script>

<style lang="scss" scoped>

.expert {
  width: 70%;
  margin: 0 auto;
  margin-top: -20px;
  padding: 40px;
  position: relative;
  background: #ffffff;
  box-shadow: 0px 0px 28px rgba(62, 53, 120, 0.1);
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;

  &__head {
    width: 100%;
    display: flex;
    justify-content: space-between;

    &__left {
      width: 70%;
      display: flex;
      gap: 60px;

      img {
        border-radius: 94.5px;
      }

      &__info {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 20px;

        &__about {
          display: flex;
          gap: 30px;

          &__text {
            display: flex;
            flex-direction: column;
            gap: 25px;

            &__name {
              font-size: 35px;
              font-weight: 600;
            }

            &__rating {
              display: flex;
              align-items: center;
              gap: 10px;
              font-weight: 600;
            }
          }
        }

        &__extra {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;

          &__block {
            display: flex;
            flex-direction: column;

            &__label {
              font-size: $fs;
              font-weight: 400;
              margin-bottom: 5px;
            }

            &__text {
              font-size: $fs;
              font-weight: 600;
            }
          }
        }

        &__status {
          & .online {
            color: $purpleColor;
            border: 1px solid $purpleColor;
            border-radius: 39px;
            font-size: 14px;
            font-weight: 700;
            padding: 10px 16px;
          }
          & .offline {
            color: rgb(156, 156, 156);
            border: 1px solid rgb(156, 156, 156);
            border-radius: 39px;
            font-size: 14px;
            font-weight: 700;
            padding: 10px 16px;
          }
        }
      }
    }

    &__right {
      margin: auto;
      display: flex;
      flex-direction: column;
      gap: 16px;

      button {
        background: $purpleColor;
        padding: 15px 30px;
        color: $whiteColor;
        font-size: $fs;
        font-weight: 700;
        border-radius: 60px;
        box-shadow: 0px 5px 29px rgba(62, 53, 120, 0.14);
      }
    }
  }

  &__tags {
    align-self: flex-start;
    display: flex;
    gap: 20px;

    &-1,
    &-2,
    &-3,
    &-4,
    &-5 {
      color: $purpleColor;
      border: 1px solid #e9e6fe;
      border-radius: 50px;
      padding: 8px 22px;
    }
  }

  &__video {
    width: 100%;

    img {
      width: 100%;
    }
  }

  &__text {
    p {
      font-size: 18px;
      line-height: 1.5;
    }
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 35px;

    &__block {
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 0px 8px 24px rgba(31, 31, 51, 0.1);
      border-radius: 10px;

      &__img {
        width: 100%;
        border-radius: 10px 10px 0 0;
      }

      &__text {
        display: flex;
        flex-direction: column;
        gap: 40px;
        padding: 20px;

        &__author {
          display: flex;
          align-items: center;
          gap: 20px;

          &__img {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: 50%;
          }

          &__name {
            display: flex;
            flex-direction: column;
            gap: 10px;

            p {
              font-size: 18px;
              font-weight: 600;
            }

            &__rating {
              display: flex;
              align-items: flex-end;
              gap: 10px;
            }
          }
        }

        &__title {
          font-size: $fs;
          font-weight: 600;
        }

        &__call {
          display: flex;
          justify-content: space-between;
          align-items: center;

          &__price {
            font-size: 19px;
            font-weight: 600;
            margin-right: 20px;
          }

          &__minute {
            font-size: $fs;
            font-weight: 500;
          }

          &__btn {
            color: $whiteColor;
            font-size: $fs;
            font-weight: 700;
            background: $purpleColor;
            padding: 13px 23px;
            border-radius: 39px;
            box-shadow: 0px 10px 29px rgba(62, 53, 120, 0.14);
          }
        }
      }
    }
  }
}
</style>
