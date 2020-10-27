import { Table, Button, Form, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import PackageForm from "../components/PackageForm";
import PassengerRepository from "../repositories/PassengerRepository";
import PackagesRepository from "../repositories/PackagesRepository";
import { BsBoxArrowUp } from "react-icons/bs";

function PassengerProfile(props) {
  const [passenger, setPassenger] = useState({});
  const [packages, setPackages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [pack, setPackage] = useState({
    name: "",
    categoryId: null,
  });

  useEffect(() => {
    async function fetchData() {
      let apiPassenger = await PassengerRepository.showPassenger(
        props.match.params.id
      );
      setPassenger(apiPassenger);
      setPackages(apiPassenger.packages);
      let apiCategories = await PackagesRepository.getCategories();
      setCategories(apiCategories);
    }
    fetchData();
  }, []);

  const handleChange = (e) => {
    setPackage({
      ...pack,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pack.name && pack.categoryId) {
      const createdPackage = await PackagesRepository.createPackage({
        ...pack,
        passengerId: passenger.id,
      });
      setPackages([...packages, createdPackage]);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    await PassengerRepository.deletePassenger(passenger.id);
    props.history.push("/");
  };

  return (
    <Container>
      <div className="d-flex justify-content-between">
        <div>
          <h3>Pasajero: </h3>
          <span>{passenger.name}</span>
        </div>
        <div>
          <h3>Vuelo: </h3>
          <span>{passenger.code}</span>
        </div>
        <div>
          <h3>Checkout</h3>
          <Button variant="warning" onClick={handleClick}>
            <BsBoxArrowUp />
          </Button>
        </div>
      </div>
    {packages.length ? 
    <>
      <h2>Paquetes</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoría</th>
          </tr>
        </thead>
        <tbody>
          {packages &&
            packages.map((pack) => (
              <tr key={pack.id}>
                <td>{pack.name}</td>
                <td className="columCategoryEditTable">
                  {pack.PackageCategory.name}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      </>
      :
      <p>No hay paquetes asignados</p>
      }
      {packages && packages.length < 3 && (
        <>
        <h3>Agregar Paquetes</h3>
        <Form onSubmit={handleSubmit}>
          <PackageForm handleChange={handleChange} categories={categories} />
          <Button variant="primary" type="submit">
          Agregar
          </Button>
          </Form>
          </>
          )}
    </Container>
  );
}

export default PassengerProfile;
