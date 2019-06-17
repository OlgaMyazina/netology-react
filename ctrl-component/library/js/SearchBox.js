
const handlerChange = (callBack, event) => {
  event.preventDefault();
  callBack(event.target.value);
};

const SearchBox = (props) => {
  const {value, filterBooks} = props;
  return (
    <input type="text"
           placeholder="Поиск по названию или автору"
           value={value}
           onChange={(e) => handlerChange(filterBooks, e)}/>
  )
};


