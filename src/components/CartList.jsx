import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../db/firebase-config';


const CartList = ( { cart, setCarts } ) => {

    const cartsCollectionRef = collection(db, "carts");
    const getCartList = async () => {
        const querySnapshot = await getDocs(cartsCollectionRef);
        const docs = querySnapshot.docs.map((doc) => ({...doc.data()})); 
        setCarts(docs);
    };

    useEffect(() => {
        getCartList();
    }, []);

    const productTotal = () => {
        return (parseFloat(cart.quantity) * parseFloat(cart.price))
    };

    return (
        <div className='d-flex justify-content-center align-items-center'>
            <Card style={{ width: '50rem', height: '3rem', margin: '0.5rem' }}>
                <Card.Body className='p-1 d-flex justify-content-center align-items-center'>
                    <Card.Text className='fs-5 text-success my-0 w-50 text-start'>{cart.title}</Card.Text>
                    <Card.Text className='fs-5 text-success my-0 w-25'>$ {cart.price}</Card.Text>
                    <Card.Text className='fs-5 text-success my-0 w-25'>{cart.quantity}</Card.Text>
                    <Card.Text className='fs-5 text-success my-0 w-25'>$ {productTotal()}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
};

export default CartList
