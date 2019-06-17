const FontSelector = ({fonts, selectedFont, onSelect, selected}) => {
  return (
    <div>
      <div className="font-picker">
        Выберите шрифт
      </div>
      {fonts.map(font => {
        return (
          <div className="grid center font-item">
            <input type="radio"
                   name="font"
                   value={font.name}
                   id={font.name}
                   onClick={(e) => handleSelect(e, onSelect, font)}
                   selected={selected === font.name}/>
            <label htmlFor={font.name} className="grid-1">
              <PictureFont text="abc" path={font.path}/>
            </label>
          </div>
        )
      })}
    </div>
  )
};

const handleSelect = (event, callBack, font) => {
  callBack(font);
};
