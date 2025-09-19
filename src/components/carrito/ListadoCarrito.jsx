import React, { useState } from 'react';
import { useCart } from '../carrito/CartContext';
import { saveOrder } from '../../utils/api';
import '../carrito/Cart.css';

const Cart = () => {
    const { cartItems, clearCart, removeFromCart } = useCart();
    console.log("Items en el carrito:", cartItems);

    const [showConfirmation, setShowConfirmation] = useState(false);
    const [orderId, setOrderId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const total = cartItems.reduce((acc, item) => acc + (item.Precio * item.quantity), 0).toFixed(2);

    const handleConfirmPurchase = async () => {
        setError(null);
        setOrderId(null);
        setShowConfirmation(false);
        setIsLoading(true);

        try {
            const productWithoutStock = cartItems.find(item => item.id === 'sin-stock');
            if (productWithoutStock) {
                setError(`El producto "${productWithoutStock.Nombre}" no tiene stock suficiente.`);
                return;
            }

            const orderData = {
                items: cartItems.map(item => ({
                    id: item.id,
                    name: item.Nombre,
                    price: item.Precio,
                    quantity: item.quantity
                })),
                total: parseFloat(total),
                buyer: {
                    name: "Usuario Ejemplo",
                    phone: "123456789",
                    email: "ejemplo@correo.com"
                }
            };

            const id = await saveOrder(orderData);
            if (id) {
                setOrderId(id);
                clearCart();
                setShowConfirmation(true);
            } else {
                setError("Ocurrió un error al guardar la orden. Por favor, intente de nuevo.");
            }
        } catch (err) {
            console.error("Error al confirmar la compra:", err);
            setError("Ocurrió un error inesperado. Por favor, revise su conexión.");
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return (
            <div className="cart-container text-center">
                <p>Procesando tu compra... ¡Un momento por favor! ⏳</p>
            </div>
        );
    }

    if (showConfirmation) {
        return (
            <div className="cart-container text-center">
                <div className="purchase-confirmation-message">
                    <p className="font-bold text-lg">¡Gracias por tu compra! 🎉</p>
                    <p>Tu orden ha sido confirmada con éxito.</p>
                    {orderId && <p className="mt-2">Número de Orden: <span className="font-mono bg-green-200 text-green-800 p-1 rounded">{orderId}</span></p>}
                    <button onClick={() => setShowConfirmation(false)} className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors">Volver a la tienda</button>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <h2 className="text-2xl font-bold text-center mb-6">Carrito de Compras</h2>
            {/* Mensajes de error, si existen */}
            {error && (
                <div className="error-message bg-red-100 text-red-700 p-3 rounded-lg mb-4 text-center">
                    {error}
                </div>
            )}

            {cartItems.length === 0 ? (
                // Lógica para cuando el carrito está vacío
                <div className="cart-empty-message">
                    <p>Tu carrito está vacío. ¡Explora nuestros libros! 🛒</p>
                </div>
            ) : (
                // Lógica para cuando el carrito tiene productos
                <>
                    <div className="cart-items-list">
                        {cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.img} alt={item.Nombre} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h3>{item.Nombre}</h3>
                                    <p>Precio: ${item.Precio}</p>
                                    <p>Cantidad: {item.quantity}</p>
                                </div>
                                <span className="item-subtotal font-bold">${(item.Precio * item.quantity).toFixed(2)}</span>
                                <button onClick={() => { removeFromCart(item.id); }} className="remove-button">
                                    Eliminar
                                </button>
                            </div>
                        ))}
                    </div>
                    {/* El resumen y los botones están ahora dentro del fragmento */}
                    <div className="cart-summary">
                        <p className="total-text font-bold text-xl">Total: <span className="total-amount">${total}</span></p>
                        <div className="cart-buttons mt-4">
                            <button onClick={clearCart} className="cart-clear-button">
                                Vaciar Carrito
                            </button>
                            <button
                                onClick={handleConfirmPurchase}
                                className="cart-confirm-button"
                                disabled={isLoading}
                            >
                                Confirmar Compra
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;