<template>
  <nav class="nav">
    <div class="nav__content container">
      <div class="nav__logo">
        <a href="#">
          <img src="@/assets/img/logo.svg" alt="Логотип">
        </a>
      </div>
      <div class="nav__btn">
        <Button title="Получить скидку" size="s" imgLeft="surprise.svg" imgRight="right_small.svg"/>
      </div>
    </div>
  </nav>
</template>
<script>
import Button from '@/components/Button.vue';
export default {
  name: 'NavbarBlock',
  components: {Button}
}
</script>

<style lang="postcss">
.nav {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--color-blue);
  z-index: 10;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: var(--nav-h);
  }

  &__logo {
    max-width: 220px;

    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>