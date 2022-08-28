<template>
  <button :class="buttonClass" :type="type" :aria-label="defaultAriaLabel" :disabled="disabled">
    <slot>
      <div v-if="imgLeft" v-html="require(`@/assets/img/${imgLeft}?raw`)" class="btn__icon-inline" />
      <!-- <img v-if="imgLeft" class="btn__icon" :src="require(`@/assets/img/${imgLeft}`)" /> -->
      <span class="btn__label">{{ title || '&nbsp;' }}</span>
      <div v-if="imgRight" v-html="require(`@/assets/img/${imgRight}?raw`)" class="btn__icon-inline" />
      <!-- <img v-if="imgRight" class="btn__icon" :src="require(`@/assets/img/${imgRight}`)" /> -->
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
  max-height: 64px;
  padding: 16px 36px;
  border-radius: 30px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  font-size: var(--fz-btn);
  line-height: 1;
  transition: background .4s ease-in-out,
    color .4s ease-in-out,
    border .3s ease-in-out;

  @media (--2xl) {
    padding: 14px 24px;
  }

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

    &:hover {
      background-color: var(--color-blue);
      color: var(--color-white);

      & .btn__icon-inline>svg {
        & path {
          stroke: var(--color-white);
        }

        &.fill>path {
          fill: var(--color-white);
          stroke: none;
        }
      }
    }
  }

  &-blue {
    background-color: var(--color-blue);
    color: var(--color-white);
    border: var(--btn-border) solid var(--color-blue);

    &:hover {
      background-color: #14C9D9;
      border: var(--btn-border) solid #14C9D9;
    }
  }

  &__icon-inline {
    &:nth-child(1) {
      &>svg {
        height: 35px;

        &>path {
          transition: all .4s ease-in-out;
        }

        @media (--xs) {
          height: 19px;
        }
      }

      .btn-s &>svg {
        height: auto;

        @media (--2xl) {
          height: 26px;
        }

        @media (--lg) {
          height: 21px;
        }
        @media (--sm) {
          height: 19px;
        }
        @media (--xs) {
          height: 16px;
        }
      }
    }

    &:last-child {
      &>svg {
        height: 19px;

        &>path {
          transition: all .4s ease-in-out;
        }

        @media (--2xl) {
          height: 16px;
        }
        @media (--sm) {
          height: 13px;
        }
        @media (--xs) {
          height: 10px;
        }
      }

      .btn-s &>svg {
        height: 18px;

        @media (--2xl) {
          height: 16px;
        }

        @media (--md) {
          height: 13px;
        }

        @media (--xs) {
          height: 11px;
        }
      }
    }
  }

  &-s {
    font-weight: 700;
    font-size: var(--fz-btn-small);
    padding: 12px 26px;

    &:hover {
      border: var(--btn-border) solid var(--color-white) !important;
    }

    @media (--2xl) {
      padding: 10px 20px;
    }
    @media (--sm) {
      padding: 7px 14px;
    }
  }

  &__label {
    margin: 0 10px;

    @media (--md) {
      margin: 0 6px;
    }
    @media (--xs) {
      margin: 0 5px;
    }
  }
}
</style>