<template>
  <div class="error container">
    <h1 v-if="error.statusCode === 404">Страница не найдена</h1>
    <h1 v-else>Хм.. Что-то пошло не так</h1>
    <br>
    <NuxtLink to="/">Вернуться на главную</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>

<style lang="postcss">
.error {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>