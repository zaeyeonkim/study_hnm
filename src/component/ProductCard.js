import React from 'react'
import { useNavigate } from 'react-router'

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`ß/product/${item.id}`)
  }
  return (
    <div className='product-area' onClick={showDetail}>
      <img src={item?.img} />
      <div>Conscious Choice</div>
      <div>{item?.title}</div>
      <div>₩ {item?.price}</div>
      <div>{item?.new == true?"신제품" : ""}</div>
    </div>
  )
}

export default ProductCard
