import CarritoWidget from './carrito/carritoWidget';

const Navegador = () => {

    return (
        <nav>
            <ol className='navegador'>
                <img src='logoTienda.png'></img>
                <a href=''>BUSCAR</a>
                <a href=''>LIBROS</a>
                <a href=''>AUTORES</a>
                <a href=''>
                    <CarritoWidget />
                </a>
            </ol>
        </nav>
    )
}

export default Navegador;