'use strict';

const profileStyle = {
  border: '1px solid #cccccc',
  borderRadius: '5px',
  width: '100%',
  height: '100%',
  margin: '5px'
};

const imageStyle = {
  width: '200px',
  height: '200px'
};

const Profile = props => {
  return (
    <div className="col-md-4 text-center" style={{marginBottom: '10px'}}>
      <div style={profileStyle}>
        <h2>{props.first_name} {props.last_name}</h2>
        <div>
          <img src={props.img} className="img-thumbnail" style={imageStyle}/>
        </div>
        <p>vk: <a href={props.url}>{props.url}</a></p>
        <p>birthday: <a href={props.birthday}>{props.birthday}</a></p>
      </div>
    </div>
  );
};

const urlPropsType = (props, propName, componentName) => {
  const url = props[propName];

  const isUrl = (typeof url === 'string') &&
    /^https:\/\/vk\.com\/(id[0-9]+|[A-Za-z0-9_-]+)$/.test(url);

  console.log(url, isUrl);

  if (!isUrl) {
    return new Error(`Неверный параметр ${propName} в компоненте 
    ${componentName}: параметр должен быть вида https://vk.com/(id[0-9]+|[A-Za-z0-9_-]+)`);
  }
  return null;
};

const birthdayPropsType = (props, propName, componentName) => {
  const date = props[propName],
    msDate = new Date(date);

  if (msDate >= Date.now)
    return new Error(`Дата рождения должна быть меньше текущей`);

  const isDate = (typeof date === 'string') &&
    /^\d{4}-\d{2}-\d{2}$/.test(date);

  if (!isDate) {
    return new Error(`Неверный параметр ${propName} в компоненте 
    ${componentName}: параметр должен быть датой в формате YYYY-MM-DD`);
  }
// Если все хорошо
  return null;
};

Profile.propTypes = {
  img: PropTypes.string.isRequired,
  url: urlPropsType,
  birthday: birthdayPropsType,
  first_name: PropTypes.string,
  last_name: PropTypes.string,

};

//создаём дату рождения меньше текущей
const getBirthday = () => {
  const today = new Date(new Date() - 86401);
  return today.toLocaleDateString().split('.').reverse().join('-');
};

Profile.defaultProps = {
  img: "./images/profile.jpg",
  birthday: getBirthday(),
  first_name: "Имя пользователя",
  last_name: "Фамилия пользователя",
};
