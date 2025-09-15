
// En el componente que muestra la lista de libros (por ejemplo, ItemListContainer)
import React from 'react';
import { Link } from 'react-router-dom';
import libros from '../AgregarLibros/Libros';

const ItemListContainer = () => {
    return (
        <div>
            <h1>TOP 5 de los libros mas vendidos!</h1>
            <ul>
                {libros.map(libro => (
                    <li key={libro.id}>
                        {/* Usa el componente Link para crear el enlace dinámico */}
                        <Link to={`/libro/${libro.id}`}>
                            <strong>{libro.titulo}</strong> de {libro.autor}
                            <img src={`/img/${libro.imagen}`} alt={libro.titulo} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemListContainer;