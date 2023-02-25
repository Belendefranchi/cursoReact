import React from 'react'
import { BsCart3 } from 'react-icons/bs'


const CartWidget = ({ cartQuantity }) => {
  return (
    <div className='pt-0 d-flex flex-column'>
      {cartQuantity > 0 && <span className="cart">{cartQuantity}</span>}
      <BsCart3 className="fs-2 me-4 link-secondary" />
    </div>
  )
}

export default CartWidget
