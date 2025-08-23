import CarritoWidget from './carrito/carritoWidget';

const Navegador = () => {

    return (
        <nav>
            <ul className='navegador'>
                <li>
                    <img src='logoTienda.png'></img>
                </li>
                <li>
                    <a href=''>BUSCAR</a>
                </li>
                <li>
                    <a href=''>LIBROS</a>
                </li>
                <li>
                    <a href=''>AUTORES</a>
                </li>
                <li>
                    <a href=''>
                        <CarritoWidget />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navegador;