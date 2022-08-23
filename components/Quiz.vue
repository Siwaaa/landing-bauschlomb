<template>
  <!-- Финальный скрин квиза -->
  <section v-if="finishedQuiz" class="quiz-final container">
    <div class="header__content">
      <div class="header__info">
        <h1> PureVision<sup class="sub">®</sup> 2</h1>
        <p>Меньше неприятных сюрпризов на дороге благодаря особой форме контактных линз PureVision<sup
            class="sub">®</sup> 2 и множество приятных – в программе лояльности Bausch + Lomb FRIENDS!<sup
            class="sub">*</sup></p>
        <p>Зарегистрируйтесь, получите 250 приветственных баллов и обменяйте их на скидку 500 ₽<sup
            class="sub">**</sup>.</p>
        <div class="header__btn">
          <Button title="Получить скидку" imgRight="right_small.svg" @click.native="onModal" />
        </div>
      </div>
      <div class="quiz-final__img quiz-final__circle">
        <img src="@/assets/img/final_img.jpg" alt="">
      </div>
    </div>
    <div class="quiz-final__references">
      <p>* Друзья Бауш + Ломб<br>** Приветственные баллы начисляются в течение нескольких минут после подтверждения
        e-mail (электронной почты).</p>
    </div>
    <Modal :visible.sync="quizModal" type="reg" />
  </section>
  <section v-else class="quiz quiz-app" :class="classForBackground" :style="styleQuizBackground">
    <div class="quiz__content container">
      <div class="quiz__panel">
        <div class="app-panel">
          <!-- app-panel для вопроса -->
          <div v-if="step % 2 != 0" class="app-panel__content">
            <div class="app-panel__head">
              <p>Ситуация <span>{{ currentQuestion + 1 }}/3</span></p>
              <h3>{{ dataQuiz[currentQuestion].titleQuestion }}</h3>
            </div>
            <div class="app-panel__desc">
              <p v-html="dataQuiz[currentQuestion].descQuestion"></p>
            </div>
            <div class="app-panel__btn">
              <Button :title="dataQuiz[currentQuestion].btn.leftAnswer" color="white" @click.native="step++" />
              <Button :title="dataQuiz[currentQuestion].btn.rightAnswer" color="blue" @click.native="step++" />
            </div>
          </div>
          <!-- app-panel для ответа -->
          <div v-else class="app-panel__content" :class="'answer-' + (currentQuestion + 1)">
            <div class="app-panel__head">
              <p>Ситуация <span>{{ currentQuestion + 1 }}/3</span></p>
              <h3 v-html="dataQuiz[currentQuestion].titleAnswer"></h3>
            </div>
            <div class="app-panel__desc">
              <p v-html="dataQuiz[currentQuestion].descAnswer"></p>
            </div>
            <div class="app-panel__btn">
              <Button :title="dataQuiz[currentQuestion].btn.next" color="blue" @click.native="nextQuestion" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Quiz',
  data() {
    return {
      quizModal: false,
      currentQuestion: 0,
      step: 1,
      finishedQuiz: false,
      loadingComponent: false,
      dataQuiz: [
        {
          order: 1,
          img: '1-filter.jpg',
          imgAnswer: '1.jpg',
          titleQuestion: 'Что вы видите?',
          descQuestion: 'Это пешеход на обочине,<br> или просто дорожный знак?',
          titleAnswer: 'Это пешеход',
          descAnswer: 'Избегайте опасных ситуаций <br> на дороге и держите все под контролем с <strong>PureVision<sup class="sub">®</sup> 2</strong>',
          btn: {
            leftAnswer: 'Пешеход',
            rightAnswer: 'Знак',
            next: 'Далее'
          }
        },
        {
          order: 2,
          img: '2-filter.jpg',
          imgAnswer: '2.jpg',
          titleQuestion: 'Что вы видите?',
          descQuestion: 'Куда ведет этот <br>указатель?',
          titleAnswer: 'Вы чуть не пропустили <br> поворот на Ивановку',
          descAnswer: 'Не упустите ни одной детали на дороге с <strong>PureVision<sup class="sub">®</sup> 2</strong>',
          btn: {
            leftAnswer: 'Иваново',
            rightAnswer: 'Ивановка',
            next: 'Далее'
          }
        },
        {
          order: 3,
          img: '3-filter.jpg',
          imgAnswer: '3.jpg',
          titleQuestion: 'Что вы видите?',
          descQuestion: 'Разрешает ли светофор <br>поворот направо?',
          titleAnswer: 'Здесь можно безопасно повернуть направо',
          descAnswer: '<strong>PureVision<sup class="sub">®</sup> 2</strong> избавит вас от бликов и ореолов в условиях недостаточной освещенности, благодаря особой форме линз',
          btn: {
            leftAnswer: 'Разрешает',
            rightAnswer: 'Не разрешает',
            next: 'Далее'
          }
        },
      ]
    }
  },
  computed: {
    styleQuizBackground() {
      if (this.finishedQuiz) return false

      if (this.step % 2 == 0) {
        // если шаг четный, то даем ответ-картинку
        if (this.currentQuestion + 1 < 3) {
          // и загружаем следующий вопрос, если он не последний
          return 'background-image: url(' + require(`@/assets/img/quiz/${this.dataQuiz[this.currentQuestion].imgAnswer}`) + '), url(' + require(`@/assets/img/quiz/${this.dataQuiz[this.currentQuestion + 1].img}`) + ')'
        } else {
          return 'background-image: url(' + require(`@/assets/img/quiz/${this.dataQuiz[this.currentQuestion].imgAnswer}`) + ')'
        }
      } else {
        return 'background-image: url(' + require(`@/assets/img/quiz/${this.dataQuiz[this.currentQuestion].img}`) + '), url(' + require(`@/assets/img/quiz/${this.dataQuiz[this.currentQuestion].imgAnswer}`) + ')'
      }
    },
    classForBackground() {
      return {
        'quiz-app-3': this.currentQuestion == 2
      }
    }
  },
  methods: {
    nextQuestion() {
      if (this.finishedQuiz) {
        return true
      }
      if (this.step === 6) {
        this.finishedQuiz = true
        return true
      }
      this.step++
      this.currentQuestion++
    },
    onModal() {
      this.quizModal = true
    }
  }
}
</script>

