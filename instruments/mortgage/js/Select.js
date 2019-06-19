const {Select} = antd;

const {Option} = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}

const Autocomplete = () => (
  <div>
    Тип квартиры:<br/>
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder="Выберите тип квартиры"
      optionFilterProp="children"
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onSearch={onSearch}
      filterOption={(input, option) =>
        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      <Option value="Квартира в новостройке">Квартира в новостройке</Option>
      <Option value="Готовая квартира">Готовая квартира</Option>
      <Option value="Загородный дом">Загородный дом</Option>
    </Select>

  </div>
);

