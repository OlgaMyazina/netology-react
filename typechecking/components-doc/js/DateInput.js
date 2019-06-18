'use strict';

const DateInput = ({label, name, onChange, value, required}) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input type="text" className="form-control" name={name} onChange={onChange}
             value={value} required={required} placeholder="YYYY-MM-DD"/>
    </div>
  )
};


const datePropType = (props, propName, componentName) => {
  const date = props[propName];
  const isDate = (typeof date === 'string') &&
    /^\d{4}-\d{2}-\d{2}$/.test(date);

  if (!isDate) {
    return new Error(`Неверный параметр ${propName} в компоненте 
    ${componentName}: параметр должен быть датой в формате YYYY-MM-DD`);
  }
// Если все хорошо
  return null;
};

DateInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: datePropType,
  required: PropTypes.bool,
};
const getDate = () => {
  const today = new Date();
  return today.toLocaleDateString().split('.').reverse().join('-');
};

DateInput.defaultProps = {
  label: "FieldDate",
  name: "fieldDate",
  onChange: (e) => e.preventDefault(),
  value: getDate(),
  required: false,
};


