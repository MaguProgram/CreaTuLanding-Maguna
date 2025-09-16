// import { useState } from 'react';

// const Item = ({ libro }) => {
//     const [data, setData] = useState("Añadir al carrito");

//     const handleAgregarLibro = () => {
//         setData("¡Libro agregado!");
//         console.log(`Se ha agregado el libro: ${libro.titulo}`);
//     };

//     return (
//         <li>
//             <img src={libro.imagen} alt={libro.titulo} />
//             {libro.autor}
//             <button onClick={handleAgregarLibro}>{data}</button>
//         </li>
//     );
// };

// export default Item;

import React from 'react';
import { Link } from 'react-router-dom';
import './Items.css'; // Estilos para el componente Item


const Item = ({ book }) => {
    // Asegúrate de que 'book' no sea undefined antes de acceder a sus propiedades
    if (!book) {
        return null; // O un componente de carga
    }

    return (
        <div className="item-card">
            <img src={book.img} alt={book.Nombre} className="item-image" />
            <div className="item-details">
                <h3 className="item-title">{book.Nombre}</h3>
                <h3 className="item-author">Autor: {book.Autor}</h3>
                <p className="item-price">${book.Precio}</p>
                <p className="item-stock">Stock: {book.Stock ? "Disponible ✅" : "Agotado ❌"}</p>

                {/* Usamos <Link> para navegar a la ruta de detalle */}
                <Link to={`/item/${book.id}`} className="item-button">
                    Ver Detalle
                </Link>
            </div>
        </div>
    );
};

export default Item;