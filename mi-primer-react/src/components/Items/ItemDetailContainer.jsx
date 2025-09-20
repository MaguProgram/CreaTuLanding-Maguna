// import React from 'react';
// import { useParams } from 'react-router-dom';
// import libros from '../AgregarLibros/Libros'; // Asegúrate de que la ruta sea correcta

// const DetalleLibro = () => {
//     // 1. Usa useParams para obtener el ID de la URL.
//     // El nombre de la variable debe coincidir con el de la ruta (:id)
//     const { id } = useParams();

//     // 2. Busca el libro en tu lista que coincida con el ID.
//     // Importante: El ID de la URL es un string, así que conviértelo a número para la comparación.
//     const libroEncontrado = libros.find(libro => libro.id === parseInt(id));

//     // 3. Maneja el caso en que el libro no se encuentre
//     if (!libroEncontrado) {
//         return <div>Libro no encontrado</div>;
//     }

//     // 4. Muestra los detalles del libro encontrado
//     return (
//         <div className='DetalleLibro'>
//             <h1>Detalles del Libro</h1>
//             <h2>{libroEncontrado.titulo}</h2>
//             <p><strong>Autor:</strong> {libroEncontrado.autor}</p>
//             <img src={`/img/${libroEncontrado.imagen}`} alt={libroEncontrado.titulo} style={{ maxWidth: '300px' }} />
//             <p><strong>Resumen:</strong> {libroEncontrado.resumen}</p>
//         </div>
//     );
// };

// export default DetalleLibro;

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'; // Componente de presentación
import { getBookById } from '../../utils/firebase'; // Función para obtener un solo libro

const ItemDetailContainer = () => {
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams(); // Obtiene el ID de la URL

    useEffect(() => {
        // Lógica para obtener el libro específico de Firebase
        getBookById(id)
            .then((data) => {
                setBook(data);
                setLoading(false);
            })
            .catch((error) => console.error(error));
    }, [id]); // El efecto se vuelve a ejecutar si el ID cambia

    return (
        <div>
            {loading ? (
                <p>Cargando detalle del producto...</p>
            ) : (
                // Pasa los datos al componente de presentación
                <ItemDetail book={book} />
            )}
        </div>
    );
};

export default ItemDetailContainer;