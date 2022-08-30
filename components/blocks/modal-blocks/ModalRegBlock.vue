<template>
  <div class="modal__content modal-reg">
    <div class="modal__header" id="modalTitle">
      <h2>Зарегистрируйтесь <br> в программе лояльности,<br>и получите 250 баллов<sup class="sub">*</sup></h2>
      <p>Которые вы сможете обменять на промокод <br> на скидку 500 ₽ и использовать его при покупке контактных линз
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
      phoneData: null,
      textError: '',
      checkedRules: false
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
    sendForm() {
      if (!this.validateSubmit()) return false
      alert(this.phoneData)
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