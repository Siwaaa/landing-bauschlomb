<template>
  <div class="modal__content modal-aptek">
    <div class="modal__header" id="modalTitle">
      <h2>Выберите, где приобрести <br> 
        <strong>PureVision<sup class="sub">®</sup> 2</strong> 
      </h2>
    </div>
    <div class="modal__main">
      <div class="modal__aptek">
        <img src="@/assets/img/aptek.png" alt="Список аптек" />
      </div>
      <Button title="Получить скидку" color="blue" imgLeft="sale.svg"/>
      <p class="modal__aptek-desc">— Онлайн магазины, участвующие в программе лояльности Bausch+Lomb Friends* </p>
    </div>
    <div class="modal__footer">
      * Друзья Бауш + Ломб
    </div>
  </div>

</template>

<style lang="postcss">
.modal-aptek {
  &.modal__content {
    width: 80vw;
    padding: 50px 40px 25px;
  }

  & .modal__header {

    & h2 > strong {
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
    max-height: 400px;
    overflow-y: auto;
    margin-bottom: 2vh;

    & > img {
      width: 100%;
      object-fit: contain;
    }
    &-desc {
      margin-top: 2vh;
      font-weight: 400;
      font-size: 16px;
      color: #989898;
    }
  }
  & .modal__footer {
  }
}
</style>