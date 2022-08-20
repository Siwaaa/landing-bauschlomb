<template>
  <!-- button(title, type="button", size="m", color="white", imgLeft, imgRight)
  button(type=type, class=`btn btn-${color} btn-${size}` )-->
  <button :class="buttonClass" :type="type" :aria-label="defaultAriaLabel" :disabled="disabled">
    <slot>
      <img v-if="imgLeft" class="btn__icon" :src="require(`@/assets/img/${imgLeft}`)" />
      <span class="btn__label">{{ title || '&nbsp;' }}</span>
      <img v-if="imgRight" class="btn__icon" :src="require(`@/assets/img/${imgRight}`)" />
    </slot>
  </button>
</template>
<script>
export default {
  name: "Button",
  props: {
    title: {
      type: String,
    },
    type: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: 'm'
    },
    color: {
      type: String,
      default: 'white'
    },
    imgLeft: {
      type: String
    },
    imgRight: {
      type: String,
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingIcon: {
      type: String,
      default: 'pi pi-spinner pi-spin'
    }
  },
  computed: {
    buttonClass() {
      return [
        'btn',
        'btn-' + this.size,
        'btn-' + this.color,
      ]
    },
    iconClass() {
      return [
        this.loading ? 'p-button-loading-icon ' + this.loadingIcon : this.icon,
        'p-button-icon',
        {
          'p-button-icon-left': this.iconPos === 'left' && this.label,
          'p-button-icon-right': this.iconPos === 'right' && this.label,
          'p-button-icon-top': this.iconPos === 'top' && this.label,
          'p-button-icon-bottom': this.iconPos === 'bottom' && this.label
        }
      ]
    },
    disabled() {
      return this.$attrs.disabled || this.loading;
    },
    defaultAriaLabel() {
      return (this.label ? this.label + (this.badge ? ' ' + this.badge : '') : this.$attrs['aria-label']);
    }
  }
}
</script>
<style lang="postcss">
.btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 36px;
  border-radius: 30px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  font-size: var(--fz-btn);
  line-height: 1.2;

  &-white {
    background-color: var(--color-white);
    color: var(--color-blue);
    border: 2px solid var(--color-blue);
  }

  &-blue {
    background-color: var(--color-blue);
    color: var(--color-white);
    border: 2px solid var(--color-blue);
  }
  &__icon {
    height: 19px;
    object-fit: contain;

    .btn-s & {
      height: auto; 
    }
  }

  &-s {
    font-weight: 700;
    font-size: var(--fz-btn-small);
    padding: 12px 26px;
  }

  &__label {
    margin: 0 10px;
  }
}
</style>