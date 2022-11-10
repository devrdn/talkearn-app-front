<template>
  <div class="form__txtarea">
    <label v-if="label" :for="name">{{ label }}</label> <br />
    <textarea
      :name="name"
      cols="30"
      rows="10"
      @input="$emit('input', $event.target.value)"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: false,
      default: null,
    },
    value: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  &__txtarea {
    display: flex;
    flex-direction: column;

    label {
      font-weight: 500;
      font-size: 14px;
      color: $darkColor;
    }

    textarea {
      background: #fbfbfb;
      border: 1px solid #c2c2c2;
      border-radius: 14px;
      padding: 15px 30px;
      width: 100%;
      resize: none;
    }
  }
}
</style>
