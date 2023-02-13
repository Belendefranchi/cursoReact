import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React from 'react'
import { useState } from 'react'
import { db } from '../../../db/firebase-config'
import { collection, addDoc, getDocs } from 'firebase/firestore'

const HorizontalExample = ({ setProducts }) => {
  
  const [inputTitle, setInputTitle] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputCategory, setInputCategory] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  const createItem = async (e) => {
      e.preventDefault();
      const product = {
          title: inputTitle,
          price: inputPrice,
          category: inputCategory,
          description: inputDescription,
      };
      const productsCollectionRef = collection(db, "products");
      await addDoc(productsCollectionRef, product);
      const data = await getDocs(productsCollectionRef);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setInputTitle("");
      setInputPrice("");
      setInputCategory("");
      setInputDescription("");
  };

  return (
    <Form className="m-3" onSubmit={createItem}>

      <Form.Group as={Row} className="mb-3 justify-content-center">
        <Form.Label className="text-start" column sm={1}>
          Título
        </Form.Label>
        <Col sm={8}>
          <Form.Control type="text" value={inputTitle} onChange={(e) => setInputTitle(e.target.value)}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3 justify-content-center">
        <Form.Label className="text-start" column sm={1}>
          Categoría
        </Form.Label>
        <Col sm={8}>
          <Form.Control type="text" value={inputCategory} onChange={(e) => setInputCategory(e.target.value)}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3 justify-content-center">
        <Form.Label className="text-start" column sm={1}>
          Descripción
        </Form.Label>
        <Col sm={8}>
          <Form.Control type="text" value={inputDescription} onChange={(e) => setInputDescription(e.target.value)}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3 justify-content-center">
        <Form.Label className="text-start" column sm={1}>
          Precio
        </Form.Label>
        <Col sm={8}>
          <Form.Control type="number" min="1" value={inputPrice} onChange={(e) => setInputPrice(e.target.value)}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3 justify-content-center">
        <Col>
          <Button type="submit">Agregar Producto</Button>
        </Col>
      </Form.Group>

    </Form>
  );
};

export default HorizontalExample;