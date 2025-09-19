import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import libros from '../AgregarLibros/Libros';
import './ItemDetail.css';

const ItemDetail = () => {
    const { id } = useParams(); // Obtiene el parámetro `id` de la URL
    const [libro, setLibro] = useState(null);


    console.log("ID de la URL:", id);
    console.log("Array de libros:", libros);

    useEffect(() => {
        // Busca el libro en el array 'libros' por su id
        const libroEncontrado = libros.find(l => l.id === id);
        console.log("Libro encontrado:", libroEncontrado);

        if (libroEncontrado) {
            setLibro(libroEncontrado);
        } else {
            console.error("Libro no encontrado con el ID:", id);
        }
    }, [id]);

    if (!libro) {
        return <div>Libro no encontrado o cargando...</div>;
    }

    return (
        <div className="item-detail-container">
            <img src={libro.imagen} alt={libro.titulo} className="detail-image" />
            <div className="detail-content">
                <h1 className="detail-title">{libro.titulo}</h1>
                <p className="detail-author">Autor: {libro.autor}</p>
                <p className="detail-resumen">{libro.resumen}</p>
            </div>
        </div>
    );
};

export default ItemDetail;