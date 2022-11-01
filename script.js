'use strict';
/* --------------------------- MAIN --------------------------- */

// Main Selectors

const grid = document.querySelector('.grid');
const gridInner = document.querySelector('.grid-inner');
const cardHeader = document.querySelector('.card_header');
const headerBtn = document.querySelector('.card_header-btn');
const cardFooter = document.querySelector('.card_footer');
const founderCard = document.querySelector('.card_style1');

// Cards Array
const cardsArrayOfObjects = [
  { cardID: 'card-smile' },
  // { cardID: 'card-smile' },
  // { cardID: 'card-smile' },
  { cardID: 'card-form' },
  { cardID: 'card-form' },
  { cardID: 'card-form' },
  { cardID: 'card-form' },
  { cardID: 'card-form' },
  { cardID: 'card-form' },
  { cardID: 'card-form' },
  { cardID: 'card-form' },
];

// Assign each element of an array an ID# property
const assignIDs = function (array) {
  const array_IDs = array.slice();
  for (let i = 0; i < array_IDs.length; i++) {
    array_IDs[i].id = i + 1;
  }
  return array_IDs;
};

//Randomly create HTML for each element in array object
const loadAllCards = function (array) {
  const arrayCopy = array.slice();
  while (arrayCopy.length) {
    const random = Math.floor(Math.random() * arrayCopy.length);
    const el = arrayCopy.splice(random, 1)[0];
    let html;
    console.log(Object.keys(el));
    if (el.cardID === 'card-smile') {
      console.log('test');
      html = document.createElement('div');
      html.innerHTML = `
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
      founderCard.after(html);
    } else {
      html = document.createElement('div');
      html.innerHTML = `
      
      <div class='card_style3 gridCard-universal'>
        <div class='card_style3-contentContainer contentCard-universal'>
          <span class='cardCream-tag'>Form</span>
          <h2 class='cardCream-h2'>Contact Me</h2>
          <form action='' class='cardCream-form'>
            <label class='cardCream-form--label' for='fullName'>
              Name
            </label>
            <input
              class='cardCream-form--inputName'
              type='text'
              name='fullName'
            />
            <label class='cardCream-form--label' for='email'>
              Email
            </label>
            <input class='cardCream-form--email' type='text' name='email' />
            <label class='cardCream-form--label' for='message'>
              Message
            </label>
            <input
              class='cardCream-form--inputMessage'
              type='text'
              name='message'
            />
          </form>
          <button class='cardCream-btn'>Submit</button>
        </div>
      </div>;
      `;
      founderCard.after(html);
    }
  }
};

//!DISPLAY CARDS RANDOMLY ON PAGE
loadAllCards(cardsArrayOfObjects);

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

//Randomizers (UNUSED)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
