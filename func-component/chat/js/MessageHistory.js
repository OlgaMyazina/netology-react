'use strict';

/*
* Список сообщений передаваемый в компонент представляет собой массив объектов,
* каждый из которых представляет собой сообщение, которое необходимо отразить в истории.
* Сообщение имеет следующие свойства:

id — уникальный идентификатор сообщения, строка;
from — автор сообщения, объект;
type — тип сообщения, строка, варианты значений: response, message, typing;
time — время публикации сообщения, строка;
text — текст сообщения, строка, может отсутствовать.
*/

const MessageHistory = (props) => {
  if (props.list.length === 0) {
    return null;
  }

  const messageItem = props.list.map((message) => {
    const Type = chooseType(message.type);
    return (
      <Type from={message.from} message={message} key={message.id}/>
    )
  });

  return (
    <ul>
      {messageItem}
    </ul>
  )
};

const chooseType = (type) => {
  switch (type) {
    case 'message':
      return Message;
    case 'response':
      return Response;
    case 'typing':
      return Typing;
  }
};
