<template>
  <div v-if="showAptek" ref="container-aptek" class="modal__content modal-aptek">
    <div class="modal__header" id="modalTitle">
      <h2>Выберите, где приобрести <br>
        <strong>Bausch+Lomb ULTRA<sup class="sub">®</sup></strong>
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
      <Button title="Получить скидку" color="blue" imgLeft="sale.svg" @click.native="redirectToTarget" />
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
        Bausch+Lomb ULTRA<sup class="sub">®</sup></p>
    </div>
    <div class="modal__main">
      <form v-if="formType === 'number'" class="form" @submit.prevent="getMeCode">
        <div class="form__input">
          <input v-model="phoneData" v-phone ref="phoneEl" class="form__input-input" type="tel" placeholder="+7"
            maxlength="18">
          <span v-show="textError" class="form__error">{{ textError }}</span>
        </div>
        <div class="form__check">
          <input v-model="checkedRules" type="checkbox" name="agree" id="agree">
          <label for="agree">Я ознакомлен с <a href="/site_rules.pdf" target="_blank">условиями пользования сайтом</a>,<br>согласен с <a
              href="/politika_o_konfidencialnosty.pdf" target="_blank">Условиями обработки персональных данных</a> <br>и <a href="https://ultralinzi.ru/loyalty_program_rules.php" target="_blank">Правилами программы</a></label>
        </div>
        <div class="form__btns">
          <Button title="Назад" color="white" type="button" imgLeft="left_small.svg" @click.native="goToAptek" />
          <Button title="Зарегистрироваться" color="blue" type="submit" id="sdf" />
        </div>
      </form>
      <form v-else class="form" @submit.prevent="setMeCode">
        <div class="form__input">
          <input v-model="codeData" class="form__input-input shadow-placeholder" type="text" placeholder="Введите код" maxlength="8"
            style="text-align: center">
          <span v-show="textError" class="form__error">{{ textError }}</span>
        </div>
        <Button title="Подтвердить" color="blue" type="submit" id="sdf" />
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
        // {
        //   title: 'Здравсити',
        //   img: 'logo_zdravcity',
        //   sale: false,
        //   link: 'https://zdravcity.ru/p_linzy-kontaktnye-purevision2-hd-8-6-3-75-6sht-0161242.html'
        // },
        {
          title: 'Яндекс Маркет',
          img: 'logo_yandexmarket-2',
          sale: false,
          link: 'https://market.yandex.ru/product--kontaktnye-linzy-bausch-lomb-ultra-6-sht/1717054670?glfilter=27144251%3A28719188_100368008994&cpc=AuMiSb55R33mdqG2JJjpy65-c8X-FClXLgFastHKaAvP696uMHNkkzBp-TJWlKI0pgGCUxNENAdIGlFYcUdlRicMrWrDG6gWVOSrY7eexAL5xF-JVnOT019qTvyT1CQ89a7_joJv3p39CpRgLoN2DGLxDqGhLGX8wJbuCjaIOO9qWGs08g1vVRxt89kfJqwd&from-show-uid=16636880638894168184900004&sku=100368008994&do-waremd5=PL9NO3OPVCqzVJUWTXAC_A&sponsored=1&cpa=1'
        },
        {
          title: 'ЕАптека',
          img: 'logo_eapteka',
          sale: false,
          link: 'https://www.eapteka.ru/goods/id513473/'
        },
        // {
        //   title: 'Glazburg',
        //   img: 'logo_glazburg',
        //   sale: false,
        //   link: 'https://glazburg.ru/kontaktnye-linzy/pure-vision-2-hd'
        // },
        {
          title: 'Ozon',
          img: 'logo_ozon',
          sale: false,
          link: 'https://www.ozon.ru/product/silikon-gidrogelevye-kontaktnye-linzy-bausch-lomb-ultra-8-5-3-5-6-sht-152577544/?asb=vzivIn8cNNKUcL77QshR9KZ4%252BlIeIRZ5lUFgvDAJHto%253D&asb2=uyIaSatxqPPRJhxkaaBhnCfOKbq_5GrHpgdWtJ8kP9gbZdrTqiOFYQISrR0B92GR&keywords=%D0%BB%D0%B8%D0%BD%D0%B7%D1%8B+%D0%BA%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B5+bausch+lomb+ultra&sh=x8jzkftD3w'
        },
        {
          title: 'Линзы Москвы',
          img: 'logo_linzimoskvi',
          sale: false,
          link: 'https://kupit-linzi-msk.ru/shop/ultra-6pk'
        },
        {
          title: '2 паралинз',
          img: 'logo_2parlinz',
          sale: false,
          link: 'https://www.para-linz.ru/bausch-lomb-ultra-3pk'
        },
        {
          title: 'Оптимист оптика',
          img: 'logo_optimist',
          sale: false,
          link: 'https://optimistoptica.ru/kontaktnye_linzy/bausch_lomb_ultra_6_linz.html'
        },
        // {
        //   title: 'Перекресток Впрок',
        //   img: 'logo_vprok',
        //   sale: false,
        //   link: 'https://www.vprok.ru/product/purevision-kl-pure-vision2-6pk8-6-3-00--982023'
        // },
        {
          title: 'Apteka.ru',
          img: 'logo_aptekaru',
          sale: false,
          link: 'https://apteka.ru/search/?q=Bausch+%2B+Lomb+Utra'
        },
        {
          title: 'Линз Курьер',
          img: 'logo_linzkuryer',
          sale: false,
          link: 'https://linzkurier.ru/catalog/kontaktnye_linzy/proizvoditeli/bausch_lomb/1052132/?oid=1056751'
        },
        {
          title: 'NetOptika',
          img: 'logo_netoptika',
          sale: false,
          link: 'https://www.netoptika.ru/product/kontaktnye-linzy-ultra-3-linzy/'
        },
        {
          title: 'Линзочки',
          img: 'logo_linzochki',
          sale: false,
          link: 'http://linz-ochki.ru/internet-magazin?mode=product&product_id=1296983803'
        },
        {
          title: 'Склад линз',
          img: 'logo_skladlinz',
          sale: false,
          link: 'https://apteka.ru/product/630ccceb50015d9c6751ad5c/'
        },
        {
          title: 'Браво оптика',
          img: 'logo_bravooptika',
          sale: false,
          link: 'https://bravo-optica.ru/catalog/linzy-kontaktnye/ultra-3/?oid=268411'
        },
        {
          title: 'Линзы Пензы',
          img: 'logo_linzipenzi',
          sale: false,
          link: 'https://linzipenzi.ru/ezhemesyachnye/ultra-3-linzy/'
        },
        {
          title: 'Культура зрения',
          img: 'logo_culturazreniya',
          sale: false,
          link: 'https://culturavision.com/lenses/1-mesyats/ultra-6pk/'
        },
        {
          title: 'linzispb',
          img: 'logo_linzispb',
          sale: false,
          link: 'https://linzispb.ru/products/ultra-6pk'
        },
        {
          title: 'Мастероптик',
          img: 'logo_master',
          sale: false,
          link: 'https://masteroptik.ru/catalog/kontaktnye_linzy/bausch_lomb_ultra_3sht_/'
        },
        {
          title: 'glavlinza',
          img: 'logo_glavlinza',
          sale: false,
          link: 'https://www.glavlinza.ru/kontaktnye-linzy-bauschlomb-ultra-6-sht-p-6703.html'
        },
        {
          title: 'lensgo',
          img: 'logo_lensgo',
          sale: false,
          link: 'https://lensgo.ru/kontaktnye-linzy/obychnye/ultra-3-linzy'
        },
        {
          title: 'linzacity',
          img: 'logo_linzacity',
          sale: false,
          link: 'https://linzacity.ru/contact-lenses/monthly_disposable/ultra-3pk-kontaktnye-linzy/'
        },
        {
          title: 'Очкарик',
          img: 'logo_ochkarik',
          sale: false,
          link: 'https://ochkarik.ru/contaktnie-linzy/ultra-3-linzy-/'
        },
        {
          title: 'Оптик-а',
          img: 'logo_optik-a',
          sale: false,
          link: 'https://optik-a.net/shop/kontacts-linz/ejemesechnie-linzi/ultra-6-linz/'
        },
        {
          title: 'Лорнет',
          img: 'logo_lornet',
          sale: false,
          link: 'https://lornet-optic.ru/obychnye-linzy/ezhemesyachnye/bausch-lomb-ultra-3-sht'
        },
        {
          title: 'Иноптика',
          img: 'logo_inoptika',
          sale: false,
          link: 'https://www.inoptika.ru/product/kontaktnye-linzy-ultra-3-linzy/'
        },
        {
          title: 'ochkovnet',
          img: 'logo_ochkovnet',
          sale: false,
          link: 'https://www.ochkov.net/linzy-na-mesyats/opticheskie/ultra.htm'
        },
        {
          title: 'Оптика фаворитс',
          img: 'logo_optikafavorit',
          sale: false,
          link: 'https://www.optika-favorit.ru/catalog/contact_lenses/replacement/104852/?sphrase_id=57513'
        },
        {
          title: 'Счастливый взгляд',
          img: 'logo_shastlivyvzglyad',
          sale: false,
          link: 'https://happylook.ru/catalog/contact_lenses/ultra_3/'
        },
        {
          title: 'viplinza',
          img: 'logo_viplinza',
          sale: false,
          link: 'https://viplinza.ru/BAUSCH-LOMB/ULTRA-3'
        },
        {
          title: 'wildberries',
          img: 'logo_wildberries',
          sale: false,
          link: 'https://www.wildberries.ru/catalog/116388303/detail.aspx?targetUrl=XS'
        },
        {
          title: 'zzrenie',
          img: 'logo_zzrenie',
          sale: false,
          link: 'https://z-zrenie.ru/catalog/kontaktnye-linzy/ultra-3-linzy/'
        },
      ],
      phoneData: '+7',
      codeData: '',
      textError: '',
      checkedRules: false,
      formType: 'number', // or code, or repeatCode
      customer: null
    }
  },
  computed: {
    scrollHeight() {
      return this.$refs.apteks.scrollHeight
    },
    formatedPhone() {
      return this.phoneData.replace(/[^0-9]/g, "")
    }
  },
  methods: {
    goToForm() {
      this.showAptek = false
    },
    goToAptek() {
      this.showAptek = true
    },
    redirectToTarget() {
      if (process.client) {
        window.location.href = 'https://ultralinzi.ru/friend/registration/?utm_source=ultra'
      }
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
    getMeCode() {
      const data = {
        phone: this.formatedPhone,
        operation: 'start'
      }

      this.sendForm(data, '/api')
        .then((d) => {
          this.customer = d
          this.formType = 'code'
        })
        .catch(er => console.log('Ошибка отправки данных\n' + er))
    },
    setMeCode() {
      const data = {
        phone: this.formatedPhone,
        code: this.codeData,
        operation: this.customer.isMobilePhoneConfirmed ? 'auth' : 'confirm'
      }

      this.sendForm(data, '/api/auth')
        .then((d) => {
          if (process.client) {
            if (d.status != 'Success') {
              this.textError = 'Неверный код из SMS'
            }
          }
        })
        .catch(er => console.log('Ошибка отправки данных\n' + er))
    },
    async sendForm(d, endpoint) {
      if (!this.validateSubmit()) throw new Error('not valid data')

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(d)
      })

      return await res.json()
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

    @media (--650h) {
      width: 82vw;
      height: 650px;
      padding: 20px;
      justify-content: center;
    }

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

    @media (--650h) {
      max-height: 370px;
    }

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

      @media (--650h) {
        font-size: 14px;
      }

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
  -webkit-overflow-scrolling: touch;

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
      height: 16px;

      @media (--md) {
        height: 13px;
      }
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