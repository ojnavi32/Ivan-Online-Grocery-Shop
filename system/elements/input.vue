<template>
  <div
    class="form-group"
    :class="{
      'input-group-focus': focused,
      'has-danger': error,
      'has-success': !error && touched,
      'has-label': label
    }"
  >
    <div class="mb-0" :class="{'input-group': hasIcon}">
      <slot name="label">
        <label v-if="label"> {{ label }} {{ required ? '*' : '' }} </label>
      </slot>
      <slot name="addonLeft">
      <span v-if="addonLeftIcon" class="input-group-prepend">
        <div class="input-group-text"><i :class="addonLeftIcon"></i></div>
      </span>
      </slot>
      <slot>
        <input
          :value="value"
          v-bind="$attrs"
          v-on="listeners"
          class="form-control"
          aria-describedby="addon-right addon-left"
          :style="'color:'+ textColor"
        />
      </slot>
    </div>

    <slot name="error" v-if="error || $slots.error">
      <label class="error">{{ error }}</label>
    </slot>

    <slot name="addonRight">
      <span v-if="addonRightIcon" class="input-group-append">
        <div class="input-group-text"><i :class="addonRightIcon"></i></div>
      </span>
    </slot>
    <slot name="helperText"></slot>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  name: 'ds-input',
  props: {
    required: Boolean,
    label: {
      type: String,
      description: 'Input label'
    },
    error: {
      type: String,
      description: 'Input error',
      default: ''
    },
    textColor: {
      type: String,
      description: 'Text Color',
      default: ''
    },
    value: {
      type: [String, Number],
      description: 'Input value'
    },
    addonRightIcon: {
      type: String,
      description: 'Input icon on the right'
    },
    addonLeftIcon: {
      type: String,
      description: 'Input icon on the left'
    }
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  data() {
    return {
      focused: false,
      touched: false
    };
  },
  computed: {
    hasIcon() {
      const { addonRight, addonLeft } = this.$slots;
      return (
        addonRight !== undefined ||
        addonLeft !== undefined ||
        this.addonRightIcon !== undefined ||
        this.addonLeftIcon !== undefined
      );
    },
    listeners() {
      return {
        ...this.$listeners,
        input: this.onInput,
        blur: this.onBlur,
        focus: this.onFocus
      };
    }
  },
  methods: {
    onInput(evt) {
      if (!this.touched) {
        this.touched = true;
      }
      this.$emit('input', evt.target.value);
    },
    onFocus(evt) {
      this.focused = true;
      this.$emit('focus', evt)
    },
    onBlur(evt) {
      this.focused = false;
      this.$emit('blur', evt)
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  color: $color-input-text;
  border-color: $color-input-border;
  height: $size-height-s;
  padding-left: $space-xs;
}
input:active, input:focus {
  background-color: $color-white;
  border-color: $color-primary;
}
</style>
