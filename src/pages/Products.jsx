import './CSS/product.css'
import React,{useContext} from 'react'
import {ShopContext} from '../context/ShopContext'
import {useParams} from 'react-router-dom'
import Breadcrums from '../components/Breadcrums/Breadcrums'
import Productdisplay from '../components/productdisplay/Productdisplay'
import Descriptionbox from '../components/descriptionbox/Descriptionbox'
import Relatedproducts from '../components/relatedproducts/Relatedproducts'
const Products = () => {
  const {all_product}= useContext(ShopContext);
  const {productID}=useParams();
  const product=all_product.find((e)=>e.id===Number(productID));


  return (
    <div>
      <Breadcrums product={product}/>
      <Productdisplay product={product}/>
      <Descriptionbox/>
      <Relatedproducts/>
      
    </div>
  )
}

export default Products