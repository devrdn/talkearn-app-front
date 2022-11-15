<template>
  <!-- Featured Experts -->
  <v-container fluid ma-0 pa-0>
    <FeaturedExpertsSection />

    <!-- All Expert Section -->
    <div class="all-experts">
      <div class="all-experts__container">
        <div class="all-experts__container__head">
          <p class="all-experts__container__head__left">
            Showing {{ experts.length }} of 234 Experts
          </p>
          <div class="all-experts__container__head__right">
            <div class="all-experts__container__head__right__online">
              <p>Online</p>
              <label
                class="all-experts__container__head__right__online__switch"
              >
                <input type="checkbox" />
                <span
                  class="all-experts__container__head__right__online__slider round"
                ></span>
              </label>
            </div>
            <div class="all-experts__container__head__right__category">
              <select
                class="all-experts__container__head__right__category__select"
              >
                <option value="">Category</option>
                <option value="1">Blockchains</option>
                <option value="2">Wallets</option>
                <option value="3">Money tranfers</option>
                <option value="4">Investments</option>
              </select>
            </div>
            <div class="all-experts__container__head__right__filter">
              <a
                class="all-experts__container__head__right__filter__link"
                href="/"
              >
                <img src="/img/cat-one/all-experts/filter.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div class="all-experts__container__cards">
          <!-- Expert Card List -->
          <ExpertCardAbout />
        </div>
      </div>
    </div>
    <SponsorList />
  </v-container>
</template>

<script>
import ExpertCardAbout from '~/components/ExpertCardAbout.vue';

export default {
  components: { ExpertCardAbout },
  layout: () => 'secondary',
  data: () => {
    return {
      experts: [
        {
          status: 'AVAILABLE',
          job: 'Mining specialist',
          stars: 4,
          from: 'New York, US',
          since: new Date('01.10.2008'),
          rate: 50,
          latestReview: new Date('11.02.2022'),
        },
        {
          status: 'AVAILABLE',
          job: 'Mining specialist',
          stars: 4,
          from: 'New York, US',
          since: new Date('01.10.2008'),
          rate: 50,
          latestReview: new Date('11.02.2022'),
        },
        {
          status: 'AVAILABLE',
          job: 'Mining specialist',
          stars: 4,
          from: 'New York, US',
          since: new Date('01.10.2008'),
          rate: 50,
          latestReview: new Date('11.02.2022'),
        },
        {
          status: 'AVAILABLE',
          job: 'Mining specialist',
          stars: 4,
          from: 'New York, US',
          since: new Date('01.10.2008'),
          rate: 50,
          latestReview: new Date('11.02.2022'),
        },
        {
          status: 'AVAILABLE',
          job: 'Mining specialist',
          stars: 4,
          from: 'New York, US',
          since: new Date('01.10.2008'),
          rate: 50,
          latestReview: new Date('11.02.2022'),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.all-experts {
  &__container {
    width: 85%;
    margin: 70px auto;
    display: flex;
    flex-direction: column;

    &__head {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &__left {
        font-size: 30px;
        font-weight: 600;
      }

      &__right {
        display: flex;
        gap: 40px;
        align-items: center;
        font-size: $fs;
        font-weight: 600;

        &__online {
          display: flex;
          align-items: center;
          gap: 10px;

          &__switch {
            position: relative;
            display: inline-block;
            width: 50px;
            height: 24px;
          }

          &__switch input {
            display: none;
          }

          &__slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            -webkit-transition: 0.4s;
            transition: 0.4s;
          }

          &__slider:before {
            position: absolute;
            content: '';
            height: 16px;
            width: 16px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            -webkit-transition: 0.4s;
            transition: 0.4s;
          }

          input:checked + &__slider {
            background-color: $purpleColor;
          }

          input:focus + &__slider {
            box-shadow: 0 0 1px $purpleColor;
          }

          input:checked + &__slider:before {
            -webkit-transform: translateX(26px);
            -ms-transform: translateX(26px);
            transform: translateX(26px);
          }

          /* Rounded sliders */
          &__slider.round {
            border-radius: 34px;
          }

          &__slider.round:before {
            border-radius: 50%;
          }
        }
        &__category {
          & select {
            font-size: 18px;
            font-weight: 500;
            background-color: #fff;
            border: 1px solid #e6e6e6;
            border-radius: 60px;
            padding: 15px 20px 15px 20px;
            appearance: none;
            background-image: url(/img/cat-one/all-experts/arrow.svg);
            background-position: calc(100% - 1.1em) 1.05em;
            background-repeat: no-repeat;
          }
        }
        &__filter {
          & a {
            background: #e6e6e6;
            border-radius: 60px;
            padding: 18px 20px 20px;
          }
        }
      }
    }

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
            align-items: flex-end;
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

    &__pagination {
      margin: 60px auto;
      display: flex;
      gap: 35px;
      align-items: center;
      &__previous,
      &__next {
        display: flex;
        align-items: center;
        gap: 15px;
        & span {
          color: $purpleColor;
          font-size: 18px;
          font-weight: 500;
        }
      }
      &__numbers {
        display: flex;
        gap: 10px;
        & span {
          color: $purpleColor;
          font-size: 18px;
          font-weight: 500;
          padding: 15px 25px;
        }
        & span:hover {
          color: $whiteColor;
          background-color: $purpleColor;
          border-radius: 61px;
        }
      }
    }
  }
}
</style>
