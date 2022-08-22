<template>
  <div class="modal__content modal-reg">
    <div class="modal__header" id="modalTitle">
      <h2>Зарегистрируйтесь <br> в программе лояльности,<br>и получите 250 баллов<sup class="sub">*</sup></h2>
      <p>Которые вы сможете обменять на промокод <br> на скидку 500 ₽ и использовать его при покупке контактных линз PureVision<sup class="sub">®</sup> 2</p>
    </div>
    <div class="modal__main">
      <form action="" class="form">
        <input class="form__input" type="tel" placeholder="+7">
        <Button title="Зарегистрироваться" color="blue"/>
        <div class="form__check">
          <input type="radio" name="agree" id="agree">
          <label for="agree">Я ознакомлен с <a href="">условиями пользования сайтом</a>,<br>согласен с <a href="">Условиями обработки персональных данных</a> <br>и <a href="">Правилами программы</a></label>
        </div>
      </form>
    </div>
    <div class="modal__footer">
      * Для регистрации и получения баллов нужно <br>подтвердить e-mail. Баллы поступят <br>через несколько минут
    </div>
  </div>

</template>

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
    & > h2 {
      font-size: var(--fz-h3);
      font-weight: 700;
      text-transform: uppercase;
      color: var(--color-blue);
    }
  }
  & .modal__main {
    margin-bottom: 3vh;
    & > img {
      height: 400px;
      object-fit: contain;
      margin-bottom: 4vh;
    }
    & > p {
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