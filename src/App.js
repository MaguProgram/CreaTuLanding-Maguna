import './App.css';
import { BrowserRouter, Routers, Route } from 'react-router-dom'
import AgregarLibro from './components/AgregarLibros';
import ItemListContainer from './components/itemListContainer';
import Navegador from './components/navBar';
import FetchApi from './components/Fetch';

// COMPONENTE
function App() {

  // RETORNA UN JSX/HTML
  return (
    <>
      <Navegador />
      <ItemListContainer />
      <AgregarLibro />
      <FetchApi />
      <BrowserRouter>


      </BrowserRouter>
    </ >
  );
}

export default App;
