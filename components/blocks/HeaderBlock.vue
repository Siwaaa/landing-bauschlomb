<template>
  <section class="header">
    <div class="header__content container">
      <div class="header__info">
        <h1> Bausch+Lomb ULTRA<sup class="sub">®</sup></h1>
        <p>Блики и ореолы — частые спутники на дороге при вождении в условиях плохой видимости или в темное время суток. Линзы Bausch+Lomb ULTRA<sup class="sub">®</sup> помогают справиться с неприятными сюрпризами.</p>
        <strong>Bausch+Lomb ULTRA<sup class="sub">®</sup>. Особая форма линз позволяет уменьшить затуманивание, ореолы<sup class="sub">*</sup> и блики даже в условиях слабой освещенности<sup class="sub">1</sup>.</strong>
        <div class="header__btn">
          <Button title="Подробнее" color="blue" @click.native="onScrollToDetail()" />
          <Button title="Где купить" imgRight="right_small.svg" @click.native="onModal('aptek');" />
        </div>
      </div>
      <div class="header__swiper header__circle">
        <div class="swiper swiper-main">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="@/assets/img/swiper/sw_1.png" alt="">
            </div>
            <div class="swiper-slide"><img src="@/assets/img/swiper/sw_2.png" alt=""></div>
            <div class="swiper-slide"><img src="@/assets/img/swiper/sw_3.png" alt=""></div>
          </div>
        </div>
        <div thumbsSlider="" class="swiper swiper-help">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="@/assets/img/swiper/sw_1.png" />
            </div>
            <div class="swiper-slide">
              <img src="@/assets/img/swiper/sw_2.png" />
            </div>
            <div class="swiper-slide">
              <img src="@/assets/img/swiper/sw_3.png" />
            </div>
          </div>
        </div>
        <div class="header__btn-mobile">
          <Button title="Подробнее" color="blue" @click.native="onScrollToDetail()" />
          <Button title="Где купить" imgRight="right_small.svg" @click.native="onModal('aptek')" />
        </div>
      </div>
    </div>
    <div class="header__go">
      <a href="#quiz">Поехали</a>
    </div>
    <Modal :visible.sync="headerModal" :type="typeModal" />
  </section>
</template>

<script>
import Button from '@/components/Button.vue';
import Modal from '@/components/Modal.vue';
import { Swiper, Thumbs, EffectFade } from 'swiper';
import 'swiper/swiper-bundle.min.css';

export default {
  name: 'HeaderBlock',
  components: {
    Button,
    Swiper,
    Modal
  },
  data() {
    return {
      headerModal: false,
      typeModal: null
    }
  },
  methods: {
    onModal(component) {
      this.typeModal = component
      this.headerModal = true
      window.location.hash = 'pharmacies'

      gtag('event', 'send', {'event_category': 'Button', 'event_action': 'Where to buy'});
    },
    onScrollToDetail() {
      if (process.client) {
        document.querySelector('#utp').scrollIntoView({block: "start", behavior: "smooth"})
        
        setTimeout(() => {
          window.location.hash = 'utp'
        }, 1200)

        gtag('event', 'send', {'event_category': 'Button', 'event_action': 'Read more'});
      }
    }
  },
  mounted() {
    if(window.location.hash.substring(1) == 'pharmacies') this.onModal('aptek');

    Swiper.use([Thumbs, EffectFade])
    /* eslint-disable no-unused-vars */
    const swiperBottom = new Swiper('.swiper-help', {
      loop: false,
      slidesPerView: 3,
      spaceBetween: 20,
      speed: 500,
      watchSlidesProgress: true,
      slideToClickedSlide: true,
      breakpoints: {
        480: {
          spaceBetween: 10
        }
      },
      on: {
        // fix thumbs problems: https://qna.habr.com/q/1152372
        touchEnd: function (s, e) {
          let range = 5;
          let diff = s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY
            - s.touches.startY
          if (diff < range || diff > -range) s.allowClick = true;
        }
      },
    })
    const swiper = new Swiper('.swiper-main', {
      // grabCursor: true,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      speed: 1000,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      thumbs: {
        swiper: swiperBottom,
      },
    })
  },
}
</script>

