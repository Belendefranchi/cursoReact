import React from 'react'
import { Button, Card } from 'react-bootstrap'

const ModifyItem = ( { product, deleteProduct } ) => {
    console.log(product.id);
    return (
        <Card style={{ width: '20rem', height: '40rem', margin: '1rem' }}>
            <Card.Img className='img-fluid' variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text className='p-1' style={{ height: '6rem', margin: '1rem' }}>{product.description}</Card.Text>
                <Card.Title>$ {product.price}</Card.Title>
                <Button className="m-1" variant="primary">Modificar</Button>
                <Button className="m-1" variant="primary" onclick={deleteProduct(product.id)}>Eliminar</Button>
            </Card.Body>
        </Card>
    )
}

export default ModifyItem