import { toggelMenuMobile, closeMenu } from "./blocks/nav/burger.js";

const radiosFilter = document.querySelectorAll('input[type=radio][name="filter"]');

document.addEventListener("DOMContentLoaded", startedCheck);
window.addEventListener('resize', () => { fixVH() });

/*
* Проверка выбранного пункта меню
* при первоначальной загрузке.
*
*/
function startedCheck() {
  replaceImgForLazy()
  toggelMenuMobile()
  checkedFilter()
  fixVH()
}

function replaceImgForLazy() {
  const lazyloadImages = document.querySelectorAll(".projects__item img[data-src]");
  lazyloadImages.forEach(function (img) {
    const reg = img.nextSibling.textContent.split(/"([^"]*)"/g);
    img.dataset.src = reg[1];
  });
}
function checkedFilter() {
  // запустить спинер пока не отрисуется swiper
  radiosFilter.forEach(e => {
    if (e.checked) {
      currentProjectID = e.value
      currentSwiperProjects = initSwiperProjects(e.value)
      // завершить спинер
    }
  })
}
function fixVH() {
  // Решение проблемы с высотой моб браузеров
  // with css: height = calc(var(--vh, 1vh) * 100);
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}