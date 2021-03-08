// import Swiper JS
import Swiper from 'swiper/bundle';
// import Swiper styles

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
    overlay = document.querySelector('.overlay'),
    body = document.querySelector('.body'),
    modalFeedback = document.querySelector('.modal--feedback'),
    modalCall = document.querySelector('.modal--call');

// show/hide menu/modal
document.querySelector('.button--menu').addEventListener('click', openMenu);
document.querySelectorAll('.button--close').forEach((item)=>{
  item.addEventListener('click', closeActive);
});
overlay.addEventListener('click', closeActive);

//modal-call
document.querySelectorAll('.button--icon-call').forEach((item)=>{
  item.addEventListener('click',function () {
    if (window.innerWidth>1366) {
      modalCall.style.top = window.pageYOffset+'px';
    }
    modalCall.classList.add('modal--visible');
    overlay.classList.add('overlay--on');
    body.classList.add('body--no-scroll');
  })
});

//modal-feedback
document.querySelectorAll('.button--icon-chat').forEach((item)=>{
  item.addEventListener('click',function () {
    if (window.innerWidth>1366) {
      modalFeedback.style.top = window.pageYOffset+'px';
    }
    modalFeedback.classList.add('modal--visible');
    overlay.classList.add('overlay--on');
    body.classList.add('body--no-scroll');
  })
});


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
  body.classList.add('body--no-scroll');
}
function closeActive() {
  menu.classList.remove('menu--visible');
  modalCall.classList.remove('modal--visible');
  modalFeedback.classList.remove('modal--visible');
  overlay.classList.remove('overlay--on');
  body.classList.remove('body--no-scroll');
}
