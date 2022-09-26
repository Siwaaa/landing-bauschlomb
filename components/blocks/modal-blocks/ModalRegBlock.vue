<template>
  <div class="modal__content modal-reg">
    <div class="modal__header" id="modalTitle">
      <h2>Зарегистрируйтесь <br> в программе лояльности,<br>и получите 250 баллов<sup class="sub">*</sup></h2>
      <p>Которые вы сможете обменять на промокод <br> на скидку 500 ₽ и использовать его при покупке контактных линз
        Bausch+Lomb ULTRA<sup class="sub">®</sup></p>
    </div>
    <div class="modal__main">
      <form v-if="formType === 'number'" class="form" @submit.prevent="getMeCode">
        <div class="form__input">
          <input v-model="phoneData" v-phone ref="phoneEl" class="form__input-input" type="tel" placeholder="+7"
            maxlength="18">
          <span v-show="textError" class="form__error">{{  textError  }}</span>
        </div>
        <Button title="Зарегистрироваться" color="blue" type="submit" id="sdf"/>
        <div class="form__check">
          <input v-model="checkedRules" type="checkbox" name="agree" id="agree">
          <label for="agree">Я ознакомлен с <a href="/site_rules.pdf" target="_blank">условиями пользования сайтом</a>,<br>согласен с <a
            href="/politika_o_konfidencialnosty.pdf" target="_blank">Условиями обработки персональных данных</a> <br>и <a href="https://ultralinzi.ru/loyalty_program_rules.php" target="_blank">Правилами программы</a></label>
        </div>
      </form>
      <form v-else class="form" @submit.prevent="setMeCode">
        <div class="form__input">
          <input v-model="codeData" class="form__input-input" type="text" placeholder="Введите код" maxlength="8" style="text-align: center">
          <span v-show="textError" class="form__error">{{  textError  }}</span>
        </div>
        <Button title="Подтвердить" color="blue" type="submit" id="sdf"/>
      </form>
    </div>
    <div class="modal__footer">
      * Для регистрации и получения баллов нужно <br>подтвердить e-mail. Баллы поступят <br>через несколько минут
    </div>
  </div>

</template>

<script>
export default {
  name: 'ModalRegBlock',
  data() {
    return {
      phoneData: '',
      codeData: '',
      textError: '',
      checkedRules: false,
      formType: 'number', // or code, or repeatCode
      customer: null
    }
  },
  computed: {
    formatedPhone() {
      return this.phoneData.replace(/[^0-9]/g,"")
    }
  },
  methods: {
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
            if(d.status != 'Success') {
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
  }
}
</script>

<style lang="postcss">
.modal-reg {
  &.modal__content {
    --reg-content-w: 784px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: var(--reg-content-w);
    height: var(--reg-content-w);
    padding: 140px 70px 40px;
    border-radius: 50%;

    @media (--650h) {
      --reg-content-w: 620px;
      padding: 85px 55px 20px;
    }

    @media (--xl) {
      --reg-content-w: 700px;
      padding: 110px 70px 20px;
    }

    @media (--sm) {
      --reg-content-w: 550px;
      padding: 60px 40px 20px;
    }

    @media (--xs) {
      padding: 50px 95px 20px;
    }

    @media (max-width: 360px) {
      --reg-content-w: 510px;
    }
  }

  & .modal__header {
    margin-bottom: 3vh;

    &>h2 {
      font-size: var(--fz-h3);
      font-weight: 700;
      text-transform: uppercase;
      color: var(--color-blue);
    }
  }

  & .modal__main {
    margin-bottom: 3vh;

    &>img {
      height: 400px;
      object-fit: contain;
      margin-bottom: 4vh;
    }

    &>p {
      width: 82%;
      margin-right: auto;
      margin-left: auto;
      font-size: var(--fz);
      font-weight: 400;
      line-height: 1.45;
    }
  }

  & .modal__footer {
    text-align: center;
  }
}
</style>