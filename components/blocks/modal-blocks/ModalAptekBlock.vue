<template>
  <div v-if="showAptek" class="modal__content modal-aptek">
    <div class="modal__header" id="modalTitle">
      <h2>Выберите, где приобрести <br>
        <strong>PureVision<sup class="sub">®</sup> 2</strong>
      </h2>
    </div>
    <div class="modal__main">
      <div class="modal__aptek">
        <div ref="apteks" class="internet-shops">
          <a v-for="(item) in aptekList" :key="item.title" :href="item.link" class="internet-shops__item"
            target="_blank">
            <img :src="require(`@/assets/img/aptek/${item.img}.png`)" :title="item.title" :alt="item.title"
              loading="lazy">
          </a>
        </div>
        <Slider v-model="valueSlider" orientation="vertical" />
      </div>
      <Button title="Получить скидку" color="blue" imgLeft="sale.svg" @click.native="goToForm" />
      <p class="modal__aptek-desc">
        <img src="@/assets/img/sale-blue.svg" alt=""> — Онлайн магазины, участвующие в программе лояльности Bausch+Lomb
        Friends*
      </p>
    </div>
    <div class="modal__footer">
      * Друзья Бауш + Ломб
    </div>
  </div>
  <div v-else class="modal__content modal-aptek">
    <div class="modal__header" id="modalTitle">
      <h2>Зарегистрируйтесь <br> в программе лояльности,<br>и получите 250 баллов<sup class="sub">*</sup></h2>
      <p id="p-reg">Которые вы сможете обменять на промокод <br> на скидку 500 ₽ и использовать его при покупке
        контактных линз
        PureVision<sup class="sub">®</sup> 2</p>
    </div>
    <div class="modal__main">
      <form action="" class="form">
        <input class="form__input" type="tel" placeholder="+7">
        <div class="form__check" style="margin-top: 10px; margin-bottom: 3vh">
          <input type="radio" name="agree" id="agree">
          <label for="agree">Я ознакомлен с <a href="">условиями пользования сайтом</a>,<br>согласен с <a
              href="">Условиями обработки персональных данных</a> <br>и <a href="">Правилами программы</a></label>
        </div>
        <div class="form__btns">
          <Button title="Назад" imgLeft="left_small.svg" @click.native="goToAptek" />
          <Button title="Зарегистрироваться" color="blue" />
        </div>
      </form>
    </div>
    <div class="modal__footer" style="text-align: center;">
      * Для регистрации и получения баллов нужно подтвердить e-mail. Баллы поступят через несколько минут
    </div>
  </div>

</template>

<script>

