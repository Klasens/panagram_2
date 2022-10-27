'use strict';

// JavaScript Selectors

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
  { header: 'header-5', text: 'string of text 5' },
  { header: 'header-6', text: 'string of text 6' },
  { header: 'header-7', text: 'string of text 7' },
  { header: 'header-8', text: 'string of text 8' },
];

const testBtn = headerBtn.addEventListener('click', function () {
  console.log('teset');
  cardStyle2.innerHTML = 'test';
});

//Assigns each card an ID and displays it in random order
const loadAllCards = function (array) {
  const arrayCopy = array.slice();
  for (let i = 0; i < arrayCopy.length; i++) {
    arrayCopy[i].id = i + 1;
  }
  while (arrayCopy.length) {
    const random = Math.floor(Math.random() * arrayCopy.length);
    const el = arrayCopy.splice(random, 1)[0];
    let html;
    if (el.hasOwnProperty('btn')) {
      html = `
      <div class="card_style3 card-universal">
        <div class="card_style3-contentContainer"> 
          <div class="card-h2">${el.header}</div>
          <div class="card-text">${el.text}</div>
          <div class="card-number">${el.id}</div>
          <div class="card-btn">${el.btn}</div>
        </div>
      </div>
  `;
      cardStyle1.insertAdjacentHTML('afterend', html);
    } else {
      html = `
      <div class="card_style2 card-universal">
        <div class="card_style2-contentContainer"> 
          <div class="card-h2">${el.header}</div>
          <div class="card-text">${el.text}</div>
          <div class="card-number">${el.id}</div>
        </div>
      </div>
  `;
      cardStyle1.insertAdjacentHTML('afterend', html);
    }
  }
};

loadAllCards(cardsArrayOfObjects);
//Randomizers
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
