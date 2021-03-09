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
  swiper.destroy(false, true);// if 2-nd arg - true, swiper-styles would be disabled
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
   document.querySelector('.about__description').classList.toggle('about__description--full');
    e.target.classList.toggle('about__expand--expanded');
    if (document.querySelector('.about__description').classList.contains('about__description--full')){
      e.target.innerHTML='Скрыть';
    } else {
      e.target.innerHTML='Читать далее';
    }
  });

//Smooth scroll to anchors
const anchors = document.querySelectorAll('a[href*="#"]:not(a[href$="#"])');//not - ignore only "#" without names
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

//event listeners
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
  item.addEventListener('click', ()=>{
    if (window.innerWidth>1366) {
      modalCall.style.top = window.pageYOffset+'px';
    }
    modalCall.classList.add('modal--visible');
    overlay.style['z-index']='25';
    overlay.classList.add('overlay--on');
    body.classList.add('body--no-scroll');
  })
});

//modal-feedback
document.querySelectorAll('.button--icon-chat').forEach((item)=>{
  item.addEventListener('click', ()=>{
    if (window.innerWidth>1366) {
      modalFeedback.style.top = window.pageYOffset+'px';
    }
    modalFeedback.classList.add('modal--visible');
    overlay.style['z-index']='25';
    overlay.classList.add('overlay--on');
    body.classList.add('body--no-scroll');
  })
});

//modal-order action
document.querySelectorAll('.modal form').forEach((item)=>{
  item.addEventListener('submit', (e)=>{

    e.preventDefault();
    let message = '',
    form = e.target;

    for (let i=0; i<form.elements.length-1; i++){
      message += `${form.elements[i].name}: ${form.elements[i].value}\n`;
    }

    alert(message);


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


//functions
function openMenu() {
  menu.classList.add('menu--visible');
  overlay.classList.add('overlay--on');
  body.classList.add('body--no-scroll');
}
function closeActive() {
  menu.classList.remove('menu--visible');
  modalCall.classList.remove('modal--visible');
  modalFeedback.classList.remove('modal--visible');
  overlay.style['z-index']='10';
  overlay.classList.remove('overlay--on');
  body.classList.remove('body--no-scroll');
}
