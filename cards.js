'use strict';

/* --------------------------- CARDS --------------------------- */

/* ------------------- SmileCard ------------------ */

// Selectors
const heartCard = gridInner.querySelector('#cardHeart');
const heartCount = gridInner.querySelector('#heartCount');

// Variables
let i = 0;

// Event Listeners
heartCard.addEventListener('click', function () {
  i++;
  heartCount.innerText = i;
});
