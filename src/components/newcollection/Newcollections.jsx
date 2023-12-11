import React from 'react'
import './newcollections.css'
import new_collections from '../assets/Assets/new_collections'
import Item from '../item/Item'
const Newcollections = () => {
  return (
    <div className='newcollections'>
        <h1>New Collections</h1> 
        <hr />
        <div className="collections">
            {
                new_collections.map((item,i)=>
                {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />

                })
            }

        </div>
    
    </div>
  )
}

export default Newcollections