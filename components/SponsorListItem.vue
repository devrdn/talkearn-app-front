<template>
  <div>
    <img :src="`/img/cat-one/all-experts/${img}.svg`" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
