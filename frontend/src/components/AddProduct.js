import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/products', {
      title: title,
      price: price
    });
    navigate("/");
  }

  return (
    <div className="mt-3">
      <div className="mb-3">
        <Link to="/" className="btn btn-info text-white">Home</Link>
      </div>

      <Form onSubmit={saveProduct}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter the Title"
            value={title}
            onChange={ (e) => setTitle(e.target.value) }>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter the Price"
            value={price}
            onChange={ (e) => setPrice(e.target.value) }>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
}

export default AddProduct;

