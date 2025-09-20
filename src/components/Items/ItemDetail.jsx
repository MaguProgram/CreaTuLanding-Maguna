// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import libros from '../AgregarLibros/Libros';
// import './ItemDetail.css';

// const ItemDetail = () => {
//     const { id } = useParams(); // Obtiene el parámetro `id` de la URL
//     const [libro, setLibro] = useState(null);


//     console.log("ID de la URL:", id);
//     console.log("Array de libros:", libros);

//     useEffect(() => {
//         // Busca el libro en el array 'libros' por su id
//         const libroEncontrado = libros.find(l => l.id === id);
//         console.log("Libro encontrado:", libroEncontrado);

//         if (libroEncontrado) {
//             setLibro(libroEncontrado);
//         } else {
//             console.error("Libro no encontrado con el ID:", id);
//         }
//     }, [id]);

//     if (!libro) {
//         return <div>Libro no encontrado o cargando...</div>;
//     }

//     return (
//         <div className="item-detail-container">
//             <img src={libro.Imagen} alt={libro.titulo} className="detail-image" />
//             <div className="detail-content">
//                 <h1 className="detail-title">{libro.titulo}</h1>
//                 <p className="detail-author">Autor: {libro.autor}</p>
//                 <p className="detail-resumen">{libro.resumen}</p>
//             </div>
//         </div>
//     );
// };

// export default ItemDetail;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore'; // Importa las funciones necesarias
import { db } from '../../utils/firebase'; // Importa la conexión a tu base de datos
import './ItemDetail.css';

const ItemDetail = () => {
    const { id } = useParams();
    const [libro, setLibro] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getSingleBook = async () => {
            try {
                // Referencia al documento en Firestore con el ID de la URL
                const docRef = doc(db, 'books', id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    // Si el documento existe, crea el objeto del libro con su ID
                    const data = { ...docSnap.data(), id: docSnap.id };
                    setLibro(data);
                } else {
                    console.error("Libro no encontrado en Firebase con el ID:", id);
                }
            } catch (error) {
                console.error("Error al obtener el libro:", error);
            } finally {
                setLoading(false);
            }
        };

        getSingleBook();
    }, [id]);

    if (loading) {
        return <div className="loading-container">Cargando libro... ⏳</div>;
    }

    if (!libro) {
        return <div>Libro no encontrado.</div>;
    }

    return (
        <div className="item-detail-container">
            <img src={libro.Imagen} alt={libro.Nombre} className="detail-image" />
            <div className="detail-content">
                <h1 className="detail-title">{libro.Nombre}</h1>
                <p className="detail-author">Autor: {libro.Autor}</p>
                <p className="detail-resumen">{libro.Resumen}</p>
            </div>
        </div>
    );
};

export default ItemDetail;