'use strict';

//====== SELECTORS ======
//----- MENUS
const hamMenu = document.querySelector('#hamMenu');
const sideMenu = document.querySelector('#sideMenu');
const hamSlide1 = document.querySelector('#hamLine1');
const hamHide = document.querySelector('#hamLine2');
const hamSlide2 = document.querySelector('#hamLine3');

//----- ARROWS
const ddArrowNonfiction_long = document.querySelector(
  '#ddArrow-nonfiction-long'
);
const ddArrowNonfiction_short = document.querySelector(
  '#ddArrow-nonfiction-short'
);
const ddArrowShortStories = document.querySelector('#ddArrow-shortStories');
const ddArrowAphorisms = document.querySelector('#ddArrow-aphorisms');
const ddArrowArticles = document.querySelector('#ddArrow-articles');
//----- LISTS
const nonfictionList_long = document.querySelector('#list-nonfiction-long');
const nonfictionList_short = document.querySelector('#list-nonfiction-short');
const shortStoriesList = document.querySelector('#list-shortStories');
const aphorismsList = document.querySelector('#list-aphorisms');
const articlesList = document.querySelector('#list-articles');
//----- CATEGORIES
const nonfiction_long = document.querySelector('#nonfiction-long');
const nonfiction_short = document.querySelector('#nonfiction-short');
const articles = document.querySelector('#articles');
const shortStories = document.querySelector('#shortStories');
const aphorisms = document.querySelector('#aphorisms');

//FUNCTIONS
const showSideMenu = function () {
  sideMenu.classList.toggle('show');
  hamSlide1.classList.toggle('hamSlide1');
  hamSlide2.classList.toggle('hamSlide2');
  hamHide.classList.toggle('hamHide');
};

const showNonfictionList_long = function () {
  nonfictionList_long.classList.toggle('opacity-1');
  nonfiction_short.classList.toggle('translateY-550');
  articles.classList.toggle('translateY-550');
  aphorisms.classList.toggle('translateY-550');
  ddArrowNonfiction_long.classList.toggle('rotate-180');
};

const showShortStoriesList = function () {
  shortStoriesList.classList.toggle('opacity-1');
  nonfiction_long.classList.toggle('translateY-100');
  nonfiction_short.classList.toggle('translateY-100');
  articles.classList.toggle('translateY-100');
  aphorisms.classList.toggle('translateY-100');
  ddArrowShortStories.classList.toggle('rotate-180');
};

const showAphorismsList = function () {
  aphorismsList.classList.toggle('opacity-1');
  nonfiction_short.classList.toggle('translateY-1600');
  articles.classList.toggle('translateY-1600');
  ddArrowAphorisms.classList.toggle('rotate-180');
  sideMenu.classList.toggle('height-125vh');
};

const showNonfictionList_short = function () {
  nonfictionList_short.classList.toggle('opacity-1');
  articles.classList.toggle('translateY-800');
  ddArrowNonfiction_short.classList.toggle('rotate-180');
};
const showArticlesList = function () {
  articlesList.classList.toggle('opacity-1');
  ddArrowArticles.classList.toggle('rotate-180');
};
//EVENT LISTNERS
hamMenu.addEventListener('click', showSideMenu);

ddArrowNonfiction_long.addEventListener('click', showNonfictionList_long);
ddArrowNonfiction_short.addEventListener('click', showNonfictionList_short);
ddArrowShortStories.addEventListener('click', showShortStoriesList);
ddArrowAphorisms.addEventListener('click', showAphorismsList);
ddArrowArticles.addEventListener('click', showArticlesList);
