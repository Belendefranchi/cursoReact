import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React from 'react'
import { useState } from 'react'
import { db } from '../../../db/firebase-config'
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { Modal } from 'react-bootstrap';

const PurchaseOrder = ({ carts }) => {

  const [showModal, setShowModal] = useState(false);

  const [inputName, setInputName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [inputCity, setInputCity] = useState("");
  const [inputState, setInputState] = useState("");
  const [inputPayment, setInputPayment] = useState("");

  const handlePurchase = (e) => {
/*     e.preventDefault(); */
    setShowModal(true);
  };

  const handlePayment = async ( state ) => {
/*     e.preventDefault(); */
    if (state) {
      const form = {
        a_Usuario: ["Nombre: " + inputName, "Apellido: " + inputLastName, "E-mail: " + inputEmail, "Dirección: " + inputAddress, "Ciudad: " + inputCity, "Provincia: " + inputState],
        b_Pago: inputPayment,
        c_Cart: carts,
      };
      const ordersCollectionRef = collection(db, "orders");
      await addDoc(ordersCollectionRef, form);
      const data = await getDocs(ordersCollectionRef);
      console.log(data);
      
      console.log("Compra realizada con éxito");
      
      setInputName("");
      setInputLastName("");
      setInputEmail("");
      setInputAddress("");
      setInputCity("");
      setInputState("");
    }else{
      setShowModal(false);
    }
  };

  return (
    <>
      <h2 className='m-4'>Finaliza tu compra</h2>
      <p>Para finalizar tu compra completa tus datos personales:</p>
      <Form className="m-3" onSubmit={handlePurchase}>
        <Form.Group as={Row} className="mb-3 justify-content-center">
          <Form.Label className="text-start" column sm={1}>Nombre: </Form.Label>
          <Col sm={8}>
            <Form.Control type="text" value={inputName} onChange={(e) => setInputName(e.target.value)} required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 justify-content-center">
          <Form.Label className="text-start" column sm={1}>Apellido: </Form.Label>
          <Col sm={8}>
            <Form.Control type="text" value={inputLastName} onChange={(e) => setInputLastName(e.target.value)} required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 justify-content-center">
          <Form.Label className="text-start" column sm={1}>E-mail: </Form.Label>
          <Col sm={8}>
            <Form.Control type="text" value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 justify-content-center">
          <Form.Label className="text-start" column sm={1}>Dirección: </Form.Label>
          <Col sm={8}>
            <Form.Control type="text" min="1" value={inputAddress} onChange={(e) => setInputAddress(e.target.value)} required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 justify-content-center">
          <Form.Label className="text-start" column sm={1}>Ciudad: </Form.Label>
          <Col sm={8}>
            <Form.Control type="text" min="1" value={inputCity} onChange={(e) => setInputCity(e.target.value)} required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 justify-content-center">
          <Form.Label className="text-start" column sm={1}>Provincia: </Form.Label>
          <Col sm={8}>
            <Form.Control type="text" min="1" value={inputState} onChange={(e) => setInputState(e.target.value)} required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 justify-content-center">
          {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-3" required>
              <Form.Check
                inline
                label="Transferencia bancaria"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
                value="Transferencia bancaria"
                onChange={(e) => setInputPayment(e.target.value)}
              />
              <Form.Check
                inline
                label="Tarjeta de crédito"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
                value="Tarjeta de crédito"
                onChange={(e) => setInputPayment(e.target.value)}
              />
              <Form.Check
                inline
                label="Efectivo al momento de la entrega"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
                value="Efectivo al momento de la entrega"
                onChange={(e) => setInputPayment(e.target.value)}
              />
            </div>
          ))}
        </Form.Group>
        <Form.Group as={Row} className="mb-3 justify-content-center">
          <Col>
            <Button type="submit" onClick={handlePurchase}>Finalizar compra</Button>
          </Col>
        </Form.Group>
      </Form>
      <div className="modal show" style={{ display: 'block', position: 'initial' }}>
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Tu Pedido:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>data</p>
              <p>En breves nos pondremos en contacto para finalizar la compra.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={(e) => handlePayment(e.false)}>Cancelar</Button>
              <Button variant="primary" onClick={(e) => handlePayment(e.true)}>Realizar pedido</Button>
            </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default PurchaseOrder;