import React, { createContext, useState } from "react";
import all_product from '../components/assets/Assets/all_product';


export const ShopContext = createContext(null);

const getdefaultcart = () => {

    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;

    }
    return cart;

}

const ShopContextProvider = (props) => {
    const [cartitems, setcartitems] = useState(getdefaultcart());
    const addtocart = (itemId) => {
        setcartitems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));

    }
    const removetocart = (itemId) => {
        setcartitems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }
    const gettotalcartamount = () => {
        let totalamount = 0;
        for (const item in cartitems) {
            if (cartitems[item] > 0) {
                let iteminfo = all_product.find((product) => product.id === Number(item));
                totalamount += iteminfo.new_price * cartitems[item];

            }


        }

        return totalamount;
    }
    const gettotalcartitems = () => {
        let totalitems=0;
        for (const item in cartitems)
        {
            if(cartitems[item]>0){

                totalitems+=cartitems[item];

            }
           
        } return totalitems;
        
    }




    const contextValue = { gettotalcartamount, all_product, cartitems, addtocart, removetocart,gettotalcartitems};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}
export default ShopContextProvider;