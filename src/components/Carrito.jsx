import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";


const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();

    }

    return (
        <div className="carrito-container">
            <h1 className="carrito-main-title">Carrito</h1>

            {carrito.length > 0 ? (
                carrito.map((prod) => (
                    <div key={prod.id} className="carrito-item">
                        <div className="carrito-item-image">
                            <img src={prod.imagen} alt={prod.titulo} />
                        </div>
                        <div className="carrito-item-details">
                            <h3 className="carrito-item-title">{prod.titulo}</h3>
                            <br />
                            <p className="carrito-item-price">Precio unit: ${prod.precio}</p>
                            <p className="carrito-item-quantity">Cantidad: {prod.cantidad}</p>
                            <p className="carrito-item-total">Precio Total: ${prod.precio * prod.cantidad}</p>
                        </div>
                    </div>
                ))
            ) : (
                <h2 className="carrito-empty">El carrito está vacío :(</h2>
            )}

            {carrito.length > 0 && (
                <>
                    <h2 className="carrito-total-price">Precio total: ${precioTotal()}</h2>
                    <div className="carrito-actions">
                        <button className="carrito-button" onClick={handleVaciar}>Vaciar</button>
                        <Link to="/checkout" className="carrito-checkout-link">Finalizar compra</Link>
                    </div>
                </>
            )}
        </div>
    );
}
export default Carrito