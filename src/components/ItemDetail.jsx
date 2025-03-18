import { CartContext } from "../context/CartContext";
import { toCapital } from "../helpers/toCapital"
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";

const ItemDetail = ( {item} ) => {

    const { carrito, agregarAlCarrito } = useContext(CartContext);
    console.log(carrito);

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () =>{
        cantidad > 1 && setCantidad(cantidad - 1)
    }
    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

    return (
        <div className="container">
            <div className="producto-detalle">
            <h3 className="titulo">{item.titulo}</h3>
                <img src={item.imagen} alt={item.titulo} />
                <p className="descripcion">{item.descripcion}</p>
                <p className="categoria">Categoria: {toCapital(item.categoria)}</p>
                <p className="precio">Precio: ${item.precio}</p>
                <p className="stock">Stock disponible: {item.stock}</p>
                <ItemCount 
                    cantidad={cantidad} 
                    handleSumar={handleSumar} 
                    handleRestar={handleRestar} 
                    handleAgregar={() => {agregarAlCarrito(item, cantidad) }} 
                />
            </div>
        </div>
    )
}

export default ItemDetail;