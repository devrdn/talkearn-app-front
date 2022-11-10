<template>
  <div class="form__fields__input">
    <label v-if="label" :for="name">{{ label }}</label> <br />
    <input
      :value="value"
      :name="name"
      placeholder="Type here"
      :type="type"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text',
      validator: (value) => {
        return ['text', 'number', 'search', 'radio'].includes(value)
      },
    },
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
}
</script>

<style lang="scss" scoped>
.form {
  &__fields {
    &__input {
      display: flex;
      flex-direction: column;

      label {
        font-weight: 500;
        font-size: 14px;
        color: $darkColor;
      }

      input {
        background: #fbfbfb;
        border: 1px solid #c2c2c2;
        border-radius: 14px;
        padding: 15px 30px;
      }
    }
  }
}
</style>
