<template>
  <div>
    <div class="crypto-topics">
      <h1 class="main-header">Crypto topics</h1>
      <UiHeaderLine />
      <div class="crypto-topics__all">
        <CryptoTopicCard
          v-for="(meta, index) in cardMeta"
          :key="index"
          :meta="meta"
        />
      </div>
    </div>
  </div>
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
  margin-bottom: 50px;
  gap: 50px;
  &__all {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
