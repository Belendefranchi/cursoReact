import { addDoc, collection } from 'firebase/firestore';
import React from 'react'
import { db } from '../../../db/firebase-config'
import Form from '../Form/Form'

const PurchaseOrder = ({ carts }) => {

  console.log(carts);

/*     const productTotal = () => {
      return (parseInt(cart.quantity) * parseFloat(cart.price)).toFixed(2);
    }; */
    const purchase = async () => {
      console.log('Compra realizada');
      const ordersCollectionRef = collection(db, "orders");
      const order = {
        carrito: carts,
      };
      await addDoc(ordersCollectionRef, order);
    }
    /* purchaseOrder(); */
  purchase();
  return (
    <div>
      <Form />
    </div>
  )
}

export default PurchaseOrder
