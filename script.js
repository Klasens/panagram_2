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
  { cardID: 'card-form' },
  { cardID: 'card-shapeContainer' },
  { cardID: 'card-theWatchers' },
  { cardID: 'card-MITM' },
  { cardID: 'card-andToday' },
  // { cardID: 'card-form' },
  // { cardID: 'card-form' },
  // { cardID: 'card-form' },
  // { cardID: 'card-form' },
  // { cardID: 'card-form' },
  // { cardID: 'card-form' },
];

// Assign each element of an array an ID# property
const assignIDs = function (array) {
  const array_IDs = array.slice();
  for (let i = 0; i < array_IDs.length; i++) {
    array_IDs[i].id = i + 1;
  }
  return array_IDs;
};

/* --------------------------- EXTREMELY LONG IF STATEMENT --------------------------- */
//Randomly create HTML for each element in array object
const loadAllCards = function (array) {
  const arrayCopy = array.slice();
  while (arrayCopy.length) {
    const random = Math.floor(Math.random() * arrayCopy.length);
    const el = arrayCopy.splice(random, 1)[0];
    let html;
    console.log(Object.keys(el));
    /* ------------- CARD SMILE ------------- */
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
      /* ------------- CARD FORM ------------- */
    } else if (el.cardID === 'card-form') {
      html = document.createElement('div');
      html.innerHTML = `
      
      <div class='card_style3 gridCard-universal'>
        <div class='card_style3-contentContainer contentCard-universal'>
          <span class='cardCream-tag cardCream-tag--form'>Form</span>
          <h2 class='cardCream-h2'>Contact Me</h2>
          <form action='' class='card-form'>
            <label class='card-form--label' for='fullName'>
              Name
            </label>
            <input
              class='card-form--inputName'
              type='text'
              name='fullName'
            />
            <label class='card-form--label' for='email'>
              Email
            </label>
            <input class='card-form--email' type='text' name='email' />
            <label class='card-form--label' for='message'>
              Message
            </label>
            <textarea
              class='card-form--inputMessage'
              type='text'
              name='message'
            ></textarea>
          </form>
          <button class='cardCream-btn'>Submit</button>
        </div>
      </div>;
      `;
      founderCard.after(html);
      /* ------------- CARD SHAPECONTAINER ------------- */
    } else if (el.cardID === 'card-shapeContainer') {
      html = document.createElement('div');
      html.innerHTML = `
        <div class="card_style4 gridCard-universal">
          <div class="card_style4-contentContainer contentCard-universal">
            <div class="card-shapeContainer">
              <div class="card-square square-one"></div>
              <div class="card-circle circle"></div>
              <div class="card-square square-two"></div>
            </div>
            <h2 class="cardCream-h2">Time In a Year:</h2>
            <div class="cardCream-wrapper">
              <p class="cardCream-text card-timerDays">365 days</p>
              <p class="cardCream-text card-timerHours">8,760 hours</p>
              <p class="cardCream-text card-timerMinutes">525,600 minutes</p>
              <p class="cardCream-text card-timerSeconds">31,536,000 seconds</p>
            </div>
          </div>
        </div>
      `;
      founderCard.after(html);
    } else if (el.cardID === 'card-theWatchers') {
      html = document.createElement('div');
      html.innerHTML = `
        <div class="card_style5 gridCard-universal">
          <div class="card_style5-contentContainer contentCard-universal">
            <span class="cardChocolate-tag cardChocolate-tag--nonfiction">
              Creative Non-Fiction
            </span>
            <h2 class="cardChocolate-h2">The Watchers</h2>
            <p class="cardChocolate-text">
              "Usually I just sit on the bus having conversations with
              myself..."
            </p>
            <btn class="cardChocolate-btn">Read Now</btn>
          </div>
        </div>
      `;
      founderCard.after(html);
    } else if (el.cardID === 'card-andToday') {
      html = document.createElement('div');
      html.innerHTML = `
        <div class="card_style5 gridCard-universal">
          <div class="card_style5-contentContainer contentCard-universal">
            <span class="cardChocolate-tag cardChocolate-tag--nonfiction">
              Creative Non-Fiction
            </span>
            <h2 class="cardChocolate-h2">And, Today</h2>
            <p class="cardChocolate-text">
              "And, today I wake up with the thought, "This could be the final
              morning..."
            </p>
            <btn class="cardChocolate-btn">Read Now</btn>
          </div>
        </div>
      `;
      founderCard.after(html);
    } else if (el.cardID === 'card-MITM') {
      html = document.createElement('div');
      html.innerHTML = `
        <div class="card_style6 gridCard-universal">
          <div class="card_style6-contentContainer contentCard-universal">
            <span class="cardChocolate-tag cardChocolate-tag--fiction">
              Fiction
            </span>
            <h2 class="cardChocolate-h2">Mirror In the Mirror</h2>
            <p class="cardChocolate-text">
              "As I wake up I feel a pulsing in my foot. There's this slight
              pulling in the tendon that produces discomfort but not pain..."
            </p>
            <btn class="cardChocolate-btn">Read Now</btn>
          </div>
        </div>
      `;
      founderCard.after(html);
    }
  }
};

//!DISPLAY CARDS RANDOMLY ON PAGE
loadAllCards(cardsArrayOfObjects);

//Randomizers (UNUSED)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
