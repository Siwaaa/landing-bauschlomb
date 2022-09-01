<template>
  <footer class="footer">
    <div class="footer__content container">
      <div class="footer__social"> 
        <a class="footer__social-item" href="#" target="_blank"
          rel="noopener noreferrer">
          <!-- <div v-html="vkLogo" /> -->
          <!-- <img src="@/assets/img/social/vk.svg" alt="vk" /> -->
        </a>
        <a class="footer__social-item"
          href="#" target="_blank" rel="noopener noreferrer">
          <!-- <div v-html="youtubeLogo" /> -->
          <!-- <img src="@/assets/img/social/youtube.svg" alt="youtube" /> -->
        </a>
      </div>
      <div class="footer__references">
        <p>© BAUSCH & LOMB INCORPORATED. Вся информация и материалы, размещенные на этом сайте, предназначены
          исключительно для физических и юридических лиц из России, если не указано иное.</p>
        <p>
          1. Koh S., Maeda N., Hamad T., Nishida K. Efficacy of spherical aberration correction based on contact lens
          power, Contact Lens& Anterior Eye, 2014, № 37б с. 273−277.
          <br>
          2. Turhan, S., & Toker, E. (2015). Optical coherence tomography to evaluate the interaction of different edge
          designs of four different silicone hydrogel lenses with the ocular surface. Clinical Ophthalmology, 935.
          <br>
          3. Brennan, N. A., Coles, M. L. C., Comstock, T. L., & Levy, B. (2002). A 1-year prospective clinical trial of
          balafilcon a (purevision) silicone-hydrogel contact lenses used on a 30-day continuous wear schedule.
          Ophthalmology, 109(6), 1172−1177.
          © BAUSCH & LOMB INCORPORATED. Вся информация и материалы, размещенные на этом сайте, предназначены исключительно для физических и юридических лиц из России, если не указано иное.
        </p>
        <p>
          Bausch+Lomb PureVision 2 — Медицинское изделие. Рег. Уд. № ФСЗ 2011/09 600 от 01.04.2020 г. Линзы контактные мягкие для коррекции зрения Bausch+Lomb PureVision 2 (balafilcon A)
          <br>
          ReNu MultiPlus — Медицинское изделие. Рег. Уд. № ФСЗ 2007/00771 от 11.06.2021 г. Раствор универсальный
          стерильный по уходу за мягкими контактными линзами Реню МультиПлюс (ReNu MultiPlus) с контейнером для хранения
          контактных линз.
          <br>
          Biotrue® — Медицинское изделие. Рег. Уд. № ФСЗ 2011/08903 от 19.10.2018 г. Раствор универсальный «Биотру»
          (Biotrue®) по уходу за мягкими контактными линзами во флаконах, в комплекте с контейнером для хранения
          контактных линз и без контейнера.
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