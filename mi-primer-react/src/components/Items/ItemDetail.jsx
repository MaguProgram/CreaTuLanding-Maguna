// En ItemDetail.jsx
import { useState } from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ book }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
        console.log(`Se agregaron ${quantity} unidades del libro ${book.Nombre}`);
    };

    return (
        <div className="item-detail">
            <h2>{book.Nombre}</h2>
            <img src={book.img} alt={book.Nombre} />
            <p>Precio: ${book.Precio}</p>

            {/* Condicional para mostrar ItemCount o un botón de "Ir al carrito" */}
            {quantityAdded === 0 ? (
                <ItemCount initial={1} stock={book.En_stock} onAdd={handleOnAdd} />
            ) : (
                <button>Ir al Carrito</button>
            )}
        </div>
    );
};

export default ItemDetail;