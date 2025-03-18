import { productos } from "../data/productos.jsx";


    const pedirProductos = () => {
        return new Promise((resolve, reject) => {
                resolve(productos)
        })
    }

    export default pedirProductos;