<style lang="postcss">
.quiz-app {
  transition: background 0.8s ease-in-out;

  @media (--sm) {
    .quiz__content {
      padding-top: 0;
      padding-left: 0;
      padding-right: 0;
    }
  }

  &-3 {
    background-position: 85% !important;
  }
}

.quiz-final {
  position: relative;
  animation: app-panel-enter 1.2s forwards;

  &__img {
    width: 50%;

    @media (--lg) {
      width: 80%;
      margin-right: auto;
      margin-left: auto;
    }

    &>img {
      width: 100%;
      object-fit: contain;
    }
  }

  &__references {
    font-weight: 400;
    font-size: 11px;
    line-height: 1.6;
    color: #8A8A8A;
    padding-top: 60px;

    @media (--lg) {
      padding-top: 0;
    }

    @media (--xs) {
      font-size: 10px;
    }
  }

  &__circle {
    position: relative;

    &::after {
      content: '';
      display: inline-block;
      position: absolute;
      top: 4%;
      right: -4%;
      width: 13%;
      height: 13%;
      background: url(@/assets/img/circles/11.png) center / contain no-repeat;

      @media (--2xl) {
        right: 4%;
      }
      @media (--md) {
        max-width: 50px;
        max-height: 50px;
      }
      @media (--sm) {
        max-width: 38px;
        max-height: 38px;
      }
    }
  }
}

.app-panel {
  opacity: 0;
  animation: app-panel-enter 1.2s forwards .55s;
  animation-iteration-count: 1;
  @media (--sm) {
    width: 100%;
  }
  @media (--xs) {
    align-items: flex-start;
    justify-content: center;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    height: 500px;
    padding: 4% 2%;
    background-color: var(--color-white);
    border-radius: 50%;
    text-align: center;
    overflow: hidden;

    @media (--xl) {
      justify-content: center;
    }

    @media (--lg) {
      width: 420px;
      height: 420px;
    }
    @media (--sm) {
      position: relative;
      top: -10px;
      border-radius: 0 0 50% 50%;
    }

    @media (--xs) {
      width: 290px;
      height: 290px;
      justify-content: flex-start;
    }
  }

  &__head {
    &>p {
      font-size: 20px;
      font-weight: 400;
      text-transform: uppercase;
      color: var(--color-blue);
      margin-bottom: 15px;

      @media (--md) {
        font-size: 16px;
      }
      @media (--sm) {
        font-size: 14px;
      }

      &>span {
        font-size: 42px;

        @media (--md) {
          font-size: 33px;
        }
        @media (--sm) {
          font-size: 27px;
        }
      }
    }

    &>h3 {
      font-weight: 700;
      font-size: var(--fz-h3);
      line-height: 144%;
      text-transform: uppercase;
      color: var(--color-blue);

      .answer-2 &,
      .answer-3 & {
        font-size: 24px;

        @media (--lg) {
          font-size: 21px;
        }
        @media (--xs) {
          font-size: 17px;
        }
      }
    }

    &::after {
      content: '';
      display: inline-block;
      width: 120px;
      height: 2px;
      background-color: var(--color-blue);
      margin-top: 20px;
      margin-bottom: 20px;

      @media (--xs) {
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }
  }

  &__desc {
    margin-bottom: 50px;

    @media (--lg) {
      margin-bottom: 20px;
    }

    &>p {
      font-weight: 400;
      font-size: 20px;
      line-height: 1.45;

      @media (--lg) {
        font-size: 20px;
      }

      @media (--sm) {
        font-size: 18px;
      }

      @media (--xs) {
        font-size: 14px;
      }

      &>strong {
        font-weight: 700;
        color: var(--color-blue);
      }
    }
  }

  &__btn {
    display: flex;
    justify-content: center;
    align-items: center;

    &>.btn {
      padding: 19px 15px;

      @media (--lg) {
        padding: 16px 11px;
        font-size: 14px;
      }
      @media (--xs) {
        padding: 10px 11px;
        font-size: 12px;
      }
      &:first-child {
      margin-right: 10px;
    }
    }
  }
}

@keyframes app-panel-enter {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.lolo-enter-active,
.lolo-leave-active {
  transition: all 2.55s ease-in-out;
}

.lolo-enter {
  opacity: 0;
}

.lolo-leave-to {
  opacity: 0;
}
</style>