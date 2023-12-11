import React, { useContext } from 'react';
import './productdisplay.css';

import star_dull_icon from '../assets/Assets/star_dull_icon.png';
import star_icon from '../assets/Assets/star_icon.png';
import { ShopContext } from '../../context/ShopContext';
const Productdisplay = (props) => {
    const { product } = props;
    const {addtocart} = useContext(ShopContext);


    return (
        <div className='Productdisplay'>
            <div className="productdisplayleft">
                <div className="productdisplayimglist">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplayimg">
                    <img className='productdisplaymainimg' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplayright">
                <h1>{product.name}</h1>
                <div className="productdisplatrightstar">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                </div>
                <p>122</p>


                <div className="productdisplayrightprices">
                    <div className="productdisplayrightpriceold">${product.old_price}</div>
                    <div className="productdisplayrightpricenew">${product.new_price}</div>
                </div>
                <div className="productdisplayrightdescription">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus beatae odio sunt harum! Deleniti perspiciatis reprehenderit magnam iure. Et, quia.
                </div>
                <div className="productdisplayrightsize">
                    <h1>Select Size</h1>
                    <div className="productdisplayrightsizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXl</div>
                    </div>
                </div>
                <button onClick={()=>{addtocart(product.id)}}>Add to Cart</button>
                <p className='productdisplayrightcategory'>
                    <span>Category:</span>Women,t-Shirt,CropTop
                </p>
                <p className='productdisplayrightcategory'>
                    <span>Tags:</span>Modern,Latest
                </p>
            </div>


        </div>
    )
}

export default Productdisplay