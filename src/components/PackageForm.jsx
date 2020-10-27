import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function PackageForm({ handleChange, categories }) {
  return (
    <>
      <Form.Group>
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nombre"
          name="name"
          onChange={handleChange}
        />
      </Form.Group>
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
    </>
  );
}

export default PackageForm;
