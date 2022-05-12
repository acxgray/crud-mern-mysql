import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from 'axios';

const EditProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const updateProduct = async(e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/products/${id}`, {
      title: title,
      price: price
    });
    navigate("/");
  }

  useEffect(() => {
    getProductById();
  },[]);

  const getProductById = async() => {
    const response = await axios.get(`http://localhost:5000/products/${id}`);
    setTitle(response.data.title);
    setPrice(response.data.price);
    
  }

  return (
    <div className="mt-3">
      <div className="mb-3">
        <Link to="/" className="btn btn-info text-white">Home</Link>
      </div>

      <Form onSubmit={updateProduct}>
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

export default EditProduct;

