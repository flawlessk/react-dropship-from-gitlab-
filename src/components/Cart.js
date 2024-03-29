import React, { useEffect, useState } from "react";
import { cart, removeFromCart } from "../API";
import { Paper , Box } from '@material-ui/core'


const Cart = () => {
    const [cartData, setCartData] = useState({});
    const [selectedIds, setSelectedIds] = useState([]);

    useEffect(() => {
        cart().then(res => {
            setCartData(res);
        })
    }, [])

    // const handleId = (id) => {
    //     const selected = [...selectedIds];
    //     const idx = selected.findIndex(e => e === id);
    //     if(idx > -1) {
    //         selected.splice(idx,1);
    //     } else {
    //         selected.push(id);
    //     }
    //     setSelectedIds(selected);
    // }

    const deleteItem = (id) => {
        removeFromCart(id).then(() => {
            const cart = JSON.parse(JSON.stringify(cartData));
            const cartItems = cart.cartItem.items;
            const idx = cartItems.findIndex(e => e === id);
            cartItems.splice(idx, 1);
            setCartData(cart);
        })
    }
    return (
        <>
            <div className="cart-wrapper">
                {cartData.cartItem && cartData.cartItem.items.map((item) => (
                <Box className="product-box"
                key={item.id}
            >
                <Box item xs={3} 
                    className="products-item" >
                <div className="checkbox-container">
                    <input
                    type="checkbox"
                    id="products__item--input"
                    className="products__item--input"
                    onChange={() => deleteItem(item.id)}
                    />
                </div>

                    <Paper className="products-paper">
                        <div className="products-image">
                            <img src={item.image} alt="img" />
                        </div>
                        <div className="products-info">
                            <div className="products-title">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <p>Quantity: {item.qty}</p>
                            </div>
                            <h3 className="products-supplier">
                                <span>By:</span>
                                <button>US-Supplier103</button>
                            </h3>
                        </div>
                        <div className="products-price">
                            <span>COST {item.price}$ </span>
                        </div>
                    </Paper>
                </Box>
            </Box>
                ))}
        </div>
    </>
    )
}
export default Cart;