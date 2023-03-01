import React, { useState } from 'react'
import { Button, Card, Form, Modal } from 'react-bootstrap'
import { db } from '../../../db/firebase-config'
import { addDoc, collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore'
import { Link } from 'react-router-dom';


const Item = ( { product, carts, getCartList, updateCartQuantity } ) => {
    
    const getSelectValue = (id) =>{
        const qtys = document.querySelectorAll(".qty");
        for (const qty of qtys){
            if(qty.id === id){
                return qty.value;
            }
        }
        return false;
    }

    const [smShow, setSmShow] = useState(false);

    const addModal = () => {
        setSmShow(true);
    }
    
    const addToCart = async (product, carts) => {
        const itemIndex = carts.find((cart) => cart.product === product.id);
    
        if (itemIndex) {
            console.log("El producto ya existe en el carrito");

            console.log("product.id: " + product.id)
            console.log("product.title: " + product.title)
            console.log("product.price: " + product.price)
            console.log("product.quantity: " + getSelectValue(product.id))
        
            // Buscar el documento correspondiente al producto
            const querySnapshot = await getDocs(
                query(collection(db, "carts"), where("product", "==", product.id))
            );
        
            querySnapshot.forEach((cart) => {
                // Actualizar la cantidad en el documento correspondiente
                const cartsDocRef = doc(db, "carts", cart.id);
                const updateItem = {
                quantity: parseInt(cart.data().quantity) + parseInt(getSelectValue(product.id)),
                };
                updateDoc(cartsDocRef, updateItem);
            });
        } else {
            console.log("No existe el producto en el carrito");

            const cartsCollectionRef = collection(db, "carts");
            const addItem = {
                product: product.id,
                title: product.title,
                price: product.price,
                quantity: getSelectValue(product.id),
            };
            await addDoc(cartsCollectionRef, addItem);
            console.log("product.id: " + product.id)
            console.log("product.title: " + product.title)
            console.log("product.price: " + product.price)
            console.log("product.quantity: " + getSelectValue(product.id))
        }
        addModal();
        getCartList();
        updateCartQuantity(carts);
    };

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