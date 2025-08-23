import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AgregarLibro from './components/AgregarLibros';
import ItemListContainer from './components/itemListContainer';
import Navegador from './components/navBar';
import FetchApi from './components/Fetch';
import BuscarLibros from './components/Routes/index';
import Nosotros from './components/Routes/Nosotros';
import Autores from './components/Routes/Autores';
import MasLeidos from './components/Routes/MasLeidos';

// COMPONENTE
function App() {

  // RETORNA UN JSX/HTML
  return (
    <>

      <BrowserRouter>
        <Navegador />
        <Routes>
          <Route path='/' element={
            <>
              <ItemListContainer />
              <AgregarLibro />
              <FetchApi />
            </>
          } />
          <Route path='/buscar' element={<BuscarLibros />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/autores' element={<Autores />} />
          <Route path='/masLeidos' element={<MasLeidos />} />

        </Routes>
      </BrowserRouter >

    </ >
  );
}

export default App;
