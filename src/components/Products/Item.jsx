import React, { useContext } from 'react'
import { Button, Card, Form, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { CartContext } from '../Cart/CartContext';

const Item = ( { product, carts } ) => {

    const { addToCart } = useContext(CartContext);
    const { smShow } = useContext(CartContext);
    const { setSmShow } = useContext(CartContext);

    return (
        <>
            <Card className='m-2'>
                <Card.Body>
                    <Card.Img className='img-fluid' variant="top" src={product.image} />
                    <Card.Title className='fs-5 text-secondary'>{product.title}</Card.Title>
                    <Card.Title className='p-1 fs-4 fw-bold text-secondary'>$ {product.price}</Card.Title>
                    <Link to={`${product.id}`} key={product.id}>
                        <Button className='mx-1 w-75 btn' variant='success'>Ver más</Button>
                    </Link>
                </Card.Body>
                <Card.Footer className='d-flex px-1'>
                    <Form.Select className='mx-1 w-50 qty' id={product.id} onChange={() => getSelectValue(product.id)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </Form.Select>
                    <Button className='mx-1 w-75 btn' variant='success' id={product.id} onClick={() => addToCart(product, carts)}>Agregar al carrito</Button>
                </Card.Footer>
            </Card>
            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm">
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Muchas gracias!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-center'>El producto a sido agregado al carrito!</Modal.Body>
            </Modal>
        </>
    )
};

export default Item