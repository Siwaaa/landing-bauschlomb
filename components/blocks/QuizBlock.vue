<template>
  <transition name="quiz" mode="out-in">
    <!-- Блок квиза -->
    <Quiz v-if="startedQuiz" />
    <!-- Конец блока квиза -->
    <section v-else id="quiz" class="quiz quiz-main" key="s3">
      <div class="quiz__content container">
        <div class="quiz__panel">
          <div class="control-panel">
            <div class="control-panel__content">
              <div class="control-panel__head">
                <h3>Дорога без <br> сюрпризов</h3>
              </div>
              <div class="control-panel__desc">
                <p>Узнайте в каких ситуациях <br> на дороге <strong>Bausch+Lomb ULTRA<sup class="sub">®</sup></strong> <br> могут вам помочь. </p>
              </div>
              <div class="control-panel__btn">
                <Button title="Поехали" color="blue" imgRight="right_m.svg" @click.native="startQuiz" />
              </div>
            </div>
          </div>
        </div>
        <div class="quiz__btn">
          <Button title="Получить скидку" size="s" imgLeft="surprise.svg" imgRight="right_small.svg"
            @click.native="redirectToTarget" />
        </div>
      </div>
      <!-- <Modal :visible.sync="quizModal" :type="typeModal" /> -->
    </section>
  </transition>

</template>

<script>
import Button from '@/components/Button.vue';
import Modal from '@/components/Modal.vue';

export default {
  name: "QuizBlock",
  components: { Button, Modal },
  data() {
    return {
      quizModal: false,
      typeModal: 'reg',
      startedQuiz: false
    }
  },
  methods: {
    onModal() {
      this.quizModal = true
    },
    startQuiz() {
      this.startedQuiz = true; 
      gtag('event', 'send', {'event_category': 'Button', 'event_action': 'Test started'});
      ym(90600398,'reachGoal','test_started_button');
    },
    redirectToTarget() {
      if (process.client) {
        gtag('event', 'send', {'event_category': 'Button', 'event_action': ' Get a discount (no surprises)'});
        ym(90600398,'reachGoal','get_a_discount_no_surprises_button');
        
        window.open('https://ultralinzi.ru/friend/registration/?utm_source=ultra')
      }
    },
  },
  mounted() {
  },
}
</script>

<style lang="postcss">
.quiz {
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  max-width: 1600px;
  margin-right: auto;
  margin-left: auto;

  &-main {
    background-image: url(@/assets/img/061.jpg);
    @media (min-resolution: 2dppx) {
      background-image: url("@/assets/img/061@2x.jpg");
    }
  }

  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 7%;
    left: 2%;
    width: 3%;
    height: 9%;
    background: url(@/assets/img/circles/22.png) center / contain no-repeat;
    @media (--md) {
      min-width: 21px;
      min-height: 52px;
    }
  }

  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 4%;
    right: 2%;
    width: 6%;
    height: 9%;
    background: url(@/assets/img/circles/21.png) center / contain no-repeat;
    @media (--md) {
      min-width: 50px;
      min-height: 50px;
    }
    @media (--xs) {
      display: none;
    }
  }

  @media (--xl) {
    background-position: bottom right;
  }

  &__content {
    position: relative;
    height: 860px;
    padding-top: var(--container-padding-h);
    padding-bottom: var(--container-padding-h);

    @media (--2xl) {
      min-height: 568px;
      max-height: 800px;
      height: 84vh;
    }

    @media (--xs) {
      height: 568px;
    }
  }

  &__panel {
    @media (--xs) {
      height: 100%;
    }
  }

  &__btn {
    position: absolute;
    right: 6%;
    bottom: 8%;

    @media (--md) {
      display: none;
    }

    &>.btn-white {
      border: var(--btn-border) solid transparent !important;
    }
  }
}

.quiz-enter-active,
.quiz-leave-active {
  transition: all .55s ease-in-out;
}

.quiz-enter {
  opacity: 0;
  transform: translateY(-20%);
}

.quiz-leave-to {
  opacity: 0;
}

.control-panel {
  @media (--sm) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (--xs) {
    height: 100%;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 500px;
    padding: 4% 2%;
    background-color: var(--color-white);
    border-radius: 50%;
    text-align: center;
    overflow: hidden;

    @media (--2xl) {
      width: 460px;
      height: 460px;
    }
    @media (--lg) {
      width: 420px;
      height: 420px;
    }

    @media (--xs) {
      width: 290px;
      height: 290px;
    }
  }

  &__head {
    &>h3 {
      font-weight: 700;
      font-size: var(--fz-h3);
      line-height: 144%;
      text-transform: uppercase;
      color: var(--color-blue);
    }

    &::after {
      content: '';
      display: inline-block;
      width: 120px;
      height: 2px;
      background-color: var(--color-blue);
      margin-top: 20px;
      margin-bottom: 20px;

      @media (--2xl) {
        margin-top: 15px;
        margin-bottom: 15px;
      }
      @media (--xs) {
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }
  }

  &__desc {
    margin-bottom: 20px;

    &>p {
      font-weight: 400;
      font-size: 20px;
      line-height: 1.45;

      @media (--2xl) {
        font-size: 18px;
      }

      @media (--sm) {
        font-size: 16px;
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
}
</style>