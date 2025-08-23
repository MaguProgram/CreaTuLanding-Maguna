import { useState } from 'react';

const Item = ({ libro }) => {
    const [data, setData] = useState("Añadir al carrito");

    const handleAgregarLibro = () => {
        setData("¡Libro agregado!");
        console.log(`Se ha agregado el libro: ${libro.titulo}`);
    };

    return (
        <li>
            <img src={libro.imagen} alt={libro.titulo} />
            {libro.autor}
            <button onClick={handleAgregarLibro}>{data}</button>
        </li>
    );
};

export default Item;