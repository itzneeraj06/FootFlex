import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../assets/Assets/cart_cross_icon.png';
import './cartitem.css'
import Ordercompleted from '../ordercompleted/Ordercompleted';
const Cartitem = () => {
  const { gettotalcartamount,all_product, cartitems, removefromcart } = useContext(ShopContext);

  return (
    <div className='Cartitem'>
      <div className="cartitemformatmain">
        <p>Products</p>
        <p>Title</p>
        <p>Prices</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      <div >
        {all_product.map((e,i) => {
          if (cartitems[e.id] > 0) {
            return (
              <div key={i}>
                <div className="cartitemformatformatmain">
                  <img src={e.image} alt="" className='carticonproducticon' />
                  <p>{e.name}</p>
                  <p>${e.new_price}</p>
                  <button className='cartitemquantity'>{cartitems[e.id]}</button>
                  <p>${e.new_price * cartitems[e.id]}</p>
                  <img className='removeicon' src={remove_icon} alt="" onClick={() => { removefromcart(e.id) }} />
                </div>
                <hr />
              </div>)

          }
          return null;

        })}
        <div className="cartitemdown">
          <div className="cartitemtotal">
            <h1>cart total</h1>
            <div><div className="cartitemtotalitem">
              <p>Subtotal</p>
              <p>${gettotalcartamount()}</p></div>
              <hr /><div className="carttotalitem">
                <p>Shipping Fee</p>
                <p>/Free</p></div>
              <hr />
              <div className="cartitemtotalitem">
                <h3>Total</h3>
                <h3>${gettotalcartamount()}</h3></div></div>
            <button>Proceed to Checkout</button>

          </div>
          <div className="cartitemspromo">
            <p>If you have a Promocode?</p>
            <div className="cartitempromobox">
              <input type="text" placeholder='enter promocode here' />
              <button>Submit</button>

            </div>
          </div>
        </div>
      </div>



      <Ordercompleted/>


    </div>
  )
}

export default Cartitem