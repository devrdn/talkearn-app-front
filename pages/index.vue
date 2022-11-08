<template>
  <div>
    <talk-hero />

    <!-- Crypto Topics -->
    <div class="crypto-topics">
      <h1 class="main-header">Crypto topics</h1>
      <hr class="header-line" />
      <div class="crypto-topics__all">
        <!-- TODO: change key (temporary use index as key) -->
        <talk-crypto-card
          v-for="(meta, index) in cardMeta"
          :key="index"
          :meta="meta"
        />
      </div>
    </div>

    <!-- Experts -->
    <div class="featured-experts">
      <h1 class="main-header">Featured Experts this week</h1>
      <hr class="header-line" />
      <div class="featured-experts__experts">
        <!-- TODO: change key (temporary use index as key) -->
        <v-slide-group show-arrows class="expert-slider">
          <talk-expert-card
            v-for="(expert, index) in experts"
            :key="index"
            :expert="expert"
          />
        </v-slide-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data: () => {
    return {
      cardMeta: [
        {
          href: '#',
          img: 'topic1.svg',
          title: 'Blockchains',
        },
        {
          href: '#',
          img: 'topic2.svg',
          title: 'Wallets',
        },
        {
          href: '#',
          img: 'topic3.svg',
          title: 'Money tranfers',
        },
        {
          href: '#',
          img: 'topic4.svg',
          title: 'Investments',
        },
        {
          href: '#',
          img: 'topic5.svg',
          title: 'Trading',
        },
      ],

      experts: [
        {
          img: 'photo.png',
          name: 'David Hutapea',
          job: 'Professional Trader',
          price: 30,
        },
        {
          img: 'photo.png',
          name: 'David Hutapea',
          job: 'Professional Trader',
          price: 30,
        },
        {
          img: 'photo.png',
          name: 'David Hutapea',
          job: 'Professional Trader',
          price: 30,
        },
        {
          img: 'photo.png',
          name: 'David Hutapea',
          job: 'Professional Trader',
          price: 30,
        },
        {
          img: 'photo.png',
          name: 'David Hutapea',
          job: 'Professional Trader',
          price: 30,
        },
        {
          img: 'photo.png',
          name: 'David Hutapea',
          job: 'Professional Trader',
          price: 30,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.crypto-topics {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  &__all {
    display: flex;
    gap: 25px;
    &__topic {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      // background-color: #5241c1;
      width: 220px;
      height: 225px;
      box-shadow: 0px 5px 10px rgba(31, 31, 51, 0.3);
      border-radius: 20px;
      color: $darkColor;
      font-size: 20px;
      font-weight: 500;
      transition: background-color 0.3s ease-in-out;
      transition: color 0.15s ease-in-out;
    }
    &__topic:hover {
      color: $whiteColor;
      background-color: $purpleColor;
    }
  }
}

.featured-experts {
  margin: 70px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  &__experts {
    width: 60%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    &__arrow {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: $purpleColor;
      border-radius: 95px;
      width: 46px;
      height: 45px;
      & img {
        width: 24px;
        height: 24px;
      }
    }
  }
}
</style>
