<template>
  <div>
    <!-- Become Expert Banner -->
    <div class="banner">
      <img
        class="banner__img"
        src="/img/become-expert/main.png"
        alt="background"
      />
      <div class="banner__text">
        <div class="banner__slogan">
          <p>Work Your way</p>
          <p>You bring te skill.</p>
          <p> We'll make earning easy.</p>
        </div>
        <div class="banner_btn">
          <a href="/become/expert" class="become-expert-main__text__btn"
            >Become an expert</a
          >
        </div>
      </div>
    </div>
    <!-- Community -->
    <div class="community">
      <div class="community__container">
        <p class="community__container__title">
          Join our growing expert's community
        </p>
        <div class="community__container__cards">
          <CommunityCard id="community-1" />
          <CommunityCard id="community-2" />
          <CommunityCard id="community-3" />
          <SkillCard />
        </div>
      </div>
    </div>

    <!-- How it works -->
    <div class="how-it-work">
      <div class="how-it-work__container">
        <p class="how-it-work__container__title">How it works</p>
        <div class="how-it-work__container__blocks">
          <div class="how-it-work__container__blocks__step">
            <img
              src="/img/become-expert/wallet.svg"
              alt="wallet"
              class="how-it-work__container__blocks__step__icon"
            />
            <div class="how-it-work__container__blocks__step__text">
              <p class="how-it-work__container__blocks__step__text__title">
                1. Connect wallet
              </p>
              <p class="how-it-work__container__blocks__step__text__subtitle">
                Connect with Your wallet (Metamask, Ledger, etc.) and fill out
                Your profile
              </p>
            </div>
          </div>
          <div class="how-it-work__container__blocks__step">
            <img
              src="/img/become-expert/setup.svg"
              alt="wallet"
              class="how-it-work__container__blocks__step__icon"
            />
            <div class="how-it-work__container__blocks__step__text">
              <p class="how-it-work__container__blocks__step__text__title">
                2. Setup Your services
              </p>
              <p class="how-it-work__container__blocks__step__text__subtitle">
                Easily setup the services You provide and Your price per
                minute/session
              </p>
            </div>
          </div>
          <div class="how-it-work__container__blocks__step">
            <img
              src="/img/become-expert/making-money.svg"
              alt="wallet"
              class="how-it-work__container__blocks__step__icon"
            />
            <div class="how-it-work__container__blocks__step__text">
              <p class="how-it-work__container__blocks__step__text__title">
                3. Get Paid
              </p>
              <p class="how-it-work__container__blocks__step__text__subtitle">
                Start accepting calls, consulting clients and making money
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Stories -->
    <div class="stories">
      <p class="stories__title">Buyer stories</p>
      <div class="stories__comments">
        <BuyerStoryCard id="buyer-1" />
        <BuyerStoryCard id="buyer-2" />
        <BuyerStoryCard id="buyer-3" />
        <BuyerStoryCard id="buyer-4" />
        <BuyerStoryCard id="buyer-5" />
        <BuyerStoryCard id="buyer-6" />
        <BuyerStoryCard id="buyer-7" />
        <BuyerStoryCard id="buyer-8" />
        <BuyerStoryCard id="buyer-9" />
        <BuyerStoryCard id="buyer-10" />
        <BuyerStoryCard id="buyer-11" />
      </div>
    </div>

    <!-- Q&A -->
    <div class="qa">
      <div class="qa__container">
        <div class="qa__container__title">Q&A</div>
        <v-expansion-panels flat width="40px" rounded>
          <QuestionAccordionItem
            v-for="(item, index) in items"
            :key="index"
            :info="item"
          />
        </v-expansion-panels>
      </div>
    </div>

    <!-- Start Making money -->
    <div class="action">
      <p>Start making money as an Expert today</p>
      <a href="/become/expert">Become an expert</a>
    </div>
  </div>
</template>

<script>
import BuyerStoryCard from '~/components/BuyerStoryCard.vue';
import CommunityCard from '~/components/CommunityCard.vue';
import QuestionAccordionItem from '~/components/QuestionAccordionItem.vue';
import SkillCard from '~/components/SkillCard.vue';

