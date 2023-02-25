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
  const currentTime = date.toLocaleTimeString([], {
    hour12: false,
  });
  time.textContent = currentTime;
  setTimeout(showTime, 1000);
};

const showDate = () => {
  // const weekday = [
  //   'Sunday',
  //   'Monday',
  //   'Tuesday',
  //   'Wednesday',
  //   'Thursday',
  //   'Friday',
  //   'Saturday',
  // ];

  const weekday = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];

  const d = new Date();
  let day = weekday[d.getDay()];

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
  greetingText.textContent = `Good ${userDay}`;
  setTimeout(showGreeting, 1000);
};

const getGreeting = () => {
  const date = new Date();
  const hours = date.getHours();

  if (hours >= 6 && hours < 12) {
    return 'Morning';
  } else if (hours >= 12 && hours < 18) {
    return 'Day';
  } else if (hours >= 18 && hours < 24) {
    return 'Evening';
  } else {
    return 'Night';
  }
};
