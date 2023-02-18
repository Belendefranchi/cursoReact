import React from 'react'
import { deleteDoc, doc } from 'firebase/firestore'
import { Card } from 'react-bootstrap'
import { BsTrash } from 'react-icons/bs'
import { db } from '../../../db/firebase-config'

const CartList = ( { cart, getCartList, productTotal } ) => {
    
    const removeItem = async (product) => {
        const productDocRef = doc(db, "carts", product)
        await deleteDoc(productDocRef)
        getCartList()
    }

    return (
        <div className='w-100 d-flex justify-content-center align-items-center'>
            <Card className='w-75 m-1'>
                <Card.Body className='p-1 d-flex justify-content-center align-items-center'>
                    <Card.Text className='fs-5 my-0 px-2 w-50 text-start'>{cart.title}</Card.Text>
                    <Card.Text className='fs-5 my-0 w-25'>$ {cart.price}</Card.Text>
                    <Card.Text className='fs-5 my-0 w-25'>{cart.quantity}</Card.Text>
                    <Card.Text className='fs-5 my-0 w-25 fw-bold'>$ {productTotal()}</Card.Text>
                    <Card.Text className='fs-5 my-0 w-25'><BsTrash onClick={() => removeItem(cart.id)} /></Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CartList
