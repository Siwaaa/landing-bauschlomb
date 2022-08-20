<template>
  <section class="header">
    <div class="header__content container">
      <div class="header__info">
        <h1> PureVision® 2</h1>
        <p>Наверняка вы сталкивались с ситуацией, когда вы ощущали дискомфорт при вождении в условиях плохой видимости
          или в темное время суток. Блики и ореолы вместо четкой картинки — ваши частые спутники на дороге? Линзы
          PureVision® 2 помогут вам избежать неприятных сюрпризов. </p>
        <strong>PureVision® 2. Особая форма линз высокой четкости позволяет добиться ясного и четкого зрения без бликов
          и ореолов, даже в условиях низкой освещенности<sup class="sub">1</sup>.</strong>
        <div class="header__btn">
          <Button title="Подробнее" color="blue" />
          <Button title="Где купить" imgRight="right_small.svg" />
        </div>
      </div>
      <div class="header__swiper">
        <div class="swiper swiper-main">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="@/assets/img/swiper/swiper_1.png" alt="">
            </div>
            <div class="swiper-slide"><img src="@/assets/img/swiper/swiper_2.png" alt=""></div>
            <div class="swiper-slide"><img src="@/assets/img/swiper/swiper_3.png" alt=""></div>
          </div>
        </div>
        <div thumbsSlider="" class="swiper swiper-help">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="@/assets/img/swiper/swiper_1.png" />
            </div>
            <div class="swiper-slide">
              <img src="@/assets/img/swiper/swiper_2.png" />
            </div>
            <div class="swiper-slide">
              <img src="@/assets/img/swiper/swiper_3.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header__go">
      <a href="">Поехали</a>
    </div>
  </section>
</template>

<script>
import Button from '@/components/Button.vue';
import { Swiper, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.min.css';

export default {
  name: 'HeaderBlock',
  components: {
    Button,
    Swiper
  },
  mounted() {
    Swiper.use([Thumbs])
    /* eslint-disable no-unused-vars */
    const swiperBottom = new Swiper('.swiper-help', {
      loop: false,
      slidesPerView: 3,
      spaceBetween: 20,
      speed: 500,
      watchSlidesProgress: true,
      slideToClickedSlide: true,
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
      grabCursor: true,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      speed: 500,
      thumbs: {
        swiper: swiperBottom,
      },
    })
    // you can use different options later
    swiper.on('activeIndexChange', (swiper) => {
      // console.log(swiper)
    })
  },
}
</script>

<style lang="postcss">
.header {
  &__content {
    margin-bottom: 60px;
    margin-top: calc(var(--nav-h) + 70px);
    display: flex;
    justify-content: space-between;
  }

  &__info {
    width: 42%;

    &>h1 {
      font-weight: 700;
      font-size: var(--fz-h1);
      line-height: 85px;
      text-transform: capitalize;
      color: var(--color-blue);
      margin-bottom: 36px;
    }

    &>p {
      width: 90%;
      font-weight: 400;
      font-size: var(--fz);
      line-height: 34px;
      margin-bottom: 36px;
    }

    &>strong {
      display: block;
      font-weight: 700;
      font-size: var(--fz);
      line-height: 1.45;
      color: var(--color-blue);
      margin-bottom: 50px;
    }
  }

  &__btn {
    display: flex;
    align-items: center;

    &>*:first-child {
      margin-right: 30px;
    }
  }

  &__swiper {
    width: 52%;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: calc(var(--nav-h) - 120px);
      left: 0;
      display: block;
      width: 70%;
      height: 520px;
      background: url('@/assets/img/swiper/swiper_fon.png') center top / contain no-repeat;
    }
  }

  &__go {
    color: var(--color-blue);
    text-align: center;
    margin-bottom: 60px;

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
    }

  }
}

.swiper {
  &-main {
    margin-top: calc(var(--nav-h) + 20px);
    margin-bottom: 40px;

    & .swiper-slide {
      height: auto;
      padding-left: 17%;

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

    & .swiper-slide {
      border-bottom: solid 2px transparent;
      width: var(--w-slide-help);
      height: var(--w-slide-help);
      padding: 10px 0px 10px 10px;
      transition: border-bottom .5s ease-in;
      cursor: pointer;

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