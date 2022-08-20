<template>
  <section class="quiz">
    <div class="quiz__content container">
      <div class="quiz__panel">
        <div class="control-panel">
          <div class="control-panel__content">
            <div class="control-panel__head">
              <h3>Дорога без <br> сюрпризов</h3>
            </div>
            <div class="control-panel__desc">
              <p>Узнайте в каких ситуациях на дороге <strong>PureVision® 2</strong> могут вам помочь. </p>
            </div>
            <div class="control-panel__btn">
              <Button title="Где купить" color="blue" imgRight="right_m.svg"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Button from '@/components/Button.vue';
export default {
  name: "QuizBlock",
  components: {Button}
}
</script>
<style lang="postcss">
.quiz {
  background: url(@/assets/img/061@2x.jpg) center / cover no-repeat;
  max-width: 1600px;
  margin-right: auto;
  margin-left: auto;

  &__content {
    height: 1000px;
    padding-top: var(--container-padding-h);
    padding-bottom: var(--container-padding-h);
  }
}

.control-panel {
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
  }

  &__head {
    & > h3 {
      font-weight: 700;
      font-size: var(--fz-h3);
      line-height: 144%;
      text-transform: uppercase;
      color: var(--color-blue);
    }
    &::after {
      content: '';
      display: block;
      width: 120px;
      height: 2px;
      background-color: var(--color-blue);
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
  &__desc {
    margin-bottom: 20px;
    & > p {
      font-weight: 400;
      font-size: 20px;
      line-height: 1.45;
      & > strong {
        font-weight: 700;
        color: var(--color-blue);
      }
    }
  }
}
</style>