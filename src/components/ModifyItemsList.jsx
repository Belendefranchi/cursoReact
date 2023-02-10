import React from 'react'
import { Link } from 'react-router-dom';
import Form from './Form/Form'
import ModifyItem from './ModifyItem'

const ModifyProductsList = ({ products, setProducts }) => {
    return (
        <div>
            <Form setProducts={ setProducts } />
            <div className='d-flex justify-content-center flex-wrap p-4'>
                {products.map((product) => {
                    return (
                        <>
                            <Link to={`${product.id}`} key={product.id}>
                                <ModifyItem key={product.id} product={product} />
                            </Link>
                        </>
                    );
                })}
            </div>
        </div>
    )
}

export default ModifyProductsList
