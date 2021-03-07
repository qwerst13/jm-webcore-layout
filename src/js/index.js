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
    e.target.parentElement.querySelector('.swiper-wrapper').classList.toggle('swiper-wrapper--full');
    e.target.classList.toggle('about__expand--expanded');
    if (e.target.parentElement.querySelector('.swiper-wrapper').classList.contains('swiper-wrapper--full')){
      e.target.innerHTML='Скрыть';
    } else {
      e.target.innerHTML='Показать все';
    }
  });
});

document.querySelector('.about .about__expand').addEventListener('click',(e)=>{
   document.querySelector('.about__text').classList.toggle('about__text--full');
    e.target.classList.toggle('about__expand--expanded');
    if (e.target.parentElement.querySelector('.about__text').classList.contains('about__text--full')){
      e.target.innerHTML='Скрыть';
    } else {
      e.target.innerHTML='Читать далее';
    }
  });



let menu = document.querySelector('.menu'),
    overlay = document.querySelector('.overlay');


// show/hide menu
document.querySelector('.button--menu').addEventListener('click', openMenu);
document.querySelector('.button--close').addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);


//menu-items
document.querySelectorAll('.menu__item').forEach((item)=>{
  item.addEventListener('click', (e)=>{
    document.querySelector('.menu__item--current').classList.remove('menu__item--current');
    e.currentTarget.classList.add('menu__item--current');
  });
});

//slide-menu-items
document.querySelectorAll('.slide-menu__item').forEach((item)=>{
  item.addEventListener('click', (e)=>{
    document.querySelector('.slide-menu__item--current').classList.remove('slide-menu__item--current');
    e.currentTarget.classList.add('slide-menu__item--current');
  });
});




function openMenu() {
  menu.classList.add('menu--visible');
  overlay.classList.add('overlay--on');
}
function closeMenu() {
  menu.classList.remove('menu--visible');
  overlay.classList.remove('overlay--on');
}
