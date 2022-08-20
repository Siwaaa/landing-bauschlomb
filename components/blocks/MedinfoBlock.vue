<template>
  <div class="medinfo" v-show="showMed">
    <div class="medinfo__content">
      <p ref="medinfo__text">ИМЕЮТСЯ ПРОТИВОПОКАЗАНИЯ, НЕОБХОДИМО ПРОКОНСУЛЬТИРОВАТЬСЯ СО СПЕЦИАЛИСТОМ</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Medinfo',
  data() {
    return { 
      showMed: false, 
    }
  },
  methods: {
    resizeMedInfo() {
      if (process.client) {
        let perpx = document.documentElement.clientWidth > 1440 ? 4545 : 3207;
        let ratio = document.documentElement.clientWidth / perpx;
        console.log(ratio);
        this.$refs.medinfo__text.style.transform = `scale( ${ratio}, 1.1 )`
      }
    }
  },
  mounted() {
    this.showMed = true
    this.resizeMedInfo()
    window.addEventListener("resize", this.resizeMedInfo);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeMedInfo);
  },
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

  &__content {
    height: var(--med-h);
    padding: 0 10px;
    overflow: hidden;

    @media (--2xl) {
      --med-h: 60px;
    }

    &>p {
      display: block;
      width: 100%;
      font-size: var(--med-h);
      white-space: nowrap;
      line-height: 1;
      /* transform: scale(.3, 1.1); */
      transform-origin: left;
    }
  }
}
</style>