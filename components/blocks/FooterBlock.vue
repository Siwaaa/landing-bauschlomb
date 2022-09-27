<template>
  <footer class="footer">
    <div class="footer__content container">
      <div class="footer__social"> 
        <a class="footer__social-item" href="https://vk.com/bauschlombrussia
" target="_blank"
          rel="noopener noreferrer">
          <!-- <div v-html="vkLogo" /> -->
          <!-- <img src="@/assets/img/social/vk.svg" alt="vk" /> -->
        </a>
        <a class="footer__social-item"
          href="https://www.youtube.com/channel/UCW0eiUyn0eKe219srDRpI-Q/videos" target="_blank" rel="noopener noreferrer">
          <!-- <div v-html="youtubeLogo" /> -->
          <!-- <img src="@/assets/img/social/youtube.svg" alt="youtube" /> -->
        </a>
      </div>
      <div class="footer__references">
        <p>© BAUSCH & LOMB INCORPORATED. Вся информация и материалы, размещенные на этом сайте, предназначены
          исключительно для физических и юридических лиц из России, если не указано иное.</p>
        <p><sup class="sub">*</sup>Эффект гало
          <br>
          1. Стеффен Р., Мерчеа М., Ра М., Рейндел У. Клинические свойства силикон-гидрогелевых контактных линз из материала самфилкон А //Вестник Оптометрии, – 2017. –  № 1. – С. 18–25.
          <br>
          2. Денайер Г. Контактные линзы Bausch+ Lomb ULTRA с технологией MoistureSeal. Поднимая свойства и дизайн контактных линз на новый уровень для лучших в своем классе клинических характеристик //Современная оптометрия. – 2017. – №. 3. – С. 3–6.
        </p>
        <p>
          Bausch+Lomb ULTRA® — Медицинское изделие. Рег. Уд. №РЗН 2016/3720 от 01.04.2020. Линзы контактные мягкие Bausch+Lomb ULTRA® (самфилкон A (samfilcon A)).
          <br>
          ReNu MultiPlus — Медицинское изделие. Рег. Уд. № ФСЗ 2007/00771 от 11.06.2021 г. Раствор универсальный стерильный по уходу за мягкими контактными линзами Реню МультиПлюс (ReNu MultiPlus) с контейнером для хранения контактных линз.
          <br>
          Biotrue® — Медицинское изделие. Рег. Уд. № ФСЗ 2011/08903 от 19.10.2018 г. Раствор универсальный «Биотру» (Biotrue®) по уходу за мягкими контактными линзами во флаконах, в комплекте с контейнером для хранения контактных линз и без контейнера.
        </p>
        <p>BAUSCH.RU РЕКЛАМА</p>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'FooterBlock',
}
</script>

<style lang="postcss">
.footer {
  background-color: #F8F8F8;

  &__content {
    padding-top: calc(.5*var(--container-padding-h));
    padding-bottom: calc(.5*var(--container-padding-h));
    margin-bottom: var(--med-h);
    @media (--xs) {
      display: flex;
      flex-direction: column-reverse;
      padding-top: 0;
    }
  }
  &__social {
    display: flex;
    align-items: center;
    float: right;
    margin-left: 20px;
    @media (--xs) {
      float: none;
      margin-left: auto;
      margin-right: auto;
      margin-top: 10px;
    }

    &-item {
      display: block;
      width: 49px;
      height: 49px;
      background: url(@/assets/img/social/youtube.svg) center / contain no-repeat;
      transition: background .4s ease-in-out;
      &:hover {
        background-image: url(@/assets/img/social/youtube-hover.svg);
      }

      &:first-child {
        margin-right: 15px;
        background: url(@/assets/img/social/vk.svg) center / contain no-repeat;
        &:hover {
          background-image: url(@/assets/img/social/vk-hover.svg);
        }
      }
      & > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  & p {
    font-weight: 400;
    font-size: 11px;
    line-height: 1.6;
    color: #8A8A8A;
    margin-top: 15px;

    @media (--xs) {
      font-size: 10px;
    }
  }
}
</style>