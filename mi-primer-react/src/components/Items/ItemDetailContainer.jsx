import React from 'react';
import { useParams } from 'react-router-dom';
import libros from '../AgregarLibros/Libros'; // Asegúrate de que la ruta sea correcta

const DetalleLibro = () => {
    // 1. Usa useParams para obtener el ID de la URL.
    // El nombre de la variable debe coincidir con el de la ruta (:id)
    const { id } = useParams();

    // 2. Busca el libro en tu lista que coincida con el ID.
    // Importante: El ID de la URL es un string, así que conviértelo a número para la comparación.
    const libroEncontrado = libros.find(libro => libro.id === parseInt(id));

    // 3. Maneja el caso en que el libro no se encuentre
    if (!libroEncontrado) {
        return <div>Libro no encontrado</div>;
    }

    // 4. Muestra los detalles del libro encontrado
    return (
        <div>
            <h1>Detalles del Libro</h1>
            <h2>{libroEncontrado.titulo}</h2>
            <p><strong>Autor:</strong> {libroEncontrado.autor}</p>
            <img src={`/img/${libroEncontrado.imagen}`} alt={libroEncontrado.titulo} style={{ maxWidth: '300px' }} />
        </div>
    );
};

export default DetalleLibro;