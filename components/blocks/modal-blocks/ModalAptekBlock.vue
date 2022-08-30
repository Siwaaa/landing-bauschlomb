<template>
  <div v-if="showAptek" ref="container-aptek" class="modal__content modal-aptek">
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
        <Slider v-model="valueSlider" orientation="vertical" ref="sliderEl" />
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
      <form class="form" @submit.prevent="sendForm">
        <div class="form__input">
          <input v-model="phoneData" v-phone ref="phoneEl" class="form__input-input" type="tel" placeholder="+7"
            maxlength="18">
          <span v-show="textError" class="form__error">{{  textError  }}</span>
        </div>
        <Button title="Зарегистрироваться" color="blue" type="submit" />
        <div class="form__check">
          <input v-model="checkedRules" type="checkbox" name="agree" id="agree">
          <label for="agree">Я ознакомлен с <a href="">условиями пользования сайтом</a>,<br>согласен с <a
              href="">Условиями обработки персональных данных</a> <br>и <a href="">Правилами программы</a></label>
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
          link: 'https://zdravcity.ru/p_linzy-kontaktnye-purevision2-hd-8-6-3-75-6sht-0161242.html'
        },
        {
          title: 'Яндекс Маркет',
          img: 'logo_yandexmarket-2',
          sale: false,
          link: 'https://market.yandex.ru/product--kontaktnye-linzy-bausch-lomb-purevision-2-hd-6-sht/1717790287?glfilter=27144251%3A28719085_100304721477&cpa=1&cpc=qOtYFLSDyB8KXxTDf5uxzeA7WM8VV7wPNJM8O8nJ_mNLtDQW9jtMC_YmF8YFK3NXTegwb1Jo-ejVTRSYpuQukj4X4Io-258Qx6rE4o-2AVNi7B0mRsGHMYmBCd6zJw8dojaRXAbWLEa0Iu4g2a54XzuPspKoiDV_-hjKuX5Rcg_rs_6JE6tptw%2C%2C&sku=100304721477&offerid=qVxhPeOmbM8uB6ThRlJBEA'
        },
        {
          title: 'ЕАптека',
          img: 'logo_eapteka',
          sale: false,
          link: 'https://www.eapteka.ru/goods/id273250/'
        },
        {
          title: 'Glazburg',
          img: 'logo_glazburg',
          sale: false,
          link: 'https://glazburg.ru/kontaktnye-linzy/pure-vision-2-hd'
        },
        {
          title: 'Ozon',
          img: 'logo_ozon',
          sale: false,
          link: 'https://www.ozon.ru/product/bausch-lomb-kontaktnye-linzy-pure-vision-2-6sht-8-6-3-00-19742048/?_bctx=CAMQzpi1CQ&asb=lz9Q6%252F%252BEtVgoaN1SQwbnUwqtitpoqXLUOI7nGSrNq2k%253D&asb2=rJoe23PIj5hqMK0135VDbOGTU-cTZm8fohWnUrNowdHiZlCWzDyp4DehNRcvo8pi&sh=_baKQ7pCVg'
        },
        {
          title: 'Линзы Москвы',
          img: 'logo_linzimoskvi',
          sale: false,
          link: 'https://kupit-linzi-msk.ru/shop/pure-vision-2'
        },
        {
          title: '2 паралинз',
          img: 'logo_2parlinz',
          sale: false,
          link: 'https://www.para-linz.ru/product_info.php?manufacturers_id=4&products_id=201&osCsid=p8knd1tgrtbccf408i8eh11sr7'
        },
        {
          title: 'Оптимист оптика',
          img: 'logo_optimist',
          sale: false,
          link: 'https://optimistoptica.ru/kontaktnye_linzy/pure_vision_2_bausch_lomb_6_linz.html'
        },
        {
          title: 'Перекресток Впрок',
          img: 'logo_vprok',
          sale: false,
          link: 'https://www.vprok.ru/product/purevision-kl-pure-vision2-6pk8-6-3-00--982023'
        },
        {
          title: 'Apteka.ru',
          img: 'logo_aptekaru',
          sale: false,
          link: 'https://apteka.ru/product/bauschlomb-pure-vision-2-kontaktnye-linzy-planovoj-zameny-375-6-sht-5e327594f5a9ae000140e750/'
        },
        {
          title: 'Линз Курьер',
          img: 'logo_linzkuryer',
          sale: false,
          link: 'https://linzkurier.ru/catalog/kontaktnye_linzy/brendy_1/pure_vision_/1052142/?oid=1052610'
        },
        {
          title: 'NetOptika',
          img: 'logo_netoptika',
          sale: false,
          link: 'https://www.netoptika.ru/product/purevision2hd/'
        },
        {
          title: 'Линзочки',
          img: 'logo_linzochki',
          sale: false,
          link: 'http://linz-ochki.ru/internet-magazin?mode=product&product_id=125337203'
        },
        {
          title: 'linzispb',
          img: 'logo_linzispb',
          sale: false,
          link: 'https://linzispb.ru/products/purevision_2hd'
        },
        {
          title: 'Мастероптик',
          img: 'logo_master',
          sale: false,
          link: 'https://masteroptik.ru/catalog/kontaktnye_linzy/pure_vision_2_hd/'
        },
        {
          title: 'glavlinza',
          img: 'logo_glavlinza',
          sale: false,
          link: 'https://www.glavlinza.ru/kontaktnye-linzy-purevision-2-hd-6-linz-p-988.html'
        },
        {
          title: 'lensgo',
          img: 'logo_lensgo',
          sale: false,
          link: 'https://lensgo.ru/kontaktnye-linzy/obychnye/purevision-2-6-linz'
        },
        {
          title: 'linzacity',
          img: 'logo_linzacity',
          sale: false,
          link: 'https://linzacity.ru/contact-lenses/extended_wear/pure-vision-2-6pk-kontaktnye-linzy/'
        },
        {
          title: 'Очкарик',
          img: 'logo_ochkarik',
          sale: false,
          link: 'https://ochkarik.ru/contaktnie-linzy/pure-vision-2-hd/3307625/'
        },
        {
          title: 'ochkovnet',
          img: 'logo_ochkovnet',
          sale: false,
          link: 'https://www.ochkov.net/linzy-na-mesyats/opticheskie/purevision-2.htm'
        },
        {
          title: 'Оптика фаворитс',
          img: 'logo_optikafavorit',
          sale: false,
          link: 'https://www.optika-favorit.ru/catalog/contact_lenses/replacement/104280/'
        },
        {
          title: 'Счастливый взгляд',
          img: 'logo_shastlivyvzglyad',
          sale: false,
          link: 'https://happylook.ru/catalog/contact_lenses/pure_vision_2_hd_6/'
        },
        {
          title: 'viplinza',
          img: 'logo_viplinza',
          sale: false,
          link: 'https://viplinza.ru/BAUSCH-LOMB/PureVision-2-HD'
        },
        {
          title: 'wildberries',
          img: 'logo_wildberries',
          sale: false,
          link: 'https://www.wildberries.ru/catalog/10095926/detail.aspx?targetUrl=BP'
        },
        {
          title: 'zzrenie',
          img: 'logo_zzrenie',
          sale: false,
          link: 'https://z-zrenie.ru/catalog/kontaktnye-linzy/purevision-2-6-linz/'
        },
      ],
      phoneData: null,
      textError: '',
      checkedRules: false
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
    },
    validateSubmit() {
      if (this.phoneData.length < 18) {
        this.textError = 'Пожалуйста, укажите верный номер телефона'
        return false
      }

      if (!this.checkedRules) {
        this.textError = 'Пожалуйста, отметьте, что согласны с правилами сайта'
        return false
      }

      this.textError = ''
      return true
    },
    sendForm() {
      if (!this.validateSubmit()) return false
      alert(this.phoneData)
    }
  },
  mounted() {
    this.$refs.apteks.addEventListener('scroll', e => {
      if (!this.$refs.sliderEl.$el.classList.contains('p-slider-sliding')) {
        const k = (100 * e.target.scrollTop) / (this.scrollHeight - 400)
        this.valueSlider = 100 - Math.trunc(k)
      }
    })
  },
  watch: {
    valueSlider(oldVal, newVal) {
      if ((newVal % 2 == 0) && this.$refs.sliderEl.$el.classList.contains('p-slider-sliding')) {
        // 1 вариант
        // const k = Math.trunc(this.scrollHeight / 400)
        // this.$refs.apteks.style.transform = `translateY(${(newVal - 101) * k}%)`
        // 2 вариант
        const k = (this.scrollHeight - 400) / 100
        this.$refs.apteks.scrollTop = (100 - newVal) * k
      }
    }
  }
}
</script>

<style lang="postcss">
.modal-aptek {
  &.modal__content {
    width: 80vw;
    max-width: 1200px;
    height: 780px;
    padding: 50px 40px 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media (--md) {
      width: 86vw;
      height: 750px;
      padding: 20px;
      justify-content: center;
    }

    @media (--sm) {
      height: 720px;
    }

    @media (--xs) {
      height: 690px;
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
  overflow-y: auto;
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;

  /* Firefox */
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

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
  margin-top: 5vh;

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