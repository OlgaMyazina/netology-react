const {Form} = antd;

const MortgateCalculator = () => (
  <div>
    <Form action="">
      <Form.Item>
        <Autocomplete/>
      </Form.Item>
      <Form.Item>
        <Inputs/>
      </Form.Item>
      <Form.Item>
        <Button/>
      </Form.Item>
    </Form>
  </div>
);
