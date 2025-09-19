import React from 'react';
import { useCart } from '../carrito/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
    // Usamos un hook personalizado para acceder al estado del carrito.
    const { cartItems } = useCart();

    // Calculamos el número total de unidades en el carrito
    const totalUnits = cartItems.reduce((total, item) => total + item.quantity, 0);

    // Renderiza solo si hay productos en el carrito
    if (totalUnits === 0) {
        return <FaShoppingCart size={30} />;
    }

    // Renderizamos el ícono y el contador
    return (
        <div className="cart-widget">
            <FaShoppingCart size={30} />
            <span className="cart-count">{totalUnits}</span>
        </div>
    );
};

export default CartWidget;