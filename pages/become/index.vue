<template>
  <div>
    <!-- Banner -->
    <!-- <div class="become-expert-main">
      <div class="become-expert-main__text">
        <p class="become-expert-main__text__title">Work Your way</p>
        <p class="become-expert-main__text__subtitle">
          You bring te skill. We’ll make earning easy.
        </p>
        <a href="/" class="become-expert-main__text__btn">Became an expert</a>
      </div>
    </div> -->

    <div class="become-expert-main">
      <img
        class="become-expert-main__img"
        src="/img/become-expert/main.png"
        alt="background"
      />
      <div class="become-expert-main__text">
        <p class="become-expert-main__text__title">Work Your way</p>
        <p class="become-expert-main__text__subtitle">
          You bring te skill. We’ll make earning easy.
        </p>
        <a href="/" class="become-expert-main__text__btn">Became an expert</a>
      </div>
    </div>
    <!-- Community -->
    <div class="community">
      <div class="community__container">
        <p class="community__container__title">
          Join our growing expert's community
        </p>
        <div class="community__container__cards">
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
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
        <BuyerStoryCard />
        <BuyerStoryCard />
        <BuyerStoryCard />
        <BuyerStoryCard />
        <BuyerStoryCard />
        <BuyerStoryCard />
        <BuyerStoryCard />
        <BuyerStoryCard />
        <BuyerStoryCard />
        <BuyerStoryCard />
        <BuyerStoryCard />
      </div>
    </div>

    <!-- Q&A -->
    <div class="qa">
      <div class="qa__container">
        <div class="qa__container__title">Q&A</div>
        <div class="qa__container__questions">
          <HowItWorksItem />
          <HowItWorksItem />
          <HowItWorksItem />
          <HowItWorksItem />
          <HowItWorksItem />
          <HowItWorksItem />
        </div>
      </div>
    </div>

    <!-- Start Making money -->
    <div class="action">
      <p>Start making money as an Expert today</p>
      <a href="/become/expert">Became an expert</a>
    </div>
  </div>
</template>

<script>
import BuyerStoryCard from '~/components/BuyerStoryCard.vue';
import CommunityCard from '~/components/CommunityCard.vue';
import HowItWorksItem from '~/components/HowItWorksItem.vue';

export default {
  components: { CommunityCard, BuyerStoryCard, HowItWorksItem },
  layout: () => 'emptyhero',
};
</script>

<style lang="scss" scoped>
.become-expert-main {
  width: 85%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-image: url('/img/become-expert/main.png');
  // background-repeat: no-repeat;
  // background-size: 100%;

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

      @include rwdmax(425px) {
        flex-direction: column;
      }

      &__step {
        width: 33%;
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
