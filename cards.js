'use strict';

// --------------- Grid Cards Slide-in on Scroll --------------- //

// Selectors
const allCards = document.querySelectorAll('.gridCard-universal');

// Event Listeners
window.addEventListener('scroll', checkBoxes);

// Functions
function checkBoxes() {
  const triggerScroll = (window.innerHeight / 5) * 6;

  allCards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerScroll) {
      card.classList.add('show');
    } else {
      card.classList.remove('show');
    }
  });
}

/* ------------------------------------------------------ 
  ====================== CARDS ======================
 ------------------------------------------------------ */

/* ------------------- Smile Card ------------------ */

// Selectors
const heartCard = gridInner.querySelector('#cardHeart');
const heartCount = gridInner.querySelector('#heartCount');

// Variables
let i = 0;

// Event Listeners
heartCard.addEventListener('click', function (e) {
  i++;
  heartCount.innerText = i;
  let heartCoordinatesX = e.offsetX;
  let heartCoordinatesY = e.offsetY;
  let heartPop = document.createElement('div');
  heartPop.innerHTML = `<i class="card-heart fas fa-heart"></i>`;
  heartPop.className = 'card-heart-pop';
  heartPop.style.top = heartCoordinatesY + 'px';
  heartPop.style.left = heartCoordinatesX + 'px';
  heartCard.appendChild(heartPop);
  console.log(heartCoordinatesX, heartCoordinatesY);
});
/* ------------------- Time in a Year Card ------------------ */

// Selectors
const timeInaYearCard = document.querySelector('#timeInaYear');
const timeCounters = document.querySelectorAll('.timeCounter');

// Event Listeners
timeInaYearCard.addEventListener('click', increment);

// Functions
function increment() {
  console.log('test');
  timeCounters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      const c = +counter.innerText;

      const shortIncrement = target / 400;
      const mediumIncrement = target / 700;
      const longIncrement = target / 900;
      const extraLongIncrement = target / 1000;

      if (c < target && target < 1000) {
        counter.innerText = `${Math.ceil(c + shortIncrement)}`;
        setTimeout(updateCounter, 1);
      } else if (c < target && target > 1000 && target < 10000) {
        counter.innerText = `${Math.ceil(c + mediumIncrement)}`;
        setTimeout(updateCounter, 1);
      } else if (c < target && target > 10000 && target < 1000000) {
        counter.innerText = `${Math.ceil(c + longIncrement)}`;
        setTimeout(updateCounter, 1);
      } else if (c < target && target > 1000000) {
        counter.innerText = `${Math.ceil(c + extraLongIncrement)}`;
        setTimeout(updateCounter, 1);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

//Randomizers (UNUSED)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
