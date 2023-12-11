import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
// import cart_cross_icon from './components/assets/Assets/cart_cross_icon.png'
const Cartitem = () => {
    const {all_product,cartitems,removefromcart}=useContext(ShopContext);

  return (
    <div className='Cartitem'>
        <div className="cartitemformatmain">
            <p>Products</p>
            <p>Title</p>
            <p>Prices</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Total</p>
            <p>Remove</p>   
        </div>
        <hr />
        <div>
        {all_product.map((e)=>{
            if(cartitems[e.id]>0){
              return  (
              <div>
                <div className="cartitemformat">
                    <img src={e.image} alt="" className='carticonproducticon'/>
                    <p>{e.name}</p>
                    <p>{e.new_price}</p>
                    <button className='cartitemquantity'>{cartitems[e.id]}</button>
                    <p>{e.new_price*cartitems[e.id]}</p>
                    <img src="" alt="" onClick={()=>{removefromcart(e.id)}}/>
                </div>
                <hr />
            </div>)
            
            }
            else{
              return null;
            }
        })}
        </div>


    </div>
  )
}

export default Cartitem