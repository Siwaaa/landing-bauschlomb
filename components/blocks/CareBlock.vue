<template>
  <section class="care">
    <div class="care__content care__circle container">
      <h2>Для ухода за вашими контактными линзами выбирайте</h2>
      <div class="care__items">
        <div class="care__items-item"> <img src="@/assets/img/care/1.jpg" alt="Раствор ReNu® MultiPlus" />
          <h3>Раствор ReNu<sup class="sub">®</sup> MultiPlus</h3>
          <div class="care__btn">
            <Button title="Узнать больше" @click.native="onModal('product', 'multiplus')" />
          </div>
        </div>
        <div class="care__items-item"> <img src="@/assets/img/care/2.png" alt="Раствор BIOTRUE®" />
          <h3>Раствор BIOTRUE<sup class="sub">®</sup></h3>
          <div class="care__btn">
            <Button title="Узнать больше" @click.native="onModal('product', 'biotrue')" />
          </div>
        </div>
      </div>
    </div>
    <Modal :visible.sync="careModal" :type="typeModal" :product="productModal" />
  </section>
</template>

<script>
import Button from '@/components/Button.vue';
import Modal from '@/components/Modal.vue';

export default {
  name: "CareBlock",
  components: { Button, Modal },
  data() {
    return {
      careModal: false,
      typeModal: null,
      productModal: null
    }
  },
  methods: {
    onModal(component, product) {
      this.productModal = product
      this.typeModal = component
      this.careModal = true

      if (product == 'multiplus') {
        gtag('event', 'send', {'event_category': 'Button', 'event_action': 'Know more (RENU MULTIPLUS)'});
        ym(90600398,'reachGoal','know_more_renu_multiplus_button')
      } else {
        gtag('event', 'send', {'event_category': 'Button', 'event_action': 'Know more (BIOTRUE)'});
        ym(90600398,'reachGoal','know_more_biotrue_button')
      }
    }
  },
}
</script>
<style lang="postcss">
.care {
  &__content {
    padding-top: var(--container-padding-h);
    padding-bottom: calc(2*var(--container-padding-h));

    @media (--xs) {
      padding-top: 0;
      padding-bottom: var(--container-padding-h);
    }

    &>h2 {
      font-weight: 700;
      font-size: 66px;
      line-height: 1.2;
      text-transform: uppercase;
      color: var(--color-blue);
      margin-bottom: 60px;

      @media (--2xl) {
        font-size: 52px;
      }

      @media (--xl) {
        font-size: 42px;
      }

      @media (--md) {
        font-size: 30px;
      }

      @media (--xs) {
        font-size: 18px;
        margin-bottom: 20px;
      }
    }
  }

  &__circle {
    position: relative;

    &::before {
      content: '';
      display: inline-block;
      position: absolute;
      bottom: 4%;
      left: 1%;
      width: 4%;
      height: 22%;
      background: url(@/assets/img/circles/41.png) center / contain no-repeat;

      @media (--sm) {
        min-width: 29px;
        min-height: 100px;
        left: 3%;
      }
    }
  }
}

.care__items {
  display: flex;

  @media (--sm) {
    flex-direction: column;
  }

  &-item {
    flex-basis: 50%;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media (--sm) {
      flex-basis: 100%;
      max-width: 100%;

      &:first-child {
        margin-bottom: 36px;
      }
    }

    &>img {
      height: 349px;
      object-fit: contain;
      margin-bottom: 15px;

      @media (--2xl) {
        height: 300px;
      }

      @media (--lg) {
        height: 260px;
      }

      @media (--md) {
        height: 220px;
      }

      @media (--sm) {
        height: 175px;
      }
    }

    &>h3 {
      font-weight: 700;
      font-size: 24px;
      text-transform: uppercase;
      color: var(--color-blue);
      margin-bottom: 20px;

      @media (--2xl) {
        font-size: 20px;
      }

      @media (--lg) {
        font-size: 18px;
      }

      @media (--xs) {
        font-size: 12px;
        margin-bottom: 8px;
      }
    }
  }
}
</style>