const data = [
  {
    id: 1,
    city: 'Madrid',
    phone: '555-55-55',
    address: 'Madrid address',
  },
  {
    id: 2,
    city: 'Milan',
    phone: '666-66-66',
    address: 'Milan address',
  },
  {
    id: 3,
    city: 'Berlin',
    phone: '777-77-77',
    address: 'Berlin address',
  },
  {
    id: 4,
    city: 'Paris',
    phone: '888-88-88',
    address: 'Paris address',
  },
];

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
        'tel:' + addressData[0].phone;
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
  let serviceEnabled = true;

  if (clickedButton.classList.contains('button_selected')) {
    clickedButton.classList.remove('button_selected');
    clickedButton.classList.add('button_bordered');
    serviceEnabled = false;
  } else {
    clickedButton.classList.add('button_selected');
    clickedButton.classList.remove('button_bordered');
    serviceEnabled = true;
  }

  filterBySelectedService(serviceEnabled, clickedButton);
};

const filterBySelectedService = (serviceEnabled, clickedButton) => {
  let serviceBlocks = document.querySelectorAll('.service_block');
  serviceBlocks.forEach((block) => {
    if (serviceEnabled) {
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
