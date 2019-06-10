'use strict';
/*
*
Необходимо создать компонент FeedbackForm. Он должен иметь атрибуты:

  data — значение полей формы по умолчанию, объект;
onSubmit — обработчик события отправки формы, функция.
  При отправке формы необходимо вызвать обработчик события отправки формы,
  переданный в атрибуты,
  и передать в него первым аргументом строку c данными формы в формате JSON.

* */

const FeedbackForm = (props) => {
  const {data, onSubmit} = props;

  const isSalutation = (value) => {
    return data.salutation == value;
  };

  const isChecked = (value) => {
    return data.snacks.includes(value)
  };

  let salutationField, nameField, emailField, subjectField, messageField, snacksField, salutationForm, snacksForm;

  const saveForm = (e) => {
    e.preventDefault();
    salutationField = salutationForm.querySelector('input[type=radio]:checked');
    snacksField = snacksForm.querySelector('input[type=checkbox]:checked');
    const formField = {
      salutation: salutationField.value,
      name: nameField.value,
      email: emailField.value,
      subject: subjectField.value,
      message: messageField.value,
      snacks: snacksField.value,
    };
    onSubmit(JSON.stringify(formField));
  }


  return (
    <form className="content__form contact-form">
      <div className="testing">
        <p>Чем мы можем помочь?</p>
      </div>
      <div className="contact-form__input-group" ref={el => salutationForm = el}>
        <input className="contact-form__input contact-form__input--radio"
               defaultChecked={isSalutation("Мистер")}
               id="salutation-mr"
               name="salutation"
               type="radio"
               value="Мистер"/>
        <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mr">Мистер</label>
        <input className="contact-form__input contact-form__input--radio"
               defaultChecked={isSalutation("Мисис")}
               id="salutation-mrs"
               name="salutation"
               type="radio"
               value="Мисис"/>
        <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mrs">Мисис</label>
        <input className="contact-form__input contact-form__input--radio"
               defaultChecked={isSalutation("Мис")}
               id="salutation-ms"
               name="salutation"
               type="radio"
               value="Мис"/>
        <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-ms">Мис</label>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="name">Имя</label>
        <input className="contact-form__input contact-form__input--text"
               id="name"
               name="name"
               type="text"
               defaultValue={data.name}
               ref={el => nameField = el}/>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="email">Адрес электронной почты</label>
        <input className="contact-form__input contact-form__input--email"
               id="email"
               name="email"
               type="email"
               defaultValue={data.email}
               ref={el => emailField = el}/>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
        <select className="contact-form__input contact-form__input--select"
                id="subject"
                name="subject"
                defaultValue={data.subject}
                ref={el => subjectField = el}>
          <option value="У меня проблема">У меня проблема</option>
          <option value="У меня важный вопрос">У меня важный вопрос</option>
        </select>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="message">Ваше сообщение</label>
        <textarea className="contact-form__input contact-form__input--textarea"
                  id="message"
                  name="message"
                  rows="6"
                  cols="65"
                  defaultValue={data.message}
                  ref={el => messageField = el}>
        </textarea>
      </div>
      <div className="contact-form__input-group" ref={el => snacksForm = el}>
        <p className="contact-form__label--checkbox-group">Хочу получить:</p>
        <input className="contact-form__input contact-form__input--checkbox"
               id="snacks-pizza"
               name="snacks"
               type="checkbox"
               value="пицца"
               defaultChecked={isChecked("пицца")}
        />
        <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-pizza">Пиццу</label>
        <input className="contact-form__input contact-form__input--checkbox"
               id="snacks-cake"
               name="snacks"
               type="checkbox"
               value="пирог"
               defaultChecked={isChecked("пирог")}
        />
        <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-cake">Пирог</label>
      </div>
      <button className="contact-form__button" type="submit" onClick={saveForm}>Отправить сообщение!</button>
      <output id="result"/>
    </form>
  )
}