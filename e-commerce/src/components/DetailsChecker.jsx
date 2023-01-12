import Form from 'react-bootstrap/Form';

function CheckInlineExample() {
  return (
    <Form>
      {['radio'].map((type) => (
        <div key={`inline-${type}`}>
          <Form.Check
            inline
            label=""
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label=""
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}
    </Form>
  );
}

export default CheckInlineExample;