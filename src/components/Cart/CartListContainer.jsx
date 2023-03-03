import React, { useContext, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import CartList from './CartList';

function CartListContainer({ carts }) {

  const { getCartList } = useContext(CartContext);
  const { itemsQuantity } = useContext(CartContext);
  const { cartTotal } = useContext(CartContext);
  const { emptyCart } = useContext(CartContext);


  useEffect(() => {
    getCartList()
  }, []);

  

/*   const itemsQuantity = carts.reduce((total, cart) => {
    return total + parseInt(cart.quantity)
  }, 0);

  const cartTotal = carts.reduce((total, cart) => {
    return total + parseInt(cart.quantity)*parseFloat(cart.price)
  }, 0).toFixed(2); */

  if (carts.length === 0) {
    return <h2 className="m-4">Ooopss... el carrito esta vacío</h2>;
  }else{
    return (
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <h2 className='mt-4 mb-5'>Carrito de compra</h2>
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
        <Card className='w-75'>
          <Card.Footer className='text-end'>
            <Card.Text className='fs-5 fw-bold my-0'>Cantidad: {itemsQuantity} items</Card.Text>
            <Card.Text className='fs-3 fw-bold my-0'>Valor total: $ {cartTotal}</Card.Text>
          </Card.Footer>
        </Card>
        <div className='m-5 d-flex flex-row justify-content-center'>
          <Button className='mx-1 btn' variant='success' onClick={() => emptyCart()}>Vaciar carrito</Button>
          <Link to='/cursoReact/purchase'>
            <Button className='mx-1 btn' variant='success'>Continuar pedido</Button>
          </Link>
        </div>
      </div>
    );
  }
}


export default CartListContainer

