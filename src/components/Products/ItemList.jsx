import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { db } from '../../../db/firebase-config'
import { addDoc, collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore'


const ItemList = ( { product, carts } ) => {

    const getSelectValue = (id) =>{
        const qtys = document.querySelectorAll(".qty");
        for (const qty of qtys){
            if(qty.id === id){
                return qty.value;
            }
        }
        return false;
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
    };

    return (
        <Card style={{ width: '20rem', height: '46rem', margin: '1rem' }}>
            <Card.Link className='text-reset' to={`${product.id}`} key={product.id}>
                <Card.Img className='img-fluid' variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title className='fs-3 text-success'>{product.title}</Card.Title>
                    <Card.Text className='p-1 text-secondary' style={{ height: '6rem', margin: '1rem' }}>{product.description}</Card.Text>
                    <Card.Title className='p-1 fs-3 text-success'>$ {product.price}</Card.Title>
                </Card.Body>
            </Card.Link>
            <Card.Body className='d-flex px-1'>
                <Form.Select className='mx-1 w-50 qty' id={product.id} onChange={() => getSelectValue(product.id)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </Form.Select>
                <Button className='mx-1 w-75 btn' variant='success' id={product.id} onClick={() => addToCart(product, carts)}>Agregar al carrito</Button>
            </Card.Body>
        </Card>
    )
};

export default ItemList