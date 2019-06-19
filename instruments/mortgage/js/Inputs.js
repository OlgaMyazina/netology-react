const {InputNumber} = antd;

const Inputs = () => (
  <div>
    <label>
      Стоимость: <InputNumber  name="price" defaultValue="2000000"/> руб.
    </label>
    <br/>
    <label>
      На руках:
      <InputNumber  name="money" defaultValue="200000"/> руб.
    </label>
    <br/>
    <label>
      Срок кредита:
      <InputNumber  name="duration" defaultValue="5"/> лет.
    </label>
  </div>
);
