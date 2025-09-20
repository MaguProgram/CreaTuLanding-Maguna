import CarritoWidget from './carrito/carritoWidget';
import { Link } from 'react-router-dom';

const Navegador = () => {

    return (
        <nav>
            <ul className='navegador'>
                <li>
                    <Link to='/'>
                        <img src='../logoTienda.png' alt='Logo Tienda' />
                    </Link>
                </li>
                <li>
                    <Link to='/'>Inicio</Link>
                </li>
                <li>
                    <Link to='/buscar'>Buscar</Link>
                </li>
                <li>
                    <Link to='/masLeidos'>Agregar Libros</Link>
                </li>
                <li>
                    <Link to='/nosotros'>Nosotros</Link>
                </li>
                <li>
                    <Link to='/carrito'>
                        <CarritoWidget />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navegador;