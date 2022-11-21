'use strict';

const scrollBtn = document.querySelector('.title-btn');
const scrollContent = document.querySelector('.chapter-content');

document.addEventListener('click', function (e) {
  e.preventDefault();
  scrollContent.scrollIntoView({ behavior: 'smooth' });
});
