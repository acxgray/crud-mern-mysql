import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import EditProduct from "./components/EditProduct";

function App() {
  return (
    <Container>
      <Row>
        <Col lg={12}>
          <Router>
            <Routes>
              <Route exact path="/" element={<ProductList />} />
              <Route path="/add" element={<AddProduct />} />
              <Route path="/edit/:id" element={<EditProduct />} />
            </Routes>
          </Router>
        </Col>
      </Row>
    </Container>

  );
}

export default App;
