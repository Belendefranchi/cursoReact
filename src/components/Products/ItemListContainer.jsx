import React from 'react'
import ItemList from './ItemList';

function ItemListContainer({ products, category, carts }) {

    return (
      <div className='d-flex justify-content-center flex-wrap p-4'>
        {products.filter((product) => product.category === category).map((product) => {
          return (
            <ItemList
              key={product.id}
              product={product}
              carts={carts}
            />
          );
        })}
      </div>
    )
  };

export default ItemListContainer
