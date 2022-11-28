'use strict';
/* --------------------------- MAIN --------------------------- */

// Main Selectors

const grid = document.querySelector('.grid');
const gridInner = document.querySelector('.grid-inner');
const founderCard = document.querySelector('#cardFounder');
const formCard = document.querySelector('#cardForm');
const smileCard = document.querySelector('.card_smile');
const headerBtn = document.querySelector('.card_header-btn');

// Cards Array
const cardsArrayOfObjects = [
  { cardID: 'card-milestone' },
  { cardID: 'card-theWatchers' },
  { cardID: 'card-MITM' },
  { cardID: 'card-andToday' },
  { cardID: 'card-baysideRecovery' },
  { cardID: 'card-samBodhiJazz' },
  { cardID: 'card-activityTracker' },
  { cardID: 'card-clock' },
];

/* --------------------------- DREADFULLY LONG IF STATEMENT --------------------------- */
//Randomly insert HTML for each element in array object
const loadAllCards = function (array) {
  const arrayCopy = array.slice();
  while (arrayCopy.length) {
    const random = Math.floor(Math.random() * arrayCopy.length);
    const el = arrayCopy.splice(random, 1)[0];
    let html;
    /* ------------- CARD MILESTONE ------------- */
    if (el.cardID === 'card-milestone') {
      html = document.createElement('div');
      html.innerHTML = `
          <div class="card_milestone gridCard-universal">
            <div
              class="card_milestone-contentContainer contentCard-universal"
              id="timeInaYear"
            >
              <span class='cardCream-tag card_milestone-tag'>Widget</span>
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
              <h2 class="cardCream-h2">Latest Milestone: <br> Age &mdash; 30</h2>
              <div class="cardCream-wrapper">
                <div class="cardCream-text">
                  <span
                    class="cardCream-text timeCounter"
                    data-target="10950"
                  ></span>
                  <span class="cardCream-text">days</span>
                </div>
                <div class="cardCream-text">
                  <span
                    class="cardCream-text timeCounter"
                    data-target="262800"
                  ></span>
                  <span class="cardCream-text">hours</span>
                </div>
                <div class="cardCream-text">
                  <span
                    class="cardCream-text timeCounter"
                    data-target="15768000"
                  ></span>
                  <span class="cardCream-text">minutes</span>
                </div>
                <div class="cardCream-text">
                  <span
                    class="cardCream-text timeCounter"
                    data-target="946080000"
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
        <div class="card_nonfiction gridCard-universal">
          <div class="designLine-right borderColorYellow"></div>
          <div class="designLine-left borderColorYellow"></div>
          <div class="card_nonfiction-contentContainer contentCard-universal">
            <span class="cardChocolate-tag card_nonfiction-tag">
              Creative Non-Fiction
            </span>
            <h2 class="cardChocolate-h2">The Watchers</h2>
            <p class="cardChocolate-text">
              "Usually I just sit on the bus having conversations with
              myself..."
            </p>
            <a target="_blank" href="#" class="cardChocolate-btn">
              Read Now
            </a>
          </div>
        </div>
      `;
      founderCard.after(html);
      /* ------------- CARD AND, TODAY  ------------- */
    } else if (el.cardID === 'card-andToday') {
      html = document.createElement('div');
      html.innerHTML = `
        <div class="card_nonfiction gridCard-universal">
          <div class="designLine-right borderColorYellow"></div>
          <div class="designLine-left borderColorYellow"></div>
          <div class="card_nonfiction-contentContainer contentCard-universal">
            <span class="cardChocolate-tag card_nonfiction-tag">
              Creative Non-Fiction
            </span>
            <h2 class="cardChocolate-h2">And, Today</h2>
            <p class="cardChocolate-text">
              "And, today I wake up with the thought, "This could be the final
              morning..."
            </p>
            <a target="_blank" href="chapter1.html" class="cardChocolate-btn">
              Read Now
            </a>
          </div>
        </div>
      `;
      smileCard.after(html);
      /* ------------- CARD MIRROR IN THE MIRROR  ------------- */
    } else if (el.cardID === 'card-MITM') {
      html = document.createElement('div');
      html.innerHTML = `
        <div class="card_fiction gridCard-universal">
          <div class="designLine-right borderColorGreen"></div>
          <div class="designLine-left borderColorGreen"></div>
          <div class="card_fiction-contentContainer contentCard-universal">
            <span class="cardChocolate-tag card_fiction-tag">
              Fiction
            </span>
            <h2 class="cardChocolate-h2">Mirror In the Mirror</h2>
            <p class="cardChocolate-text">
              "As I wake up I feel a pulsing in my foot. There's this slight
              pulling in the tendon that produces discomfort but not pain..."
            </p>
            <a target="_blank" href="#" class="cardChocolate-btn">
              Read Now
            </a>
          </div>
        </div>
      `;
      formCard.after(html);
      /* ------------- CARD SAM BODHI JAZZ ------------- */
    } else if (el.cardID === 'card-samBodhiJazz') {
      html = document.createElement('div');
      html.innerHTML = `
        <div class="card_freelance gridCard-universal">
          <div class="card_freelance-contentContainer contentCard-universal">
            <span class="cardCream-tag card_freelance-tag">
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
            <p class="cardCream-text">Website &mdash; local jazz musician</p>
            <button class="cardCream-btn"><a href="http://sambodhijazz.getforge.io/">View</a></button>
          </div>
        </div>
      `;
      founderCard.after(html);
      /* ------------- CARD MM.ORG ------------- */
    } else if (el.cardID === 'card-baysideRecovery') {
      html = document.createElement('div');
      html.innerHTML = `
        <div class="card_freelance gridCard-universal">
          <div class="card_freelance-contentContainer contentCard-universal">
            <span class="cardCream-tag card_freelance-tag">
              Freelance
            </span>
            <div class="card-iconContainer">
              <img
                class="card-icon"
                src="./img/pencil.png"
                alt="pencil-image https://iconscout.com/"
              />
            </div>
            <h2 class="cardCream-h2">Maxamillennial.org</h2>
            <p class="cardCream-text">
              Website &mdash; author's portfolio 
            </p>
            <button class="cardCream-btn"><a href="http://maxamillennial.getforge.io/">View</a></button>
          </div>
        </div>
      `;
      smileCard.after(html);
      /* ------------- CARD APP ------------- */
    } else if (el.cardID === 'card-activityTracker') {
      html = document.createElement('div');
      html.innerHTML = `
          <div class="card_app gridCard-universal">
            <div class="card_app-contentContainer contentCard-universal">
              <span class="cardCream-tag card_app-tag">App</span>
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
              <p class="cardCream-text">An app to keep you on track</p>
              <button class="cardCream-btn"><a href="http://activitytracker.org/">Sign Up</a></button>
            </div>
          </div>
      `;
      founderCard.after(html);
      /* ------------- CARD CLOCK ------------- */
    } else if (el.cardID === 'card-clock') {
      html = document.createElement('div');
      html.innerHTML = `
        <div class='card_clock gridCard-universal backgroundColor-cream' id='cardClock'>
          <div class='card_clock-contentContainer contentCard-universal'>
            <span class='card_clock-tag'>Widget</span>
            <button class='card_clock-btn backgroundColor-cream borderColor-black'>
              Dark Mode
            </button>
            <div class='card_clock-clockContainer'>
              <div class='card_clock-needle backgroundColor-black hourHand'></div>
              <div class='card_clock-needle backgroundColor-black minuteHand'></div>
              <div class='card_clock-needle backgroundColor-black secondHand'></div>
              <div class='card_clock-center'></div>
            </div>
          <div class='card_clock-timeDisplay'></div>
          <div class='card_clock-dateDisplay'></div>
        </div>
      </div>
      `;
      smileCard.after(html);
    }
  }
};

//!DISPLAY CARDS RANDOMLY ON PAGE
loadAllCards(cardsArrayOfObjects);

//!DELETE ALL CARDS ON PAGE
// headerBtn.addEventListener('click', function () {
//   document.querySelector('.grid-inner').innerHTML = '';
// });

//!ASSIGN ALL CARDS IDS
// Assign each element of an array an ID# property -- UNUSED
// const assignIDs = function (array) {
//   const array_IDs = array.slice();
//   for (let i = 0; i < array_IDs.length; i++) {
//     array_IDs[i].id = i + 1;
//   }
//   return array_IDs;
// };
