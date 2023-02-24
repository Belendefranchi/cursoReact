import React from 'react'
import { BsCart3 } from 'react-icons/bs'


const CartWidget = () => {
  return (
    <div className='pt-0 d-flex flex-column'>
      <label className="cart" id="cartQuantity"></label>
      <BsCart3 className="fs-2 me-4 link-secondary" />
    </div>
  )
}

export default CartWidget
