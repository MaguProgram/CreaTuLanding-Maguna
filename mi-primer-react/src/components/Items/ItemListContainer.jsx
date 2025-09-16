
// // En el componente que muestra la lista de libros (por ejemplo, ItemListContainer)
// import React from 'react';
// import { Link } from 'react-router-dom';
// import libros from '../AgregarLibros/Libros';

// const ItemListContainer = () => {
//     return (
//         <div>
//             <h1>TOP 5 de los libros mas vendidos!</h1>
//             <ul>
//                 {libros.map(libro => (
//                     <li key={libro.id}>
//                         {/* Usa el componente Link para crear el enlace dinámico */}
//                         <Link to={`/libro/${libro.id}`}>
//                             <img src={`/img/${libro.imagen}`} alt={libro.titulo} />
//                             de {libro.autor}<strong>{libro.titulo}</strong>
//                         </Link>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default ItemListContainer;

import { useEffect, useState } from 'react';
import ItemList from './ItemList'; // Componente de presentación
import { getBookById } from '../../utils/firebase'; // Función para obtener datos de Firebase

const ItemListContainer = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Lógica para obtener los libros de Firebase
        getBookById()
            .then((data) => {
                setBooks(data);
                setLoading(false);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false)); // Usa .finally() para asegurar que loading se actualiza
    }, []);

    return (
        <div>
            {loading ? (
                <p>Cargando productos...</p>
            ) : (
                // Pasa los datos al componente de presentación
                <ItemList books={books} />
            )}
        </div>
    );
};

export default ItemListContainer;