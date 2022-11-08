'use strict';
/* --------------------------- MAIN --------------------------- */

// Main Selectors

const grid = document.querySelector('.grid');
const gridInner = document.querySelector('.grid-inner');
const cardHeader = document.querySelector('.card_header');
const headerBtn = document.querySelector('.card_header-btn');
const cardFooter = document.querySelector('.card_footer');
const founderCard = document.querySelector('#cardFounder');
const formCard = document.querySelector('#cardForm');
const smileCard = document.querySelector('.card_style2');
// Cards Array
const cardsArrayOfObjects = [
  // { cardID: 'card-smile' },
  // { cardID: 'card-form' },
  { cardID: 'card-shapeContainer' },
  { cardID: 'card-theWatchers' },
  { cardID: 'card-MITM' },
  { cardID: 'card-andToday' },
  { cardID: 'card-baysideRecovery' },
  { cardID: 'card-samBodhiJazz' },
  { cardID: 'card-activityTracker' },

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

/* --------------------------- DREADFULLY LONG IF STATEMENT --------------------------- */
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
      html = document.createElement(`div`);
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
            <div
              class="card_style4-contentContainer contentCard-universal"
              id="timeInaYear"
            >
              <span class='cardCream-tag cardCream-tag--timeInYear'>Widget</span>
              <div class="card-shapeContainer">
                <div class="card-square-left square-one"></div>
                <div class="card-square-left square-three"></div>
                <div class="card-circle circle-one"></div>
                <div class="card-circle circle-two"></div>
                <div class="card-circle circle-three"></div>
                <div class="card-circle circle-four"></div>
                <div class="card-square-right square-two"></div>
                <div class="card-square-right square-four"></div>
              </div>
              <h2 class="cardCream-h2">Time In a Year:</h2>
              <div class="cardCream-wrapper">
                <div class="cardCream-text">
                  <span
                    class="cardCream-text timeCounter"
                    data-target="365"
                  ></span>
                  <span class="cardCream-text">days</span>
                </div>
                <div class="cardCream-text">
                  <span
                    class="cardCream-text timeCounter"
                    data-target="8760"
                  ></span>
                  <span class="cardCream-text">hours</span>
                </div>
                <div class="cardCream-text">
                  <span
                    class="cardCream-text timeCounter"
                    data-target="525600"
                  ></span>
                  <span class="cardCream-text">minutes</span>
                </div>
                <div class="cardCream-text">
                  <span
                    class="cardCream-text timeCounter"
                    data-target="31536000"
                  ></span>
                  <span class="cardCream-text">seconds</span>
                </div>
              </div>
            </div>
      `;
      formCard.after(html);
      /* ------------- CARD THE WATCHERS ------------- */
    } else if (el.cardID === 'card-theWatchers') {
      html = document.createElement('div');
      html.innerHTML = `
        <div class="card_style5 gridCard-universal">
          <div class="designLine-right borderColorYellow"></div>
          <div class="designLine-left borderColorYellow"></div>
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
      /* ------------- CARD AND, TODAY  ------------- */
    } else if (el.cardID === 'card-andToday') {
      html = document.createElement('div');
      html.innerHTML = `
        <div class="card_style5 gridCard-universal">
          <div class="designLine-right borderColorYellow"></div>
          <div class="designLine-left borderColorYellow"></div>
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
      smileCard.after(html);
      /* ------------- CARD MIRROR IN THE MIRROR  ------------- */
    } else if (el.cardID === 'card-MITM') {
      html = document.createElement('div');
      html.innerHTML = `
        <div class="card_style6 gridCard-universal">
          <div class="designLine-right borderColorGreen"></div>
          <div class="designLine-left borderColorGreen"></div>
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
      formCard.after(html);
      /* ------------- CARD SAM BODHI JAZZ ------------- */
    } else if (el.cardID === 'card-samBodhiJazz') {
      html = document.createElement('div');
      html.innerHTML = `
        <div class="card_style7 gridCard-universal">
          <div class="card_style7-contentContainer contentCard-universal">
            <span class="cardCream-tag cardCream-tag--freelance">
              Freelance
            </span>
            <div class="card-iconContainer">
              <img
                class="card-icon"
                src="./img/piano.png"
                alt="piano-image https://iconscout.com/"
              />
            </div>
            <h2 class="cardCream-h2">Sam Bodhi Jazz</h2>
            <p class="cardCream-text">Website for a local jazz musician...</p>
            <button class="cardCream-btn">View</button>
          </div>
        </div>
      `;
      founderCard.after(html);
      /* ------------- CARD BAYSIDE RECOVERY ------------- */
    } else if (el.cardID === 'card-baysideRecovery') {
      html = document.createElement('div');
      html.innerHTML = `
        <div class="card_style7 gridCard-universal">
          <div class="card_style7-contentContainer contentCard-universal">
            <span class="cardCream-tag cardCream-tag--freelance">
              Freelance
            </span>
            <div class="card-iconContainer">
              <img
                class="card-icon"
                src="./img/boat.png"
                alt="piano-image https://iconscout.com/"
              />
            </div>
            <h2 class="cardCream-h2">Bayside Recovery</h2>
            <p class="cardCream-text">
              Website for a local marine recovery service...
            </p>
            <button class="cardCream-btn">View</button>
          </div>
        </div>
      `;
      smileCard.after(html);
    } else if (el.cardID === 'card-activityTracker') {
      html = document.createElement('div');
      html.innerHTML = `
          <div class="card_style8 gridCard-universal">
            <div class="card_style8-contentContainer contentCard-universal">
              <span class="cardCream-tag cardCream-tag--app">App</span>
              <div class="card-cubeContainer">
                <div class="card-cube">
                  <div class="card-cube--front"></div>
                  <div class="card-cube--back"></div>
                  <div class="card-cube--top"></div>
                  <div class="card-cube--bottom"></div>
                  <div class="card-cube--left"></div>
                  <div class="card-cube--right"></div>
                </div>
              </div>
              <h2 class="cardCream-h2">Activity Tracker</h2>
              <p class="cardCream-text">An app to keep you on track.</p>
              <button class="cardCream-btn">Sign Up</button>
            </div>
          </div>
      `;
      founderCard.after(html);
    }
  }
};

//!DISPLAY CARDS RANDOMLY ON PAGE
loadAllCards(cardsArrayOfObjects);
