'use strict';

const HexInput = props => {

  function handlerChange(event) {
    props.onChange(event.target.value);
  }

  return (
    <input
      value={props.value}
      onChange={handlerChange}
      type="text"
      className="hex-field js-hex-field"
      placeholder="#000000" />
  );
};
