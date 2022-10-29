'use strict';
/* --------------------------- MAIN --------------------------- */

// Main Selectors

const grid = document.querySelector('.grid');
const cardHeader = document.querySelector('.card_header');
const headerBtn = document.querySelector('.card_header-btn');
const cardFooter = document.querySelector('.card_footer');
const cardStyle1 = document.querySelector('.card_style1');

const cardsArrayOfObjects = [
  { header: 'header-1', text: 'string of text 1', btn: 'Contact' },
  { header: 'header-2', text: 'string of text 2', btn: 'Check' },
  { header: 'header-3', text: 'string of text 3', btn: 'Send' },
  { header: 'header-4', text: 'string of text 4', btn: 'Call' },
  { h2: ':) Click and Smile', cardID: 'card-smile' },
];

const testBtn = headerBtn.addEventListener('click', function () {
  console.log('teset');
  cardStyle2.innerHTML = 'test';
});
//Assigns each card an ID and displays it in random order
const loadAllCards = function (array) {
  console.log(array);
  const arrayCopy = array.slice();
  for (let i = 0; i < arrayCopy.length; i++) {
    arrayCopy[i].id = i + 1;
  }
  while (arrayCopy.length) {
    const random = Math.floor(Math.random() * arrayCopy.length);
    const el = arrayCopy.splice(random, 1)[0];
    let html;
    console.log(Object.keys(el));
    if (el.hasOwnProperty('cardID')) {
      console.log('test');
      html = `
        <div class="card_style2 gridCard-universal" id="cardHeart">
          <div class="card_style2-contentContainer contentCard-universal">
            <h2 class="card-heart-h2">
              :) Click and Smile
              <i class="card-heart fas fa-heart"></i>
              <span class="card-heartLikeCount" id="heartCount">0</span>
            </h2>
          </div>
        </div>
  `;
      cardStyle1.insertAdjacentHTML('afterend', html);
    }
  }
};

/* --------------------------- CARDS --------------------------- */

/* ------------------- Smile ------------------ */

// Selectors
const heartCard = document.querySelector('#cardHeart');
const heartCount = document.getElementById('heartCount');

// Variables
let i = 0;

// Event Listeners
heartCard.addEventListener('click', function () {
  i++;
  heartCount.innerText = i;
});

//Randomizers
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

loadAllCards(cardsArrayOfObjects);
