const TextRenderLine = ({value, onChange}) => {
  return (
    <div className="type-text">
      Наберите текст
      <textarea name="text"
                id="font-text"
                cols="30"
                rows="2"
                placeholder="Введите текст для футболки"
                value={value}
                onChange={(e) => {
                  handleChange(e, onChange)
                }}/>

    </div>
  );
};

const handleChange = (event, onChange) => {
  onChange(event.target.value);
};
