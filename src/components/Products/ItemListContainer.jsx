import React from 'react'
import ItemList from './ItemList';

function ItemListContainer({ products, category, carts, getCartList, updateCartQuantity }) {

    return (
      <div className='d-flex justify-content-center flex-wrap p-4'>
        {products.filter((product) => product.category === category).map((product) => {
          return (
            <ItemList
            key={product.id}
            product={product}
            carts={carts}
            getCartList={getCartList}
            updateCartQuantity={updateCartQuantity}
            />
            );
          })}
      </div>
    )
  };

export default ItemListContainer

