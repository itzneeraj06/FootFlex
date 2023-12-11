import React from 'react'
import './newsletter.css'
const Newsletter = () => {
    return (
        <div className='newsletter'>
            <h1>
                Get Exclusive Offers in our Email
            </h1>
            <p>Subscribe to Our Newsletter Today!</p>
            <div>
                <input type="Email" placeholder='Enter Email here...' />
                <button>Subscribe</button>
            </div>

        </div>
    )
}

export default Newsletter