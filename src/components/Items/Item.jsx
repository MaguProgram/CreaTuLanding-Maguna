import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../carrito/CartContext';
import './Items.css';

const Item = ({ book }) => {
    // hook para obtener la función addToCart
    const { addToCart } = useCart();

    if (!book) {
        return null;
    }

    // Manejador de clic para el botón
    const handleAddToCart = () => {
        addToCart(book);
    };

    return (
        <div className="item-card">
            <img src={book.img} alt={book.Nombre} className="item-image" />
            <div className="item-details">
                <h3 className="item-title">{book.Nombre}</h3>
                <h3 className="item-author">Autor: {book.Autor}</h3>
                <p className="item-price">${book.Precio}</p>
                <p className="item-stock">Stock: {book.Stock ? "Disponible ✅" : "Agotado ❌"}</p>

                {book.Stock &&
                    <button onClick={handleAddToCart} className="add-to-cart-button">
                        Agregar al Carrito
                    </button>
                }

                <Link to={`/item/${book.id}`} className="item-button">
                    Ver Detalle
                </Link>
            </div>
        </div>
    );
};

export default Item;