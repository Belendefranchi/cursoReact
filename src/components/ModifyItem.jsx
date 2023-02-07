import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ( { product, setProduct, deleteProduct } ) => {
    return (
        <Card style={{ width: '20rem', height: '38rem', margin: '1rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body style={{ paddingBottom: '0rem', paddingTop: '0rem' }}>
                <Card.Title>
                    <Link to={`${product.title}`}>{product.title}</Link>
                </Card.Title>
                <Card.Text>
                    <p style={{ height: '5rem'}}>{product.description}</p>
                    <h4>${product.price}</h4>
                </Card.Text>
                <Button className="m-1" variant="primary">Modificar</Button>
                <Button className="m-1" variant="primary" onclick={deleteProduct}>Eliminar</Button>
            </Card.Body>
        </Card>
    )
}

export default Item

/*         <>
            <img src={product.image}></img>
            <h4>{product.title}</h4>
            <p>$ {product.price}</p>
            <p>{product.description}</p>
        </> */