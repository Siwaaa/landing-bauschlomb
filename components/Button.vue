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
  --btn-border: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 36px;
  border-radius: 30px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  font-size: var(--fz-btn);
  line-height: 1;

  @media (--sm) {
    padding: 12px 22px;
  }
  @media (--xs) {
    padding: 10px 15px;
    --btn-border: 1px;
  }

  &-white {
    background-color: var(--color-white);
    color: var(--color-blue);
    border: var(--btn-border) solid var(--color-blue);
  }

  &-blue {
    background-color: var(--color-blue);
    color: var(--color-white);
    border: var(--btn-border) solid var(--color-blue);
  }
  &__icon {
    height: 19px;
    object-fit: contain;

    @media (--xs) {
      height: 10px;
    }

    .btn-s & {
      height: auto;
      
      &:first-child {
        @media (--lg) {
          height: 23px;
        }
        @media (--xs) {
          height: 16px;
        }
      }
      &:last-child {
        @media (--xs) {
          height: 13px;
        }
      }
    }
  }

  &-s {
    font-weight: 700;
    font-size: var(--fz-btn-small);
    padding: 12px 26px;

    @media (--2xl) {
      padding: 10px 20px;
    }
  }

  &__label {
    margin: 0 10px;

    @media (--xs) {
      margin: 0 5px;
    }
  }
}
</style>