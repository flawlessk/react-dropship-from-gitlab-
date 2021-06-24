import React, { useEffect } from "react";
import { cart } from "../API";
const Cart = () => {
   

    useEffect(() => {
        cart();
    }, [])
    return (
        <h2 className="user-cart">this is Cart page</h2>
    )
}
export default Cart;