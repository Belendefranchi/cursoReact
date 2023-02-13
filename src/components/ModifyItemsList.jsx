import React from 'react'
import ModifyItem from './ModifyItem'

const ModifyProductsList = ({ products, category, getProducts, setProducts, deleteProduct }) => {
    return (
        <div className='d-flex justify-content-center flex-wrap p-4'>
            {products.filter((product) => product.category === category).map((product) => {
                return (
                    <ModifyItem
                        key={product.id}
                        product={product}
                        getProducts={getProducts}
                        setProducts={setProducts}
                        deleteProduct={deleteProduct}
                    />
                );
            })}
        </div>
    )
}

export default ModifyProductsList