export default {
  components: {
    CommunityCard,
    BuyerStoryCard,
    QuestionAccordionItem,
    SkillCard,
  },
  layout: () => 'emptyhero',
  data: () => ({
    items: [
      {
        number: 1,
        text: 'Why should I become an expert on TalkEarn Platform?',
        content:
          'On TalkEarn Platform You can monetize Your knowledge instantly. Install our App on Your phone and click a button "Online" when You ready to speak with Your customers. They will be instantly notified that You are online and can talk to You now.',
      },
      {
        number: 2,
        text: 'How to setup my profile on TalkEarn Platform',
        content:
          'Click the button "Become Expert" and fill out the form. After a short verification, You will be notified by email that Your profile is verified. The email will contain the link to download our App. Install it in Your phone and click the button "Online" when You are ready to consult Your customers',
      },
      {
        number: 3,
        text: 'How will I get paid?',
        content:
          'The payment for each call settles instantly, after the call is over based on the pay-per-minute model. It mean that You are paid based on how many minutes were spent in call and price-per-minute that You set',
      },
      {
        number: 4,
        text: 'What can I sell?',
        content:
          'Be creative! You can offer any consultation you wish as long as it\'s legal and complies with our terms. Take a look at the categories displayed on our platform you can browse to get ideas. If there is no category that suits You, select "Other" category when filling out the "Become Expert" form.',
      },
      {
        number: 5,
        text: 'How much money can I make?',
        content:
          "It's totally up to you. You can work as much as you want. Many sellers work on TalkEarn full time and some keep their 9-5 job while using TalkEarn to make extra money.",
      },
      {
        number: 6,
        text: 'How much does it cost?',
        content:
          "It's free to join TalkEarn. There is no subscription required or fees to list your services. You keep 90% of each transaction.",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.v-item-group {
  max-width: 645px !important;
  border-radius: 10px !important;
  gap: 10px;
}
.v-expansion-panel {
  border-radius: 20px !important;
  @include rwdmax(735px) {
    max-width: 500px;
  }

  @include rwdmax(561px) {
    max-width: 300px;
  }

  @include rwdmax(360px) {
    max-width: 240px;
  }
}
.banner {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
  &__img {
    position: relative;
    z-index: 0;
    width: 100%;
  }
  &__text {
    margin: 0 auto;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: absolute;
    font-size: 50px;
    font-weight: 800;
    color: $whiteColor;
    letter-spacing: 2px;
    @include rwdmax(1402px) {
      font-size: 2.5rem;
      //display: none;
    }
    @include rwdmax(949px) {
      font-size: 1.5rem;
      //display: none;
    }
    @include rwdmax(588px) {
      font-size: 0.8rem;
      //display: none;
    }
    @include rwdmax(585px) {
      width: 100%;
    }
  }
  &__slogan {
    @include rwdmax(585px) {
      display: none;
    }
  }
}
.become-expert-main {
  width: 85%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url('/img/become-expert/main.png');
  background-repeat: no-repeat;
  background-size: 100%;
  &__text {
    margin: 170px 0;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 50px;

    &__img {
      position: relative;
    }

    &__title {
      color: $whiteColor;
      text-align: center;
      font-size: 40px;
      font-weight: 700;
    }

    &__subtitle {
      color: $whiteColor;
      text-align: center;
      font-size: 28px;
      font-weight: 600;
    }

    &__btn {
      color: $whiteColor;
      font-size: $fs;
      font-weight: 600;
      background: $purpleColor;
      padding: 15px 20px;
      border-radius: 60px;
      @include rwdmax(949px) {
        padding: 5px 10px;
        //display: none;
      }
      @include rwdmax(588px) {
        padding: 5px 10px;
        font-size: 0.5rem;
        //display: none;
      }
      @include rwdmax(585px) {
        font-size: 1.5rem;
      }
    }
  }
}

.community {
  margin-top: 130px;

  &__container {
    width: 85%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 90px;

    &__title {
      color: $darkColor;
      font-size: 32px;
      text-align: center;
      font-weight: 600;
    }

    &__cards {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 40px;
    }
  }
}

.how-it-work {
  background: $bckgColor;

  &__container {
    max-width: 85%;
    margin: 70px auto;
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 70px;

    &__title {
      font-size: 32px;
      text-align: center;
      font-weight: 600;
      color: $darkColor;
    }

    &__blocks {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 80px;
      @include rwdmax(420px) {
        gap: 50px;
      }

      @include rwdmax(425px) {
        flex-direction: column;
      }

      &__step {
        width: 33%;
        @include rwdmax(420px) {
          width: 90%;
        }
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 50px;

        &__icon {
          width: 85px;
        }

        &__text {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;

          &__title {
            font-weight: 600;
            font-size: 25px;
            text-align: center;
            color: $darkColor;
          }

          &__subtitle {
            font-weight: 400;
            font-size: 18px;
            color: $darkColor;
            text-align: center;
            line-height: 1.3;
          }
        }
      }
    }
  }
}

.stories {
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;

  &__title {
    color: $darkColor;
    text-align: center;
    font-size: 32px;
    font-weight: 600;
  }

  &__comments {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 55px;
  }
}

.qa {
  background: $bckgColor;
  margin-top: 50px;

  &__container {
    width: 85%;
    margin: 0 auto;
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    &__title {
      color: $darkColor;
      font-size: 32px;
      font-weight: 600;
    }

    &__questions {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px 50px;

      @include rwdmax(1024px) {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
      }
    }
  }
}

.action {
  width: 85%;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  p {
    font-weight: 600;
    font-size: 28px;
    text-align: center;
    color: $darkColor;
  }

  a {
    color: $whiteColor;
    font-weight: 600;
    font-size: 14px;
    padding: 15px 20px;
    background: $purpleColor;
    box-shadow: 0px 19px 29px rgba(62, 53, 120, 0.14);
    border-radius: 60px;
  }
}
</style>
