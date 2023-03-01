import React, { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartList from './CartList';

function CartListContainer({ carts, getCartList }) {

  useEffect(() => {
    getCartList()
  }, []);

  const itemsQuantity = carts.reduce((total, cart) => {
    return total + parseInt(cart.quantity)
  }, 0);

  const cartTotal = carts.reduce((total, cart) => {
    return total + parseInt(cart.quantity)*parseFloat(cart.price)
  }, 0).toFixed(2);

  return(

    <div className='d-flex flex-column justify-content-center align-items-center'>

      {carts.length === 0 && <h2 className="m-4">El carrito esta vacío</h2>}
      
      {carts.map((cart) => {
        const productTotal = () => {
          return (parseInt(cart.quantity) * parseFloat(cart.price)).toFixed(2);
        };
        return (
          <CartList
            key={cart.id}
            cart={cart}
            getCartList={getCartList}
            productTotal={productTotal}
          />
        );
      })}
      <>
        <Card className='w-75'>
          <Card.Footer className='text-end'>
            <Card.Text className='fs-5 fw-bold my-0'>Cantidad: {itemsQuantity} items</Card.Text>
            <Card.Text className='fs-3 fw-bold my-0'>Valor total: $ {cartTotal}</Card.Text>
          </Card.Footer>
        </Card>
        <div className='m-5 d-flex flex-row justify-content-center'>
          <Button className='mx-1 btn' variant='success' onClick={() => emptyCart()}>Vaciar Carrito</Button>
          <Link to='/cursoReact/purchase'>
            <Button className='mx-1 btn' variant='success'>Continuar compra</Button>
          </Link>
        </div>
      </>
    </div>
  )
}


export default CartListContainer

