import React from 'react';
import { dummyData, Item } from './Row'; // Import dummyData function and Item type
import Table from 'react-bootstrap/Table';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  // Call dummyData to get an array of items
  const items: Item[] = dummyData();

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td><img src={item.img} style={{ width: '50px', height: '50px' }} /></td>
          </tr>
        ))}
      </tbody>
    </Table >
   
  );
}

export default App;
