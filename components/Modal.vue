<template>
  <transition name="modal" @enter="onEnter" @before-leave="onBeforeLeave" @leave="onLeave" @after-leave="onAfterLeave"
    @appear="onAppear">
    <div class="modal-mask" :ref="maskRef" v-if="visible" @click="onMaskClick">
      <div class="modal" v-if="visible" role="dialog" :aria-modal="visible" aria-labelledby="modalTitle">
        <keep-alive>
          <component v-bind:is="currentComponent" :product="product"></component>
        </keep-alive>
        <button type="button" aria-label="close" class="modal__close" @click="close">
          <div class="modal__close-right"></div>
          <div class="modal__close-left"></div>
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import ModalRegBlock from '@/components/blocks/modal-blocks/ModalRegBlock.vue'
import ModalAptekBlock from '@/components/blocks/modal-blocks/ModalAptekBlock.vue'
import ModalProductBlock from '@/components/blocks/modal-blocks/ModalProductBlock.vue'

export default {
  name: 'Modal',
  components: {
    ModalRegBlock,
    ModalAptekBlock,
    ModalProductBlock
  },
  props: {
    visible: Boolean,
    type: {
      type: String,
      default: 'reg'
    },
    product: {
      type: String,
      default: 'multiplus'
    }
  },
  data() {
    return {
      maskVisible: this.visible,
      mask: null,
    }
  },
  updated() {
    if (this.visible) {
      this.maskVisible = this.visible;
    }
  },
  computed: {
    currentComponent() {
      return 'modal-' + this.type + '-block'
    },
  },
  methods: {
    close() {
      this.$emit('update:visible', false);
    },
    onEnter() {
      this.$emit('show');
      document.body.style.overflow = 'hidden';
    },
    onBeforeLeave() {
      if (this.mask) {
        document.body.style.overflow = 'visible';
      }
    },
    onLeave() {
      this.$emit('hide');
    },
    onAfterLeave() {
      this.maskVisible = false;
    },
    onAppear() {
      if (this.visible) {
        this.onEnter();
      }
    },
    onMaskClick(event) {
      if (this.mask === event.target) {
        this.close();
      }
    },
    maskRef(el) {
      this.mask = el;
    },
  },
}
</script>

<style lang="postcss">
.modal {
  position: relative;
  max-height: 90%;

  &-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(15, 177, 191, 0.75);
    z-index: 999;
    pointer-events: auto;
    overflow-y: auto;
  }

  &__close {
    --close-w: 65px;
    width: var(--close-w);
    height: var(--close-w);
    position: absolute;
    top: -6vh;
    right: -7vw;
    transition: transform .3s ease-in-out;
    .modal-reg + & {
      top: 0;
      right: 0;

      @media (--md) {
        top: 0vh;
        right: 12vw;
      }
      @media (--xs) {
        top: 0vh;
        right: 18%;
      }
    }

    @media (--xl) {
      --close-w: 49px;
    }
    @media (--md) {
      --close-w: 36px;
    }
    @media (--sm) {
      --close-w: 22px;
      top: -4vh;
      right: 0;
    }

    &:hover {
      transform: rotate(180deg);
    }

    &-right,
    &-left {
      display: block;
      position: absolute;
      width: var(--close-w);
      height: 2px;
      background-color: var(--color-white);
    }

    &-right {
      transform: rotate(-45deg);
    }

    &-left {
      transform: rotate(45deg);
    }
  }

  &__content {
    background-color: var(--color-white);
    text-align: center;
  }

  &__header {
    margin-bottom: 3vh;

    &>h2 {
      font-size: var(--fz-h3);
      font-weight: 700;
      text-transform: uppercase;
      color: var(--color-blue);
    }

    &>p {
      margin-top: 15px;
      font-size: 20px;
      font-weight: 700;
      text-transform: uppercase;
      line-height: 1.2;
      color: var(--color-blue);

      @media (--sm) {
        font-size: 14px;
      }
      @media (--xs) {
        font-size: 11px;
      }
    }
  }

  &__main {
    margin-bottom: 3vh;

    &>img {
      max-width: 100%;
      height: 400px;
      object-fit: contain;
      margin-bottom: 4vh;

      @media (--2xl) {
        height: 340px;
      }
      @media (--lg) {
        height: 300px;
      }
      @media (--md) {
        height: 200px;
      }
    }

    &>p {
      width: 82%;
      margin-right: auto;
      margin-left: auto;
      font-size: var(--fz);
      font-weight: 400;
      line-height: 1.45;

      @media (--xl) {
        width: 100%;
      }
    }
  }

  &__footer {
    font-weight: 400;
    font-size: 11px;
    line-height: 1.45;
    text-align: left;
    color: #989898;
  }
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__input {
    position: relative;
    width: 90%;
    padding-bottom: 3vh;

    &-input {
      width: 100%;
      height: 60px;
      border-bottom: 2px solid var(--color-blue);
      font-weight: 400;
      font-size: var(--fz-h3);
      color: var(--color-black);
      cursor: auto;

      @media (--lg) {
        height: 44px;
      }
      @media (--sm) {
        height: 33px;
      }
    }
  }

  &__check {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.45;
    text-align: center;
    color: #989898;
    margin-top: 30px;

    @media (--sm) {
      font-size: 13px;
    }
    @media (--xs) {
      font-size: 11px;
    }

    &>input[type="checkbox"] {
      appearance: none;
      background-color: #fff;
      margin: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      border: 2px solid var(--color-blue);
      border-radius: 50%;
      margin-right: 5px;
      transition: opacity .4ms ease-in-out;

      &::before {
        content: "";
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em var(--color-blue);
      }

      /* Checked */
      &:checked::before {
        transform: scale(1);
      }

      /* Hover */
      &:hover {
        opacity: .8;
      }
    }

    &>label {
      &>a {
        text-decoration: underline;
        cursor: pointer;

        &:hover {
          opacity: .8;
        }
      }
    }
  }
  &__error {
    position: absolute;
    left: 0;
    bottom: 1vh;
    color: red;
    font-size: 12px;

    @media (--xs) {
      position: relative;
      bottom: 0;
      font-size: 10px;
    }
  }
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity .5s ease-in;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}
</style>