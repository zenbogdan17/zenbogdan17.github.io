'use strict';

const fetchRequestFunction = async () => {
  try {
    const url = 'https://voodoo-sandbox.myshopify.com/products.json?limit=12';
    const response = await fetch(url);
    const data = await response.json();
    // Обработка полученных данных
    console.log(data);

    // Добавляем внутренние элементы в новый элемент
    for (let i = 0; i < data.products.length; i++) {
      const newItem = document.createElement('div');
      newItem.className = 'item';

      newItem.innerHTML = `

      <div class="img">
         <img src="${data.products[i].images[0].src}" />
      </div>
      <div class="label">
        <div class="bold_p">
          <p>${data.products[i].title}</p>
          <p>000 KR.</p>
        </div>
        <div>
          <p>Condition</p>
          <p>Condition</p>
        </div>
      </div>
      <button class="buy_btn">PICK-UP IN 2200</button>

    `;
      // Получаем родительский элемент, к которому нужно добавить новый элемент
      const parentElement = document.querySelector('.items');

      // Добавляем новый элемент в родительский элемент
      parentElement.appendChild(newItem);
    }
  } catch (error) {
    console.log('Произошла ошибка при выполнении запроса:', error);
  } finally {
    hideLoader();
  }
};

fetchRequestFunction();

//loader

function showLoader() {
  document.getElementById('loader').classList.remove('hidden_loader');
}

function hideLoader() {
  document.getElementById('loader').classList.add('hidden_loader');
}

showLoader();

document.getElementById('toggleButton').addEventListener('click', function () {
  const additionalContent = document.getElementById('additionalContent');

  if (additionalContent.style.display == 'block') {
    additionalContent.style.display = 'none';
  } else {
    additionalContent.style.display = 'block';
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var toggleButton = document.getElementById('toggleButton');

  toggleButton.addEventListener('click', function () {
    this.classList.toggle('rotate-180');
  });
});
