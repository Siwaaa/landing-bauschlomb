<template>
  <div class="modal__content modal-aptek">
    <div class="modal__header" id="modalTitle">
      <h2>Выберите, где приобрести <br>
        <strong>PureVision<sup class="sub">®</sup> 2</strong>
      </h2>
    </div>
    <div class="modal__main">
      <div class="modal__aptek">
        <div ref="apteks" class="internet-shops">
          <a v-for="(item, index) in aptekList" :key="index"
            href="https://linzkurier.ru/catalog/kontaktnye_linzy/proizvoditeli/bausch_lomb/"
            class="internet-shops__item" 
            target="_blank">
            <img :src="require(`@/assets/img/aptek/${item}.png`)" title="Линз Курьер" :alt="item">
          </a>
        </div>
        <Slider v-model="value" @input="changeSliderVal" orientation="vertical"/>
      </div>
      <Button title="Получить скидку" color="blue" imgLeft="sale.svg" />
      <p class="modal__aptek-desc">— Онлайн магазины, участвующие в программе лояльности Bausch+Lomb Friends* </p>
    </div>
    <div class="modal__footer">
      * Друзья Бауш + Ломб
    </div>
  </div>

</template>

<script>

export default {
  name: 'ModalAptekBlock',
  data() {
    return {
      value: 480,
      currentTranslate: 0,
      aptekList: [
        '3a9c83c3c6bdda2219de688aa39e78b5',
        '3ijshozuwz09ipsjezxt1mi3k08dowki',
        '4jk9urow6zuk9vor7am8qcqkw0k2s5be',
        '5ebc80af78193ea87cda3c10e6399c30',
        '7rbj79c4p50qqocezagrtw0cb2hz28o0',
        '35e9501e16fc099e6aefe6511f2b9baf',
        '078c6ff7a6164e7e355d74cb5307ac66',
        '83bba1d8319662d3e20d45648e1094c5',
        '87a4aa24e9925c75f88385ff0c925c45',
        '0505a2b8da65463ee4bbe725669f0801',
        '19357fc525ae9f045311f321966bc2b6',
        '57118e763384d933920e483e2049ab47',
        '4769267e2a675be6ccd611b121b698de'
      ]
    }
  },
  methods: {
    getHeightAptek() {
      console.log(this.$refs.apteks.scrollHeight);
    },
    changeSliderVal(e) {
      console.log('sffffff' + e)
      this.currentTranslate -= 360 / 100
      this.$refs.apteks.style.transform = `translateY(${this.currentTranslate}px)`
    }
  },
  mounted() {
    this.getHeightAptek()
  },
}
</script>

<style lang="postcss">
.modal-aptek {
  &.modal__content {
    width: 80vw;
    padding: 50px 40px 25px;
  }

  & .modal__header {

    & h2>strong {
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
    display: flex;
    justify-content: space-between;
    max-height: 400px;
    margin-bottom: 2vh;
    overflow: hidden;

    .p-slider {
      width: 2px;
      height: 300px;
      margin-top: 50px;
      margin-right: 2%;
      background: var(--color-blue);

      & .p-slider-range {
        background: #dedede;
      }
      & .p-slider-handle {
        border: 2px solid var(--color-blue);
        &:hover {
          background: var(--color-blue);
        }
      }
    }

    &-desc {
      margin-top: 2vh;
      font-weight: 400;
      font-size: 16px;
      color: #989898;
    }
  }
}

.internet-shops {
  display: flex;
  flex-wrap: wrap;
  flex-basis: 96%;
  transition: transform .3s ease-in;

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
    height: 120px;
    padding-top: 10px;
    padding-bottom: 10px;

    & > img {
      max-width: 100%;
      width: auto;
      height: auto;
      max-height: 100%;
      object-fit: contain;
    }
  }
}
</style>