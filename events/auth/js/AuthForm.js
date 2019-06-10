'use strict';

const isFunction = input => typeof input === 'function';
const renderIf = predicate => elemOrThunk =>
  predicate ? (isFunction(elemOrThunk) ? elemOrThunk() : elemOrThunk) : null;


const AuthForm = (props) => {
  const {onAuth} = props;

  /*
  * в поле «Электронная почта» любых символов кроме латинских букв, цифр, символов @, ., _ и -;
  * */
  const formatEmail = (event) => {
    const field = event.currentTarget;

    if (!field.value) return;

    const reg = field.value.match(/[\w\.\@\-]+/g);
    field.value = reg.join('')
  };

  /*
  * в поле «Пароль» любых символов кроме латинских букв, цифр и символа _.
  * */
  const formatPassword = (event) => {
    const field = event.currentTarget;
    if (!field.value) return;

    const reg = field.value.match(/\w+/g);
    field.value = reg.join('');
  };

  //проверка: передан и функция
  const checkOnAuth = () => {
    return renderIf(onAuth) == null;
  };

  let nameField, emailField, passwordField;

  const onSubmit = (event) => {
    event.preventDefault();
    if (!checkOnAuth()) return;
    const user = {
      name: nameField,
      email: emailField,
      password: passwordField,
    };
    onAuth(JSON.stringify(user));
  };

  return (
    <form className="ModalForm" action="/404/auth/" method="POST">
      <div className="Input">
        <input required type="text" placeholder="Имя" ref={field => nameField = field}/>
        <label></label>
      </div>
      <div className="Input">
        <input type="email"
               placeholder="Электронная почта"
               onChange={formatEmail}
               ref={field => emailField = field}/>
        <label></label>
      </div>
      <div className="Input">
        <input required type="password"
               placeholder="Пароль"
               onChange={formatPassword}
               ref={field => passwordField = field}/>
        <label></label>
      </div>
      <button type="submit" onClick={onSubmit}>
        <span>Войти</span>
        <i className="fa fa-fw fa-chevron-right"></i>
      </button>
    </form>
  )
}

/*
* Форма не должна отправляться на сервер ни одним из возможных способов
* (клик по кнопке «Войти» или нажатие клавиши Enter в одном из полей ввода).
* При отправке формы необходимо вызвать обработчик события onAuth,
* если он передан в атрибуты и является функцией.
* В него следует передать первым аргументом объект пользователя имеющий следующие свойства:

name — имя пользователя,
email — электронная почта,
password — пароль.
Необходимо запретить ввод (поля ввода должны просто игнорировать эти символы):

в поле «Электронная почта» любых символов кроме латинских букв, цифр, символов @, ., _ и -;
в поле «Пароль» любых символов кроме латинских букв, цифр и символа _.*/