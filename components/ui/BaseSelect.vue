<template>
  <div class="form__fields__input">
    <label v-if="label" :for="name">{{ label }}</label> <br />
    <select
      :value="value"
      :name="name"
      :type="type"
      @change="$emit('input', $event.target.value)"
    >
      <option disabled value="">{{ defaultValue }}</option>
      <option v-for="option in options" :key="option.id" :value="option.id">
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      required: false,
      default: null,
    },
    defaultValue: {
      type: String,
      default: '',
    },
  },
};
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

      select {
        background: #fbfbfb;
        border: 1px solid #c2c2c2;
        border-radius: 14px;
        padding: 15px 30px;
      }
    }
  }
}
</style>
