import React from 'react'
import Hero from '../components/hero/Hero.jsx'
import Popular from '../components/popular/Popular.jsx'
import Offers from '../components/offers/Offers.jsx'
import Newcollections from '../components/newcollection/Newcollections.jsx'
import Newsletter from '../components/newsletter/Newsletter.jsx'
const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <Newcollections/>
      <Newsletter/>

        
    </div>
  )
}

export default Shop