const userName = document.querySelector('.name');

const getLocalStorage = () => {
  console.log('getLocalStorage');
  if (localStorage.getItem('name')) {
    userName.value = localStorage.getItem('name');
  } else {
    userName.value = '[Enter Your Name]';
  }
};

const setLocalStorage = () => {
  console.log('setLocalStorage');
  localStorage.setItem('name', userName.value);
};

// ===========================================================

window.onload = function () {
  console.log('Go Go Go!');
  showTime();
  showDate();
  showGreeting();
};

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);

// -----------------------------------------------------------

const showTime = () => {
  const time = document.querySelector('.time');
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;
  setTimeout(showTime, 1000);
};

const showDate = () => {
  const date = document.querySelector('.date');
  const options = {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'UTC',
  };
  const currentDate = new Date().toLocaleDateString('ru-Ru', options);
  date.textContent = currentDate;
  setTimeout(showDate, 1000);
};

const showGreeting = () => {
  const greetingText = document.querySelector('.greeting');
  const getGr = getGreeting();
  greetingText.textContent = `Good ${getGr}`;
  setTimeout(showGreeting, 1000);
};

const getGreeting = () => {
  const date = new Date();
  const hours = date.getHours();

  if (hours >= 5 && hours < 11) {
    return 'Morning';
  } else if (hours >= 11 && hours < 17) {
    return 'Day';
  } else if (hours >= 17 && hours < 23) {
    return 'Evening';
  } else {
    return 'Night';
  }
};
