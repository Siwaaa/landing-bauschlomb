<template>
  <div class="medinfo__container">
    <div class="medinfo" v-show="showMed">
      <div class="medinfo__content">
        <div class="nav__btn medinfo__btn">
          <Button title="Получить скидку" size="s" imgLeft="surprise.svg" imgRight="right_small.svg"
            @click.native="redirectToTarget" />
        </div>
        <p ref="medinfo__text">ИМЕЮТСЯ ПРОТИВОПОКАЗАНИЯ, НЕОБХОДИМО ПРОКОНСУЛЬТИРОВАТЬСЯ СО СПЕЦИАЛИСТОМ</p>
      </div>
    </div>
    <!-- <Modal :visible.sync="medModal" type="reg" /> -->
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue';

export default {
  name: "Medinfo",
  data() {
    return {
      showMed: false,
      medModal: false
    };
  },
  methods: {
    resizeMedInfo() {
      const screenWidth = document.documentElement.clientWidth;
      if (process.client && screenWidth < 636) {
        this.$refs.medinfo__text.style.removeProperty("transform");
      }
      else if (process.client) {
        let perpx = screenWidth > 1000 ? 2410 : 2440;
        let ratio = screenWidth / perpx;
        this.$refs.medinfo__text.style.transform = `scale( ${ratio}, 1.1 )`;
      }
    },
    onModal() {
      this.medModal = true
    },
    redirectToTarget() {
      if (process.client) {
        gtag('event', 'send', {'event_category': 'Button', 'event_action': ' Get a discount (header)'});
        ym(90600398,'reachGoal','confirm_sms_code_button');
        
        window.open('https://ultralinzi.ru/friend/registration/?utm_source=ultra')
      }
    }
  },
  mounted() {
    this.showMed = true;
    this.resizeMedInfo();
    window.addEventListener("resize", this.resizeMedInfo);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeMedInfo);
  },
  components: { Modal }
}
</script>

<style lang="postcss">
.medinfo {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: var(--color-blue);
  color: var(--color-white);
  opacity: .7;
  z-index: 10;

  @media (--xs) {
    opacity: 1;
  }

  &__content {
    height: var(--med-h);
    padding: 0 10px;
    overflow: hidden;

    @media (--sm) {
      padding: 10px;
      text-align: center;
    }
    @media (--xs) {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }

    &>p {
      display: block;
      width: 100%;
      font-size: var(--med-h);
      white-space: nowrap;
      line-height: 1;
      /* transform: scale(.3, 1.1); */
      transform-origin: left;

      @media (--sm) {
        font-size: 16px;
        font-weight: 200;
        line-height: 1.2;
        white-space: normal;
      }

      @media (--xs) {
        font-size: 12px;
      }
    }
  }

  &__btn {
    display: none;

    @media (--xs) {
      display: inline-block !important;
      text-align: center;
      margin-bottom: 5px;
    }
  }
}
</style>