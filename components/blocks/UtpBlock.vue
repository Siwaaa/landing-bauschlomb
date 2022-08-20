<template>
  <section class="utp">
    <div class="utp__content container">
      <div class="utp__items">
        <div class="utp__items-item"><img src="@/assets/img/utp-1.svg" alt="" />
          <p>Край контактных линз — тонкий закругленный, <br> обеспечивает мягкое взаимодействие <br>с поверхностью
            глаза и позволяет слезе <br> легко попадать под линзу<sup class="sub">2</sup>.</p>
        </div>
        <div class="utp__items-item"><img src="@/assets/img/utp-2.svg" alt="" />
          <p>Контактные линзы хорошо <br> держат форму и удобны <br> в обращении<sup class="sub">3</sup>.</p>
        </div>
      </div>
      <div class="utp__btn">
        <Button title="Получить скидку" imgRight="right_small.svg"/>
      </div>
    </div>
  </section>
</template>

<script>
import Button from '@/components/Button.vue';
export default {
  name: 'UtpBlock',
  components: {Button}
}
</script>
<style lang="postcss">
.utp {
  &__content {
    
    padding-top: var(--container-padding-h);
    padding-bottom: var(--container-padding-h);
  }
  &__items {
    display: flex;
    margin-bottom: 80px;

    &-item {
      flex-basis: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      & > img {
        width: 288px;
        height: 288px;
        object-fit: contain;
        margin-bottom: 30px;
      }
      & > p {
        font-weight: 400;
        font-size: 23px;
        line-height: 34px;
      }
    }
  }
  &__btn {
    width: fit-content;
    margin-right: auto;
    margin-left: auto;
  }
}
</style>