import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React from 'react'
import { useState } from 'react'
import { db } from '../../../db/firebase-config'
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { Card, Modal, Table } from 'react-bootstrap';

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
    e.preventDefault();
    setShowModal(true);
  };

  const handlePayment = async ( state ) => {
    if (state) {
      const form = {
        a_Usuario: ["Nombre: " + inputName, "Apellido: " + inputLastName, "E-mail: " + inputEmail, "Dirección: " + inputAddress, "Ciudad: " + inputCity, "Provincia: " + inputState],
        b_Pago: inputPayment,
        c_Cart: carts,
      };
      const ordersCollectionRef = collection(db, "orders");
      await addDoc(ordersCollectionRef, form);
      /* const data = await getDocs(ordersCollectionRef);
      console.log(data); */
      
      console.log("Compra realizada con éxito");
      
      setInputName("");
      setInputLastName("");
      setInputEmail("");
      setInputAddress("");
      setInputCity("");
      setInputState("");
      
      setShowModal(false);

    }else{
      setShowModal(false);
    }
  };

  return (
    <>
      {/*------------------------- TITLE -------------------------*/}
      <div className='w-100'>
        <h2 className='mt-4 mb-5'>Finaliza tu compra</h2>
      </div>
      <div className='d-flex'>
        {/*------------------------- FORM -------------------------*/}
        <div className='w-75 ms-5 text-start'>
          <h5 className='mb-5'>Para finalizar tu compra completa tus datos personales:</h5>
          <Form className='d-flex flex-column' onSubmit={handlePurchase}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label className="text-start" column sm={2}>Nombre: </Form.Label>
              <Col sm={8}>
                <Form.Control type="text" value={inputName} onChange={(e) => setInputName(e.target.value)} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label className="text-start" column sm={2}>Apellido: </Form.Label>
              <Col sm={8}>
                <Form.Control type="text" value={inputLastName} onChange={(e) => setInputLastName(e.target.value)} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label className="text-start" column sm={2}>E-mail: </Form.Label>
              <Col sm={8}>
                <Form.Control type="text" value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label className="text-start" column sm={2}>Dirección: </Form.Label>
              <Col sm={8}>
                <Form.Control type="text" min="1" value={inputAddress} onChange={(e) => setInputAddress(e.target.value)} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label className="text-start" column sm={2}>Ciudad: </Form.Label>
              <Col sm={8}>
                <Form.Control type="text" min="1" value={inputCity} onChange={(e) => setInputCity(e.target.value)} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label className="text-start" column sm={2}>Provincia: </Form.Label>
              <Col sm={8}>
                <Form.Control type="text" min="1" value={inputState} onChange={(e) => setInputState(e.target.value)} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 align-items-center">
              <Form.Label className="text-start" column sm={5}>Selecciona un método de pago: </Form.Label>
              {['radio'].map((type) => (
                <Col sm={5}>
                  <div key={`inline-${type}`} className="d-flex flex-column align-items-start">
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
                </Col>
              ))}
            </Form.Group>
            <Form.Group as={Row} className="my-4">
              <Col sm={10} className="d-flex justify-content-end">
                <Button className="btn btn-success" type="submit" onClick={handlePurchase}>Finalizar compra</Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
        {/*------------------------- TABLE -------------------------*/}
        <div className='w-50 me-5 text-start'>
          <h5 className='mb-5'>Resumen de tu pedido</h5>
          <Table>
            <thead>
              <tr>
                <th className='w-50 text-start'>Items</th>
                <th className='w-25 text-center'>Unidades</th>
                <th className='w-25 text-end'>Subtotal</th>
              </tr>
            </thead>
            {carts.map((cart) => {
              const productTotal = () => {
                return (parseInt(cart.quantity) * parseFloat(cart.price)).toFixed(2);
              };
              return (
                <tbody>
                  <tr>
                    <td className='w-50 text-start'>{cart.title}</td>
                    <td className='w-25 text-center'>{cart.quantity}</td>
                    <td className='w-25 text-end'>$ {productTotal()}</td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        </div>
      </div>
      {/*------------------------- MODAL -------------------------*/}
      <div className="modal show" style={{ display: 'block', position: 'initial' }}>
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Tu Pedido:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>En breves nos pondremos en contacto para finalizar la compra.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => handlePayment(false)}>Cancelar</Button>
              <Button variant="primary" onClick={() => handlePayment(true)}>Realizar pedido</Button>
            </Modal.Footer>
        </Modal>
      </div>
    </>
  )
};

export default PurchaseOrder;