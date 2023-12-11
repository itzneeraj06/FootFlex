import React from 'react'
import './breadcrums.css'
import arrow_icon from '../assets/Assets/breadcrum_arrow.png'
const Breadcrums = (props) => {
    const {product}=props;
  return (
    <div className='breadcrums'>
        Home <img src={arrow_icon} alt="" /> Shop <img src={arrow_icon} alt="" />{product.category} <img src={arrow_icon} alt="" />{product.name}




    </div>
  )
}

export default Breadcrums