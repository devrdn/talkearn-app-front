<template>
  <section class="crypto-topics">
    <h1 class="main-header">Crypto topics</h1>
    <ui-header-line />
    <div class="crypto-topics__all">
      <!-- TODO: change key (temporary use index as key) -->
      <crypto-topic-card
        v-for="(meta, index) in cardMeta"
        :key="index"
        :meta="meta"
      />
    </div>
  </section>
</template>

<script>
export default {
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
    }
  },
}
</script>

<style lang="scss" scoped>
.crypto-topics {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
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
</style>
