import React from 'react'
import CartList from './CartList';

function ItemListContainer({ carts, setCarts }) {

  if (carts.length === 0){
    return <h2 className="m-4">El carrito esta vacío</h2>
  }else{
    return (
      <div className='d-flex flex-column justify-content-center flex-wrap m-5'>
        {carts.map((cart) => {
          return (
              <CartList
                key={cart.id}
                cart={cart}
                setCarts={setCarts}
              />
          );
        })}
      </div>
    )
  }
  };

export default ItemListContainer

