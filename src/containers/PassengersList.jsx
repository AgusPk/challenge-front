import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import PassengerRepository from "../repositories/PassengerRepository";
import { BsBoxArrowUp, BsFillEyeFill } from "react-icons/bs";

function PassengersList() {
  const [passengers, setPassengers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let apiPassengers = await PassengerRepository.getPassengers();
      setPassengers(apiPassengers);
    }
    fetchData();
  }, []);

  const handleClick = async (e, id) => {
    e.preventDefault()
    await PassengerRepository.deletePassenger(id)
    const filteredPassengers = filterPassengers(id)
    setPassengers(filteredPassengers)
  }
  const filterPassengers = (id) =>{
    return passengers.filter(passenger => passenger.id !== id)
  }
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Pasajero</th>
          <th>Vuelo</th>
          <th>Detalle</th>
          <th>Check out</th>
        </tr>
      </thead>
      <tbody>
        {passengers &&
          passengers.map((passenger) => (
            <tr key={passenger.id}>
              <td>{passenger.name}</td>
              <td>{passenger.code}</td>
              <td>
                <Link to={`/passenger/${passenger.id}`}>
                  <Button variant="secondary"><BsFillEyeFill/></Button>
                </Link>
              </td>
              <td>
                <Button variant="warning" onClick={e => handleClick(e, passenger.id)}><BsBoxArrowUp/></Button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default PassengersList;
