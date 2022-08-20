<template>
  <div class="care">
    <div class="care__content container">
      <h2>Для ухода за вашими контактными линзами выбирайте</h2>
      <div class="care__items">
        <div class="care__items-item"> <img src="@/assets/img/care/1.jpg" alt="Раствор ReNu® MultiPlus" />
          <h3>Раствор ReNu® MultiPlus</h3>
          <div class="care__btn">
            <Button title="Узнать больше"/>
          </div>
        </div>
        <div class="care__items-item"> <img src="@/assets/img/care/2.png" alt="Раствор BIOTRUE®" />
          <h3>Раствор BIOTRUE®</h3>
          <div class="care__btn">
            <Button title="Узнать больше"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';
export default {
  name: "CareBlock",
  components: {Button}
}
</script>
<style lang="postcss">
.care {
  &__content {
    padding-top: var(--container-padding-h);
    padding-bottom: calc(2*var(--container-padding-h));

    & > h2 {
      font-weight: 700;
      font-size: 88px;
      line-height: 1.2;
      text-transform: uppercase;
      color: var(--color-blue);
      margin-bottom: 60px;
    }
  }
  &__items {
    display: flex;

    &-item {
      flex-basis: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      & > img {
        height: 349px;
        object-fit: contain;
        margin-bottom: 15px;
      }
      & > h3 {
        font-weight: 700;
        font-size: 24px;
        text-transform: uppercase;
        color: var(--color-blue);
        margin-bottom: 20px;
      }
    }
  }
}
</style>