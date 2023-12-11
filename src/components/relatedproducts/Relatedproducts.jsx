import React from 'react'
import './relatedproducts.css'
import data_product from '../assets/Assets/data'
import Item from '../item/Item'
const Relatedproducts = () => {
  return (
    <div className='Relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproductsitem">
            {
                data_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>

                })
            }

        </div>
    </div>
  )
}

export default Relatedproducts