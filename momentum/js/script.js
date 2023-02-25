const getRandomNumber = () => {
  const MAX = 20;
  const MIN = 1;
  return Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
};

let RANDOM_NUMBER = getRandomNumber();

//

const SLIDER_PREV = document.querySelector('.slide-prev');
const SLIDER_NEXT = document.querySelector('.slide-next');

const getSlidePrev = () => {
  if (RANDOM_NUMBER <= 1) {
    RANDOM_NUMBER = RANDOM_NUMBER + 20;
  }
  RANDOM_NUMBER--;
  setBackGround(RANDOM_NUMBER);
  return null;
};

const getSlideNext = () => {
  if (RANDOM_NUMBER >= 20) {
    RANDOM_NUMBER = RANDOM_NUMBER - 20;
  }
  RANDOM_NUMBER++;
  setBackGround(RANDOM_NUMBER);
  return null;
};

//

const WEEKDAY = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];

const TIME_OF_DAY = ['morning', 'afternoon', 'evening', 'night'];

const userName = document.querySelector('.name');

const getLocalStorage = () => {
  // console.log('getLocalStorage');
  if (localStorage.getItem('name')) {
    userName.value = localStorage.getItem('name');
  } else {
    userName.value = '[Enter Your Name]';
  }
};

const setLocalStorage = () => {
  // console.log('setLocalStorage');
  localStorage.setItem('name', userName.value);
};

// ===========================================================

window.onload = function () {
  console.log('Go Go Go!');

  showTime();
  showDate();
  showGreeting();
  setBackGround();
};

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);
SLIDER_PREV.addEventListener('click', getSlidePrev);
SLIDER_NEXT.addEventListener('click', getSlideNext);

// -----------------------------------------------------------

const setBackGround = () => {
  const randomImage = getRandomImage();
  const img = new Image();
  img.src = `${randomImage}`;
  img.onload = () => {
    document.body.style.backgroundImage = `url(${randomImage})`;
  };
};

// ========================

const showTime = () => {
  const time = document.querySelector('.time');
  const date = new Date();
  const currentTime = date.toLocaleTimeString([], {
    hour12: false,
  });
  time.textContent = currentTime;
  setTimeout(showTime, 1000);
};

const showDate = () => {
  const d = new Date();
  let day = WEEKDAY[d.getDay()];

  const date = document.querySelector('.date');
  const options = {
    month: 'long',
    day: 'numeric',
  };
  const currentDate = new Date().toLocaleDateString('ru-Ru', options);
  date.textContent = day + ', ' + currentDate;
  setTimeout(showDate, 1000);
};

const showGreeting = () => {
  const greetingText = document.querySelector('.greeting');
  const userDay = getGreeting();
  greetingText.textContent = `${userDay}`;
  setTimeout(showGreeting, 1000);
};

const getTimeOfDay = () => {
  const date = new Date();
  const hours = date.getHours();

  if (hours >= 6 && hours < 12) {
    return TIME_OF_DAY[0];
  } else if (hours >= 12 && hours < 18) {
    return TIME_OF_DAY[1];
  } else if (hours >= 18 && hours < 24) {
    return TIME_OF_DAY[2];
  } else {
    return TIME_OF_DAY[3];
  }
};

const getGreeting = () => {
  const timeOfDay = getTimeOfDay();

  if (timeOfDay === 'morning') {
    return 'Доброе утро, ';
  } else if (timeOfDay === 'afternoon') {
    return 'Добрый день, ';
  } else if (timeOfDay === 'evening') {
    return 'Добрый вечер, ';
  } else {
    return 'Доброй ночи, ';
  }
};

const getRandomImage = () => {
  const timeOfDay = getTimeOfDay();
  imageNumber = RANDOM_NUMBER >= 10 ? RANDOM_NUMBER : '0' + RANDOM_NUMBER;
  return `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${imageNumber}.jpg`;
};

// ========================
