import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import NavBar from "./components/NavBar";
import Nosotros from "./components/Nosotros";
import Carrito from "./components/Carrito.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import Checkout from "./components/Checkout.jsx";

function App() {


  return (
    <div>
      <CartProvider>
        <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/productos/:categoria" element={<ItemListContainer />} /> 
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/checkout" element={<Checkout />} />

        </Routes>

        </BrowserRouter>
        </CartProvider>
    </div>
  );
}

export default App
