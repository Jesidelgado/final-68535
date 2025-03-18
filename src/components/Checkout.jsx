import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config"

const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();
    
    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido);

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            });
    }

    if (pedidoId) {
        return (
            <div className="checkout-container">
                <h1 className="checkout-main-title">Muchas gracias por tu compra</h1>
                <p className="checkout-pedido">Tu número de pedido es: {pedidoId}</p>
            </div>
        )
    }

    return (

        <div className="checkout-container">
            <h1 className="checkout-main-title">Finalizar compra</h1>
            <form className="checkout-formulario" onSubmit={handleSubmit(comprar)}>

                <input className="checkout-input" type="text" placeholder="Ingresa tu nombre" {...register("nombre")}/>
                <input className="checkout-input" type="email" placeholder="Ingresa tu e-mail"{...register("email")} />
                <input className="checkout-input" type="phone" placeholder="Ingresa tu teléfono"{...register("telefono")}/>

                <button className="checkout-enviar" type="submit">Comprar</button>
            </form>
        </div>
    )
}


export default Checkout