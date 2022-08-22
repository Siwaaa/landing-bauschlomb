<template>
  <section class="utp">
    <div class="utp__content container">
      <div class="utp__items">
        <div class="utp__items-item"><img src="@/assets/img/utp-1.svg" alt="" />
          <p>Край контактных линз — тонкий закругленный, обеспечивает мягкое взаимодействие с поверхностью глаза
            и позволяет слезе легко попадать под линзу<sup class="sub">2</sup>.</p>
        </div>
        <div class="utp__items-item"><img src="@/assets/img/utp-2.svg" alt="" />
          <p>Контактные линзы хорошо <br> держат форму и удобны <br> в обращении<sup class="sub">3</sup>.</p>
        </div>
      </div>
      <div class="utp__btn">
        <Button title="Получить скидку" imgRight="right_small.svg" @click.native="onModal('reg')"/>
      </div>
    </div>
    <Modal :visible.sync="utpModal" :type="typeModal" />
  </section>
</template>

<script>
import Button from '@/components/Button.vue';
import Modal from '@/components/Modal.vue';
export default {
  name: 'UtpBlock',
  components: { Button, Modal },
  data() {
    return {
      utpModal: false,
      typeModal: null
    }
  },
  methods: {
    onModal(component) {
      this.typeModal = component
      this.utpModal = true
    }
  },
}
</script>

<style lang="postcss">
.utp {
  &__content {
    padding-top: calc(var(--container-padding-h) + 20px);
    padding-bottom: var(--container-padding-h);
  }

  &__items {
    display: flex;
    margin-bottom: 80px;

    @media (--xs) {
      flex-direction: column;
      margin-bottom: 30px;
      width: 80%;
      margin-right: auto;
      margin-left: auto;
    }

    &-item {
      flex-basis: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      @media (--xs) {
        &:first-child {
          margin-bottom: 36px;
        }
      }

      &>img {
        width: 288px;
        height: 288px;
        object-fit: contain;
        margin-bottom: 30px;

        @media (--xl) {
          width: 210px;
          height: 210px;
        }

        @media (--lg) {
          width: 190px;
          height: 190px;
        }

        @media (--sm) {
          width: 150px;
          height: 150px;
          margin-bottom: 20px;
        }
      }

      &>p {
        width: 90%;
        font-weight: 400;
        font-size: var(--fz);
        line-height: 1.45;
      }
    }
  }

  &__btn {
    width: fit-content;
    margin-right: auto;
    margin-left: auto;
  }
}
</style>