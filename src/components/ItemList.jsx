import React from 'react'
import { Button, Card } from 'react-bootstrap'

const ItemList = ( { product } ) => {
    return (
        <Card style={{ width: '20rem', height: '38rem', margin: '1rem' }}>
            <Card.Img className='img-fluid' variant="top" src={product.image} />
            <Card.Body style={{ paddingBottom: '0rem', paddingTop: '0rem' }}>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    <p style={{ height: '5rem'}}>{product.description}</p>
                    <h4>$ {product.price}</h4>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ItemList