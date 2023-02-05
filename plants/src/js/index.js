const data = [
  {
    id: 1,
    city: 'Canandiagua, NY',
    phone: '+1 585 393 0001',
    address: '151 Charlotte Street ',
  },
  {
    id: 2,
    city: 'New York City',
    phone: '+1 212 456 0002',
    address: '9 East 91st Street ',
  },
  {
    id: 3,
    city: 'Yonkers, NY',
    phone: '+1 914 678 0003',
    address: '511 Warburton Ave',
  },
  {
    id: 4,
    city: 'Sherrill, NY',
    phone: '+1 315 908 0004',
    address: '14 WEST Noyes BLVD',
  },
];

let activeButtonsCount = 0;

window.onload = function () {
  console.log('RUN!');

  loadData();
  addSelectHandler();
  addButtonsClickHandler();
};

const loadData = () => {
  const selectCity = document.querySelector('#selectCity');

  data.forEach((d) => {
    selectCity.options[selectCity.options.length] = new Option(d.city, d.id);
  });
};

const getDataById = (id) => {
  let res = [];
  data.forEach((data) => {
    if (data.id === id) {
      res.push({
        id: data.id,
        city: data.city,
        phone: data.phone,
        address: data.address,
      });
    }
  });
  return res;
};

const addSelectHandler = () => {
  let addressData;

  document.querySelector('#selectCity').addEventListener('click', (event) => {
    event.preventDefault();
    addressData = getDataById(selectCity.selectedIndex);

    if (addressData.length > 0) {
      document.getElementById('selected_city_block_city').innerText =
        addressData[0].city;
      document.getElementById('selected_city_block_phone').innerText =
        addressData[0].phone;
      document.getElementById('selected_city_block_address').innerText =
        addressData[0].address;
      document.getElementById('selected_city_block_call_us_href').href =
        'tel:' + addressData[0].phone.replace(/ /g, '');
      document
        .getElementById('selected_city_block')
        .classList.remove('invisible');
    } else {
      document.getElementById('selected_city_block').classList.add('invisible');
    }
  });
};

const addButtonsClickHandler = () => {
  document.querySelector('.service__buttons').addEventListener('click', (e) => {
    if (e.target.classList.contains('button')) {
      let clickedButton = e.target;
      selectClickedButton(clickedButton);
    }
  });
};

const selectClickedButton = (clickedButton) => {
  let filterEnabled = false;

  if (clickedButton.classList.contains('button_selected')) {
    activeButtonsCount = activeButtonsCount - 1;
    clickedButton.classList.remove('button_selected');
    clickedButton.classList.add('button_bordered');

    filterEnabled = false;
  } else {
    if (activeButtonsCount >= 2) {
      alert(
        'По условиям задания вы не можете выбрать больше 2 фильтров одновременно! \n Чтобы продолжить работу с фильтрами, снимите ранее выбранный фильтр!'
      );
      return;
    }

    activeButtonsCount = activeButtonsCount + 1;
    clickedButton.classList.add('button_selected');
    clickedButton.classList.remove('button_bordered');
    filterEnabled = true;
  }
  filterBySelectedService(filterEnabled, clickedButton);
};

const filterBySelectedService = (filterEnabled, clickedButton) => {
  let serviceBlocks = document.querySelectorAll('.service_block');
  serviceBlocks.forEach((block) => {
    if (filterEnabled) {
      if (block.classList.contains(clickedButton.innerText.toLowerCase())) {
        block.classList.add('service_block_blured');
      }
    } else {
      if (block.classList.contains(clickedButton.innerText.toLowerCase())) {
        block.classList.remove('service_block_blured');
      }
    }
  });
};
