'use strict';

const isFunction = input => typeof input === 'function';
const renderIf = predicate => elemOrThunk =>
  predicate ? (isFunction(elemOrThunk) ? elemOrThunk() : elemOrThunk) : null;


const AuthForm = (props) => {
  const {onAuth} = props;

  const format = (event) => {
    const field = event.currentTarget,
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
               onChange={format}
               ref={field => emailField = field}/>
        <label></label>
      </div>
      <div className="Input">
        <input required type="password"
               placeholder="Пароль"
               onChange={format}
               ref={field => passwordField = field}/>
        <label></label>
      </div>
      <button type="submit" onClick={onSubmit}>
        <span>Войти</span>
        <i className="fa fa-fw fa-chevron-right"></i>
      </button>
    </form>
  )
};
