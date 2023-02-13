import React, { useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { db } from '../../db/firebase-config'
import { addDoc, collection } from 'firebase/firestore'


const ItemList = ( { product } ) => {

    const getSelectValue = (id) =>{
        const qtys = document.querySelectorAll(".qty");
        for (const qty of qtys){
            if(qty.id == id){
                console.log(qty.value)
                console.log(id);
                return qty.value;
            }
        }
        return false;
    }

    const addToCart = async (product) => {
        const add = {
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: getSelectValue(product.id)
        };
        const productsCollectionRef = collection(db, "carts");
        await addDoc(productsCollectionRef, add);
    };

    return (
        <Card style={{ width: '20rem', height: '46rem', margin: '1rem' }}>
            <Link className='text-reset' to={`${product.id}`} key={product.id}>
                <Card.Img className='img-fluid' variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title className='fs-3 text-success'>{product.title}</Card.Title>
                    <Card.Text className='p-1 text-secondary' style={{ height: '6rem', margin: '1rem' }}>{product.description}</Card.Text>
                    <Card.Title className='p-1 fs-3 text-success'>$ {product.price}</Card.Title>
                </Card.Body>
            </Link>
            <Card.Body className='d-flex px-1'>
                <Form.Select className='mx-1 w-50 qty' id={product.id} onChange={() => getSelectValue(product.id)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </Form.Select>
                <Button className='mx-1 w-75 btn' variant='success' id={product.id} onClick={() => addToCart(product)}>Agregar al carrito</Button>
            </Card.Body>
        </Card>
    )
};

export default ItemList