// import Swiper JS
import Swiper from 'swiper/bundle';
// import Swiper styles
import 'swiper/swiper.scss';

import '../scss/style.scss';

// core version + navigation, pagination modules:
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

// configure Swiper to use modules
SwiperCore.use(Navigation, Pagination);

//init swiper only on mobile devices
if (window.innerWidth<768) {
  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    /*loop: true,*/
    slidesPerView: 'auto',
    spaceBetween: 16,
    // Pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
}

/* if resize need
if (window.innerWidth>768) {
  swiper.destroy(false,true);// если 2-й аргумент true, обнуляются пользовательские стили
}
*/

// show/hide functionality on swiper elements
document.querySelectorAll('.swiper-container>.about__expand').forEach((item)=>{
  item.addEventListener('click',(e)=>{
    console.log(e.target);
    e.target.parentElement.querySelector('.swiper-wrapper').classList.toggle('swiper-wrapper--full');
    e.target.classList.toggle('about__expand--expanded');
    if (e.target.parentElement.querySelector('.swiper-wrapper').classList.contains('swiper-wrapper--full')){
      e.target.innerHTML='Скрыть';
    } else {
      e.target.innerHTML='Показать все';
    }
  });
});

// show/hide menu
document.querySelector('.button--menu').addEventListener('click',()=>{
  document.querySelector('.menu').classList.add('menu--visible');
});
document.querySelector('.button--close').addEventListener('click',()=>{
  document.querySelector('.menu').classList.remove('menu--visible');
});
