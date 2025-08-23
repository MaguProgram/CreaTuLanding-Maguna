import Item from "./Item";

const ItemListContainer = () => {
    // Datos de los libros en un arreglo de objetos
    const libros = [
        { id: 1, titulo: 'El Visitante', autor: 'Stephen King', imagen: 'El_Visitante.png' },
        { id: 2, titulo: 'El Alquimista', autor: 'Paulo Coelho', imagen: 'El_Alquimista.png' },
        { id: 3, titulo: 'La presa del Tigre', autor: 'Wilbur Smith', imagen: 'La_presa_del_Tigre.png' },
        { id: 4, titulo: 'El dia que se perdio la cordura', autor: 'Javier Castillo', imagen: 'El_dia_que_se_perdio_la_cordura.png' }
    ];

    return (
        <div>
            <ol className='itemListContainer'>
                {libros.map(libro => (
                    <Item key={libro.id} libro={libro} />
                ))}
            </ol>
        </div>
    );
};

export default ItemListContainer;



// import { useState, useEffect } from 'react';

// const ItemListContainer = () => {
//     //  Estado para almacenar los libros encontrados
//     const [libros, setLibros] = useState([]);

//     //  Estado para el término de búsqueda del usuario
//     const [terminoBusqueda, setTerminoBusqueda] = useState('react'); // Valor inicial de prueba

//     //  Función para hacer la llamada a la API
//     const buscarLibros = (query) => {
//         // Formateamos la URL de la API con el término de búsqueda
//         const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`;

//         fetch(url)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('La respuesta de la red no fue correcta');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 // Almacenamos los libros en el estado
//                 setLibros(data.docs);
//                 console.log('Libros encontrados:', data.docs);
//             })
//             .catch(error => {
//                 console.error('Hubo un error al buscar los libros:', error);
//                 setLibros([]); // Limpiamos la lista si hay un error
//             });
//     };

//     //  useEffect para realizar la búsqueda cuando el componente se carga
//     useEffect(() => {
//         buscarLibros(terminoBusqueda);
//     }, [terminoBusqueda]); // El efecto se ejecuta cada vez que el terminoBusqueda cambia

//     return (
//         <div>
//             <h1>Catálogo de Libros</h1>

//             {/* Input de búsqueda para que el usuario escriba */}
//             <input
//                 type="text"
//                 value={terminoBusqueda}
//                 onChange={(e) => setTerminoBusqueda(e.target.value)}
//                 placeholder="Busca un libro, autor..."
//             />

//             <ol className='itemListContainer'>
//                 {/*  Mapeamos y mostramos los libros encontrados */}
//                 {libros.length > 0 ? (
//                     libros.map(libro => (
//                         <li key={libro.key}>
//                             <h3>{libro.title}</h3>
//                             <p>Autor: {libro.author_name ? libro.author_name.join(', ') : 'Desconocido'}</p>
//                             {libro.cover_i && (
//                                 <img
//                                     src={`https://covers.openlibrary.org/b/id/${libro.cover_i}-M.jpg`}
//                                     alt={`Portada de ${libro.title}`}
//                                 />
//                             )}
//                         </li>
//                     ))
//                 ) : (
//                     <p>No se encontraron libros. Intenta con otro término.</p>
//                 )}
//             </ol>
//         </div>
//     );
// };

// export default ItemListContainer;