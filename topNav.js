'use strict';

const ddMenu = document.querySelector('#ddMenu');
const hamMenu = document.querySelector('#hamMenu');
const categoriesArrow = document.querySelector('#ddArrow');
const categoriesContainer = document.querySelector('#categories');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const logout = document.querySelector('#logout');
const hamSlide1 = document.querySelector('#hamLine1');
const hamHide = document.querySelector('#hamLine2');
const hamSlide2 = document.querySelector('#hamLine3');

hamMenu.addEventListener('click', function () {
  ddMenu.classList.toggle('show');
  hamSlide1.classList.toggle('hamSlide1');
  hamSlide2.classList.toggle('hamSlide2');
  hamHide.classList.toggle('hamHide');
});

ddArrow.addEventListener('click', function () {
  categoriesContainer.classList.toggle('opacity-1');
  about.classList.toggle('translateY-100');
  contact.classList.toggle('translateY-100');
  logout.classList.toggle('translateY-100');
  ddArrow.classList.toggle('rotate-180');
});
