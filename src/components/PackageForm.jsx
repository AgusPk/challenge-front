import { Form, Col } from "react-bootstrap";

function PackageForm({ handleChange, categories }) {
  return (
    <Form.Row>
      <Col>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre"
            name="name"
            onChange={handleChange}
          />
        </Form.Group>
      </Col>
      <Col>
        <Form.Group>
          <Form.Label>Categoria</Form.Label>
          <Form.Control
            placeholder="Categoria"
            as="select"
            onChange={handleChange}
            name="categoryId"
          >
            <option value={null}></option>
            {categories &&
              categories.map((category) => {
                return (
                  <option value={category.id} key={category.id}>
                    {category.name}
                  </option>
                );
              })}
          </Form.Control>
        </Form.Group>
      </Col>
    </Form.Row>
  );
}

export default PackageForm;
