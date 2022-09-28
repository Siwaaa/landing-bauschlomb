<template>
  <div class="nav-container">
    <nav class="nav" ref="nav">
      <div class="nav__content container">
        <div class="nav__logo">
          <a href="https://ultralinzi.ru/">
            <img src="@/assets/img/logo.svg" alt="Логотип">
          </a>
        </div>
        <div class="nav__btn">
          <Button title="Получить скидку" size="s" imgLeft="surprise.svg" imgRight="right_small.svg" @click.native="onModal" />
        </div>
      </div>
    </nav>
    <Modal :visible.sync="navModal" :type="typeModal"/>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';
import Modal from '@/components/Modal.vue';

export default {
  name: 'NavbarBlock',
  components: { Button, Modal },
  data() {
    return {
      navModal: false,
      typeModal: 'reg'
    }
  },
  methods: {
    // fixed header
    onScrollHeader() {
      if (process.client && document.documentElement.clientWidth < 481) {
        const header = this.$refs.nav
        let prevScroll = window.pageYOffset // на сколько была прокручена страница ранее
        let currentScroll // на сколько прокручена страница сейчас

        window.addEventListener('scroll', () => {
          currentScroll = window.pageYOffset
          const headerHidden = () => header.classList.contains('nav-fixed') // узнаем скрыт header или нет

          if (currentScroll > 100 && currentScroll > prevScroll && !headerHidden()) { // если прокручиваем страницу вниз и header не скрыт, при этом не трогаем header если мы вверху окна
            header.classList.add('nav-fixed') // то скрываем header
          }
          if (currentScroll < prevScroll && headerHidden()) { // если прокручиваем страницу вверх и header скрыт
            header.classList.remove('nav-fixed') // то отображаем header
          }

          prevScroll = currentScroll // записываем на сколько прокручена страница на данный момент
        })
      }
    },
    onModal() {
      this.navModal = true
    }
  },
  mounted() {
    this.onScrollHeader()
  },
}
</script>

<style lang="postcss">
.nav {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--color-blue);
  z-index: 10;
  transition: transform .4s ease-in-out;

  &-fixed {
    transform: translateY(-100%);
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: var(--nav-h);
  }

  &__logo {
    max-width: 220px;

    @media (--2xl) {
      max-width: 190px;
    }

    @media (--lg) {
      max-width: 180px;
    }
    @media (--md) {
      max-width: 140px;
    }
    @media (--xs) {
      max-width: 120px;
    }

    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &__btn {
    @media (--xs) {
      display: none;
    }
  }
}
</style>