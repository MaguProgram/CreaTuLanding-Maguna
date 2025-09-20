import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AgregarLibro from './components/AgregarLibros';
import ItemListContainer from './components/Items/ItemListContainer';
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import Navegador from './components/navBar';
import FetchApi from './components/Fetch';
import BuscarLibros from './components/Routes/index';
import Nosotros from './components/Routes/Nosotros';
import Autores from './components/Routes/Autores';
import MasLeidos from './components/Routes/MasLeidos';
import Cart from './components/carrito/Cart';
import { CartProvider } from '../src/components/carrito/CartContext'
import ItemDetail from '../src/components/Items/ItemDetail'; // Importa el nuevo componente


// COMPONENTE
function App() {

  // RETORNA UN JSX/HTML
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navegador />
          <Routes>
            <Route path='/' element={
              <>
                <AgregarLibro />
                <ItemListContainer />
                <FetchApi />
              </>
            } />
            <Route path='/buscar' element={<BuscarLibros />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/autores' element={<Autores />} />
            <Route path='/masLeidos' element={<MasLeidos />} />
            <Route path='/carrito' element={<Cart />} />
            <Route path="/item/:id" element={<ItemDetail />} />

            <Route path='/libro/:id' element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter >
      </CartProvider>

    </ >
  );
}

export default App;