<style lang="postcss">
.header {
  &__content {
    padding-bottom: 60px;
    margin-top: calc(var(--nav-h) + 70px);
    display: flex;
    justify-content: space-between;

    @media (--2xl) {
      margin-top: calc(var(--nav-h) + 55px);
      padding-bottom: 40px;
    }

    @media (--650h) {
      margin-top: calc(var(--nav-h) + 25px);
      padding-bottom: 40px;
    }

    @media (--lg) {
      flex-direction: column;
      margin-top: calc(var(--nav-h) + 35px);
    }

    @media (--xs) {
      margin-top: calc(var(--nav-h) + 15px);
    }
  }

  &__info {
    width: 43%;

    @media (--2xl) {
      width: 47%;
    }

    @media (--xl) {
      width: 50%;
    }

    @media (--lg) {
      width: 100%;
    }

    &>h1 {
      font-weight: 700;
      font-size: var(--fz-h1);
      line-height: 1.2;
      text-transform: capitalize;
      color: var(--color-blue);
      margin-bottom: 36px;

      @media (--2xl) {
        margin-bottom: 22px;
      }

      @media (--lg) {
        margin-bottom: 18px;
      }
    }

    &>p {
      width: 90%;
      font-weight: 400;
      font-size: var(--fz);
      line-height: 1.45;
      margin-bottom: 36px;

      @media (--lg) {
        width: 100%;
        margin-bottom: 18px;
      }
      @media (--650h) {
        margin-bottom: 20px;
      }
    }

    &>strong {
      display: block;
      font-weight: 700;
      font-size: var(--fz);
      line-height: 1.45;
      color: var(--color-blue);
      margin-bottom: 50px;

      @media (--sm) {
        margin-bottom: 30px;
      }
    }
  }

  &__btn {
    display: flex;
    align-items: center;

    @media (--lg) {
      display: none;
    }

    &>*:first-child {
      margin-right: 30px;
    }

    &-mobile {
      display: none;

      @media (--lg) {
        display: flex;
        align-items: center;
        justify-content: center;

        &>*:first-child {
          margin-right: 4%;
        }
      }
    }
  }

  &__swiper {
    width: 52%;
    position: relative;

    @media (--2xl) {
      width: 48%;
    }
    @media (--650h) {
      width: 45%;
    }

    @media (--lg) {
      width: 80%;
      margin-right: auto;
      margin-left: auto;
    }

    @media (--sm) {
      width: 88%;
    }

    @media (--xs) {
      width: 100%;
    }

    &::before {
      content: "";
      position: absolute;
      top: calc(var(--nav-h) - 120px);
      left: 0;
      display: block;
      width: 70%;
      height: 520px;
      background: url('@/assets/img/swiper/swiper_fon.png') center top / contain no-repeat;

      @media (--2xl) {
        width: 56%;
        height: 400px;
        top: calc(var(--nav-h) - 70px);
      }

      @media (--lg) {
        left: 10%;
      }

      @media (--sm) {
        width: 47%;
        height: 260px;
        top: calc(var(--nav-h) - 50px);
        left: 25%;
      }

      @media (--xs) {
        width: 70%;
        left: 17%;
      }
    }
  }

  &__go {
    color: var(--color-blue);
    text-align: center;
    margin-bottom: 60px;
    transition: transform .5s ease-in-out;

    &:hover {
      transform: translateY(8px);
    }

    @media (--sm) {
      display: none;
    }

    &>a {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-weight: 400;
      font-size: 19px;
      text-transform: uppercase;

      &::after {
        content: '';
        display: block;
        width: 10px;
        height: 17px;
        background: url(@/assets/img/right_small.svg) center/contain no-repeat;
        transform: rotate(90deg) translateX(-2px);
        margin-left: 13px;
      }

      @media (--2xl) {
        font-size: 16px;
      }
    }

  }

  &__circle {
    position: relative;

    &::after {
      content: '';
      display: inline-block;
      position: absolute;
      top: 4%;
      right: -4%;
      width: 13%;
      height: 13%;
      background: url(@/assets/img/circles/11.png) center / contain no-repeat;

      @media (--2xl) {
        right: 4%;
      }

      @media (--md) {
        max-width: 50px;
        max-height: 50px;
      }

      @media (--sm) {
        max-width: 38px;
        max-height: 38px;
      }
    }
  }
}

.swiper {
  &-main {
    margin-top: calc(var(--nav-h) + 90px);
    margin-bottom: 40px;

    @media (--2xl) {
      margin-top: calc(var(--nav-h) + 78px);
      margin-bottom: 10px;
    }

    @media (--lg) {
      margin-bottom: 20px;
    }

    & .swiper-slide {
      height: auto;
      padding-left: 7%;

      @media (--2xl) {
        padding-right: 20%;
        padding-left: 2%;
      }

      @media (--sm) {
        padding-left: 26%;
      }

      @media (--xs) {
        padding-left: 20%;
      }

      &>img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center bottom;
      }
    }
  }

  &-help {
    --w-slide-help: 120px;
    width: calc(3.5 * var(--w-slide-help));
    margin-left: 17%;

    @media (--2xl) {
      --w-slide-help: 90px;
    }

    @media (--650h) {
      --w-slide-help: 86px;
    }

    @media (--lg) {
      margin-bottom: 50px;
    }

    @media (--sm) {
      --w-slide-help: 70px;
      margin-left: 26%;
    }

    @media (--xs) {
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 26px;
    }

    & .swiper-slide {
      border-bottom: solid 2px transparent;
      width: var(--w-slide-help);
      height: var(--w-slide-help);
      /* padding: 10px 0px 10px 10px; */
      transition: border-bottom .4s ease-in;
      cursor: pointer;

      &:hover {
        border-bottom: solid 2px #14C9D9;
      }

      &>img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    & .swiper-slide-thumb-active {
      border-bottom: solid 2px var(--color-blue);
    }
  }
}
</style>