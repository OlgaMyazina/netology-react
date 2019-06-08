'use strict';

/*
* Данные для списка доступны в формате JSON по адресу https://neto-api.herokuapp.com/etsy

Это массив объектов, каждый объект представляет одно предложение.
У предложение доступно множество свойств, но в приложении необходимо использовать следующие:

listing_id — уникальный идентификатор предложения, число;
url — ссылка на предложение, строка;
MainImage — информация об изображении, объект,
  нам необходимо использовать свойство url_570xN для получения адреса главной картинки, строка;
title — название предложения, строка;
currency_code — код валюты, строка;
price — цена, строка;
quantity — доступное количество, число.
* */

//получаем данные
const getData = async (url) => {
  return fetch(url)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Что-то пощло не так');
    })
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}


//получаем элемент root, если его нет - создаём
const getRoot = () => {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    return rootElement;
  }
  const newRootElement = document.createElement('div');
  newRootElement.setAttribute('id', 'root');
  return newRootElement;
};

//Создаём компонент Listing
const Listing = (props) => {
  const {items = []} = props;
  return (
    <div className="item-list">
      {items.map(item =>
        <ListItem key={item.listing_id} item={item}/>
      )}
    </div>
  );
};

const ListItem = (props) => {
  const item = props.item;
  return (

    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage.url_570xN}/>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{formatTitle(item.title)}</p>
        <p className="item-price">{formatPrice(item.currency_code, item.price)}</p>
        <p className={formatQuantity(item.quantity)}>{item.quantity} left</p>
      </div>
    </div>

  )
}

/*
* Если название предложения привышает 50 символов,
* то необходимо выводить только первые 50 символов,
* и добавлять символ … в конце
* */

const formatTitle = (title) => {
  if (title.length >= 50) {
    return `${title.substring(0, 50)}...`;
  }
  return title;
};

/*
* При выводе стоимости предложения необходимо учитывать валюту. Если цена задана:
*   в долларах США, код USD, то цену вывести в формате $50.00;
*   в евро, код EUR, то цену вывести в формате €50.00;
*   в остальных случаях цену вывести в формате 50.00 GBP, где GBP — код валюты.
*/

const formatPrice = (currency_code, price) => {
  switch (currency_code) {
    case 'USD':
      return `$${price}`;
    case 'EUR':
      return `€${price}`;
    default:
      return `${price} ${currency_code}`;
  }
};

/*
* Вывести остаток, подсветив его в зависимости от количества, используя класс level-*:
*   level-low — если остаток меньше 10 включительно,
*   level-medium — если остаток меньше 20 включительно,
*   level-high — если остаток больше 20.
* */
const formatQuantity = (quantity) => {
  let level = `item-quantity `;
  if (quantity <= 10) {
    level += 'level-low';
    return level;
  }
  if (quantity <= 20) {
    level += 'level-medium';
    return level;
  }
  level += 'level-high';
  return level;
}

const toRender = async () => {
  const url = 'https://neto-api.herokuapp.com/etsy',
    data = await getData(url),
    root = getRoot();
  ReactDOM.render(<Listing items={data}/>, root);
};

//вызываем рендер
toRender();

