import React from 'react'

const Card = ({product, isLoading}) => {


  return (
    <div className='containerCard'>
      <img src={product.images} alt="" className='imgProduct'/>
      <p>${product.price}</p>
    </div>
  )
}

export default Card
