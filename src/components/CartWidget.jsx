import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { PiShoppingCart } from "react-icons/pi";

const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext);

    return (
        <div>
            <Link className="cart-widget" to="/carrito">
            <PiShoppingCart className="cart-icon" />
            <span className="cart-badge"> {cantidadEnCarrito()} </span>
            </Link>
        </div>
    )
}


export default CartWidget