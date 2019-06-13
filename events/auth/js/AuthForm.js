'use strict';

const isFunction = input => typeof input === 'function';
const renderIf = predicate => elemOrThunk =>
  predicate ? (isFunction(elemOrThunk) ? elemOrThunk() : elemOrThunk) : null;


const AuthForm = (props) => {
  const {onAuth} = props;

  const format = (event) => {
    const field = event.target,
      regEmail = /[\w\.\@\-]+/g,
      regPassword = /\w+/g;

    if (!field.value) return;

    const regType = field.type == 'email' ? regEmail : regPassword;
    const reg = field.value.match(regType);
    field.value = reg ? reg.join('') : '';
  };

  //проверка: передан и функция
  const checkOnAuth = () => {
    return renderIf(onAuth) == null;
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    if (checkOnAuth()) return;

    const user = {};

    Array.from(event.target).forEach(element => {
      if (element.type === 'submit') return;
      if (element.type === 'text')
        user.name = element.value;
      else {
        user[element.type] = element.value;
      }

    });
    onAuth(JSON.stringify(user));
  };

  return (
    <form className="ModalForm" action="/404/auth/" method="POST" onSubmit={handlerSubmit}>
      <div className="Input">
        <input required type="text" placeholder="Имя"/>
        <label></label>
      </div>
      <div className="Input">
        <input type="email"
               placeholder="Электронная почта"
               onChange={format}/>
        <label></label>
      </div>
      <div className="Input">
        <input required type="password"
               placeholder="Пароль"
               onChange={format}/>
        <label></label>
      </div>
      <button type="submit">
        <span>Войти</span>
        <i className="fa fa-fw fa-chevron-right"></i>
      </button>
    </form>
  )
};
