<template>
  <div v-if="product === 'multiplus'" class="modal__content modal-product">
    <div class="modal__header" id="modalTitle">
      <h2>Раствор ReNu<sup class="sub">®</sup> MultiPlus</h2>
    </div>
    <div class="modal__main">
      <img src="@/assets/img/care/1.jpg" alt="Раствор MultiPlus">
      <p>Очищает, нейтрализует и удаляет, образовавшуюся в процессе ношения пленку, протеиновые отложения и другие загрязнения с мягких контактных линз.</p>
    </div>
  </div>

  <div v-else-if="product === 'biotrue'" class="modal__content modal-product">
    <div class="modal__header" id="modalTitle">
      <h2>Раствор BIOTRUE<sup class="sub">®</sup></h2>
    </div>
    <div class="modal__main">
      <img src="@/assets/img/care/2.png" alt="Раствор BIOTRUE">
      <p>Естественный полимер гиалуронан является природным компонентом нашей слезы. Гиалуронан в составе Biotrue<sup class="sub">®</sup> в сочетании с сурфактантами помогает обеспечить увлажнение контактных линз до 20 часов<sup class="sub">*</sup>.</p>
    </div>
    <div class="modal__footer">
      * Scheuer C.A., Fridman K.M., Barniak V.L., Burke S.E., Venkatesh S. Retention of conditioning agent hyaluronan on hydrogel contact lenses. Contact Lens Anterior Eye, 2010; 33, с. 2-6 (Шойер Ц.А., Фридман К. М.,
      Барниак В. Л., Берк С. Е., Венкатеш С. Удержание увлажняющего агента гиалуронана в гидрогелевых контактных линзах. Контактные линзы и передний отрезок глаза. Журнал, 2010 г, вып. 33, с 2-6)
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalProductBlock',
  props: {
    product: String
  }
}
</script>

<style lang="postcss">
.modal-product {
   &.modal__content {
    width: 60vw;
    padding: 50px 40px 25px;

    @media (--lg) {
      width: 86vw;
      padding: 25px 10px 15px;
    }
  }

  & .modal__header {
  }
  & .modal__main {
  }
  & .modal__footer {
  }
}
</style>