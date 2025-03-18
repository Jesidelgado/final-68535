import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({producto}) => {
    
    return (
        <div className="producto">
            <h3>{producto.titulo}</h3>
            <img src={producto.imagen} alt={producto.titulo} />
            <p className="precio">${producto.precio}</p>
            <p>{producto.categoria}</p>
            <p className="stock">Stock: {producto.stock}</p>
            <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>

        </div>
    )
}

export default Item;