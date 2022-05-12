import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Table } from "react-bootstrap";

const ProductList = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async () => {
    const response = await axios.get('http://localhost:5000/products');
    setProduct(response.data);
  }

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:5000/products/${id}`);
    getProducts();
  }

  return (
    <div className="mt-3">
      <Link to="/add" className="btn btn-primary">Add New Product</Link>
      <Table striped hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { products.map((product, index) => (
            <tr key={product.id}>
              <td>{ index + 1 }</td>
              <td>{ product.title }</td>
              <td>{ product.price }</td>
              <td>
                <Link to={`/edit/${product.id}`} className="btn btn-warning">Edit</Link>
                <Button 
                  variant="danger"
                  onClick={() => deleteProduct(product.id) }
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ProductList;