export default {
  name: 'ModalAptekBlock',
  data() {
    return {
      showAptek: true,
      valueSlider: 100,
      currentTranslate: 0,
      aptekList: [
        {
          title: 'Здравсити',
          img: 'logo_zdravcity',
          sale: false,
          link: ''
        },
        {
          title: 'Яндекс Маркет',
          img: 'logo_yandexmarket-2',
          sale: false,
          link: ''
        },
        {
          title: 'ЕАптека',
          img: 'logo_eapteka',
          sale: false,
          link: ''
        },
        {
          title: 'Glazburg',
          img: 'logo_glazburg',
          sale: false,
          link: ''
        },
        {
          title: 'Ozon',
          img: 'logo_ozon',
          sale: false,
          link: ''
        },
        {
          title: 'Линзы Москвы',
          img: 'logo_linzimoskvi',
          sale: false,
          link: ''
        },
        {
          title: '2 парлинз',
          img: 'logo_2parlinz',
          sale: false,
          link: ''
        },
        {
          title: 'Оптимист оптика',
          img: 'logo_optimist',
          sale: false,
          link: ''
        },
        {
          title: 'Перекресток Впрок',
          img: 'logo_vprok',
          sale: false,
          link: ''
        },
        {
          title: 'Apteka.ru',
          img: 'logo_aptekaru',
          sale: false,
          link: ''
        },
        {
          title: 'Линз Курьер',
          img: 'logo_linzkuryer',
          sale: false,
          link: ''
        },
        {
          title: 'NetOptika',
          img: 'logo_netoptika',
          sale: false,
          link: ''
        },
        {
          title: 'Линзочки',
          img: 'logo_linzochki',
          sale: false,
          link: ''
        },
        {
          title: 'linzispb',
          img: 'logo_linzispb',
          sale: false,
          link: ''
        },
        {
          title: 'Ronos',
          img: 'logo_cronosoptika',
          sale: false,
          link: ''
        },
        {
          title: 'Браво оптика',
          img: 'logo_bravooptika',
          sale: false,
          link: ''
        },
        {
          title: 'Культура зрения',
          img: 'logo_culturazreniya',
          sale: false,
          link: ''
        },
        {
          title: 'glavlinza',
          img: 'logo_glavlinza',
          sale: false,
          link: ''
        },
        {
          title: 'inoptika',
          img: 'logo_inoptika',
          sale: false,
          link: ''
        },
        {
          title: 'lensgo',
          img: 'logo_lensgo',
          sale: false,
          link: ''
        },
        {
          title: 'linzacity',
          img: 'logo_linzacity',
          sale: false,
          link: ''
        },
        {
          title: 'linzipenzi',
          img: 'logo_linzipenzi',
          sale: false,
          link: ''
        },
        {
          title: 'Линзы Питер',
          img: 'logo_linzipiter',
          sale: false,
          link: ''
        },
        {
          title: 'Лорнет',
          img: 'logo_lornet',
          sale: false,
          link: ''
        },
        {
          title: 'Очкарик',
          img: 'logo_ochkarik',
          sale: false,
          link: ''
        },
        {
          title: 'ochkovnet',
          img: 'logo_ochkovnet',
          sale: false,
          link: ''
        },
        {
          title: 'Оптик-а',
          img: 'logo_optik-a',
          sale: false,
          link: ''
        },
        {
          title: 'Оптика фаворит',
          img: 'logo_optikafavorit-2',
          sale: false,
          link: ''
        },
        {
          title: 'Оптика фаворитс',
          img: 'logo_optikafavorit',
          sale: false,
          link: ''
        },
        {
          title: 'pervayasamarskaya',
          img: 'logo_pervayasamarskaya',
          sale: false,
          link: ''
        },
        {
          title: 'Счастливый взгляд',
          img: 'logo_shastlivyvzglyad',
          sale: false,
          link: ''
        },
        {
          title: 'Склад линз',
          img: 'logo_skladlinz',
          sale: false,
          link: ''
        },
        {
          title: 'viplinza',
          img: 'logo_viplinza',
          sale: false,
          link: ''
        },
        {
          title: 'wildberries',
          img: 'logo_wildberries',
          sale: false,
          link: ''
        },
        {
          title: 'Яндекс маркет',
          img: 'logo_yandexmarket',
          sale: false,
          link: ''
        },
        {
          title: 'zzrenie',
          img: 'logo_zzrenie',
          sale: false,
          link: ''
        },
      ]
    }
  },
  computed: {
    scrollHeight() {
      return this.$refs.apteks.scrollHeight
    }
  },
  methods: {
    goToForm() {
      this.showAptek = false
    },
    goToAptek() {
      this.showAptek = true
    }
  },
  mounted() {
    console.log(this.$refs.apteks.clientHeight);
  },
  watch: {
    valueSlider(oldVal, newVal) {
      const k = Math.trunc(this.scrollHeight / 400)
      this.$refs.apteks.style.transform = `translateY(${(newVal - 101) * k}%)`
    }
  }
}
</script>

<style lang="postcss">
.modal-aptek {
  &.modal__content {
    width: 80vw;
    padding: 50px 40px 25px;

    @media (--md) {
      width: 90vw;
      padding: 20px;
    }
  }

  & .modal__header {

    & h2>strong {
      display: inline-block;
      margin-top: 20px;
      text-transform: capitalize;
    }
  }

  & .modal__main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & .modal__aptek {
    display: flex;
    justify-content: space-between;
    max-height: 400px;
    margin-bottom: 3vh;
    overflow: hidden;
    /* -ms-overflow-style: none;
    &::-webkit-scrollbar { width: 0; }
    &{ overflow: -moz-scrollbars-none; } */

    .p-slider {
      width: 2px;
      height: 300px;
      margin-top: 50px;
      margin-right: 2%;
      background: var(--color-blue);

      & .p-slider-range {
        background: #dedede;
      }

      & .p-slider-handle {
        border: 2px solid var(--color-blue);

        &:hover {
          background: var(--color-blue);
        }
      }
    }

    &-desc {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 2vh;
      font-weight: 400;
      font-size: 16px;
      color: #989898;

      @media (--lg) {
        align-items: flex-start;
        text-align: left;
        font-size: 14px;
      }

      @media (--xs) {
        font-size: 11px;
      }

      &>img {
        width: 25px;
        height: 25px;
        object-fit: contain;
        margin-right: 8px;
      }
    }
  }
}

.internet-shops {
  display: flex;
  flex-wrap: wrap;
  flex-basis: 96%;
  /* transition: transform .3s ease-in-out; */

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
    height: 120px;
    padding-top: 5px;
    padding-bottom: 5px;

    @media (--md) {
      width: 33%;
      height: 100px;
    }

    @media (--sm) {
      width: 50%;
    }

    &>img {
      max-width: 100%;
      width: auto;
      height: auto;
      max-height: 100%;
      object-fit: contain;
    }
  }
}

.form__btns {
  display: flex;
  justify-content: center;
  align-items: center;

  @media (--md) {
    flex-direction: column-reverse;
  }

  &>.btn:first-child {
    margin-right: 15px;

    @media (--md) {
      margin-right: 0;
      margin-top: 20px;
    }

    & svg {
      height: 19px;

      @media (--xs) {
        height: 10px;
      }
    }
  }
}

#p-reg {
  width: 60%;
  margin-right: auto;
  margin-left: auto;

  @media (--md) {
    width: 100%;
  }
}
</style>