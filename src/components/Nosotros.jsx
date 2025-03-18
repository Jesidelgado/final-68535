import React, { useEffect } from "react";
import imagen from "../assets/rufusoficina.jpg"

const Nosotros = () => {

    useEffect(() => {

        const clickear = () => {
        console.log("click")
    }
    window.addEventListener("click", clickear)

    return () => {
        window.removeEventListener("click", clickear)
    }

}, [])

    return (
        <div className="nosotros-container">
            <h1 className="main-title">Nosotros</h1>
            <p>CarExcellence es una empresa dedicada a la venta de repuestos automotrices. 
                Nos caracterizamos por la calidad de nuestros productos y la atención personalizada a nuestros clientes.
            </p>
            {/* Aquí agregamos la imagen */}
            <div className="nosotros-image-container">
                <img 
                    src={imagen} // Asegúrate de poner la ruta correcta
                    alt="Foto de la tienda o equipo de Carshop"
                    className="nosotros-image"
                />
            </div>

            {/* Aquí más texto informativo */}
            <div className="nosotros-text-content">
                <p>En CarExcellence, contamos con más de 10 años de experiencia en el sector, brindando soluciones a nuestros clientes con los mejores productos a precios competitivos. Nos enorgullece ofrecer una atención al cliente cercana y personalizada, siempre orientada a satisfacer sus necesidades.</p>

                <p>Visítanos en nuestra tienda o compra a través de nuestra página web, y descubre todo lo que tenemos para ti. Estamos aquí para ayudarte a mantener tu vehículo en perfecto estado.</p>
            </div>
        </div>
    );
}

export default Nosotros;