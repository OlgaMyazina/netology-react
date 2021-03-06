'use strict';

const RadioGroup = props => {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <div>
        {props.list.map((item, i) => (
          <div key={`${props.name}_${i}`} className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name={props.name} onChange={props.onChange}
                   value={item} checked={item == props.value} id={`radio_${props.name}_${i}`}/>
            <label className="form-check-label" htmlFor={`radio_${props.name}_${i}`}>{item}</label>
          </div>
        ))}
      </div>
    </div>
  )
};

RadioGroup.propTypes = {
  label: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};

TextInput.defaultProps = {
  label: "Наименование",
  list: ['one', 'two'],
  name: "radioButton",
  onChange: (e) => e.preventDefault(),
  value: "one",
  required: false,
};