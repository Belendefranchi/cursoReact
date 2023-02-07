import React from 'react'
import { Link } from 'react-router-dom';
import ItemList from './ItemList';

function ItemListContainer({ products }) {
  return (
    <div className='d-flex flex-wrap justify-content-center p-4'>
    {products.map((product) => {
        return (
            <Link to={`${product.id}`} key={product.id}>
                <ItemList key={product.id} product={product} />
            </Link>
        );
    })}
    </div>
  )
}

export default ItemListContainer

