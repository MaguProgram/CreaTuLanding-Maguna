// import React, { useState } from 'react';
// import { useCart } from '../carrito/CartContext';
// import { saveOrder } from '../../utils/api';
// import '../carrito/Cart.css';

// const Cart = () => {
//     const { cartItems, clearCart, removeFromCart } = useCart();
//     console.log("Items en el carrito:", cartItems);

//     const [showConfirmation, setShowConfirmation] = useState(false);
//     const [orderId, setOrderId] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);

//     // 1. Nuevo estado para los datos del comprador
//     const [buyerData, setBuyerData] = useState({
//         name: '',
//         phone: '',
//         email: '',
//     });

//     const total = cartItems.reduce((acc, item) => acc + (item.Precio * item.quantity), 0).toFixed(2);

//     // 3. Función para manejar los cambios del formulario
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setBuyerData(prevState => ({
//             ...prevState,
//             [name]: value,
//         }));
//     };

//     const handleConfirmPurchase = async () => {
//         setError(null);
//         setOrderId(null);
//         setShowConfirmation(false);
//         setIsLoading(true);

//         // Validación simple del formulario
//         if (!buyerData.name || !buyerData.phone || !buyerData.email) {
//             setError("Por favor, complete todos los campos de sus datos de contacto.");
//             setIsLoading(false);
//             return;
//         }

//         try {
//             const productWithoutStock = cartItems.find(item => item.id === 'sin-stock');
//             if (productWithoutStock) {
//                 setError(`El producto "${productWithoutStock.Nombre}" no tiene stock suficiente.`);
//                 return;
//             }

//             // 5. Actualiza la estructura de la orden para incluir los datos del comprador
//             const orderData = {
//                 items: cartItems.map(item => ({
//                     id: item.id,
//                     name: item.Nombre,
//                     price: item.Precio,
//                     quantity: item.quantity
//                 })),
//                 total: parseFloat(total),
//                 buyer: buyerData // Usa el estado del formulario aquí
//             };

//             const id = await saveOrder(orderData);
//             if (id) {
//                 setOrderId(id);
//                 clearCart();
//                 setShowConfirmation(true);
//             } else {
//                 setError("Ocurrió un error al guardar la orden. Por favor, intente de nuevo.");
//             }
//         } catch (err) {
//             console.error("Error al confirmar la compra:", err);
//             setError("Ocurrió un error inesperado. Por favor, revise su conexión.");
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     if (isLoading) {
//         return (
//             <div className="cart-container text-center">
//                 <p>Procesando tu compra... ¡Un momento por favor! ⏳</p>
//             </div>
//         );
//     }

//     if (showConfirmation) {
//         return (
//             <div className="cart-container text-center">
//                 <div className="purchase-confirmation-message">
//                     <p className="font-bold text-lg">¡Gracias por tu compra! 🎉</p>
//                     <p>Tu orden ha sido confirmada con éxito.</p>
//                     {orderId && <p className="mt-2">Número de Orden: <span className="font-mono bg-green-200 text-green-800 p-1 rounded">{orderId}</span></p>}
//                     <button onClick={() => setShowConfirmation(false)} className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors">Volver a la tienda</button>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="cart-container">
//             <h2 className="text-2xl font-bold text-center mb-6">Carrito de Compras</h2>
//             {error && (
//                 <div className="error-message bg-red-100 text-red-700 p-3 rounded-lg mb-4 text-center">
//                     {error}
//                 </div>
//             )}

//             {cartItems.length === 0 ? (
//                 <div className="cart-empty-message">
//                     <p>Tu carrito está vacío. ¡Explora nuestros libros! 🛒</p>
//                 </div>
//             ) : (
//                 <>
//                     <div className="cart-items-list">
//                         {cartItems.map(item => (
//                             <div key={item.id} className="cart-item">
//                                 <img src={item.img} alt={item.Nombre} className="cart-item-image" />
//                                 <div className="cart-item-details">
//                                     <h3>{item.Nombre}</h3>
//                                     <p>Precio: ${item.Precio}</p>
//                                     <p>Cantidad: {item.quantity}</p>
//                                 </div>
//                                 <span className="item-subtotal font-bold">${(item.Precio * item.quantity).toFixed(2)}</span>
//                                 <button onClick={() => removeFromCart(item.id)} className="remove-button">
//                                     Eliminar
//                                 </button>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="cart-summary">
//                         <p className="total-text font-bold text-xl">Total: <span className="total-amount">${total}</span></p>

//                         {/* 2. Formulario para los datos del cliente */}
//                         <div className="buyer-form-container mt-6">
//                             <h3 className="text-lg font-semibold mb-2">Tus Datos</h3>
//                             <form>
//                                 <div className="mb-4">
//                                     <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
//                                     <input
//                                         type="text"
//                                         id="name"
//                                         name="name"
//                                         value={buyerData.name}
//                                         onChange={handleInputChange}
//                                         className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono</label>
//                                     <input
//                                         type="tel"
//                                         id="phone"
//                                         name="phone"
//                                         value={buyerData.phone}
//                                         onChange={handleInputChange}
//                                         className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//                                     <input
//                                         type="email"
//                                         id="email"
//                                         name="email"
//                                         value={buyerData.email}
//                                         onChange={handleInputChange}
//                                         className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
//                                         required
//                                     />
//                                 </div>
//                             </form>
//                         </div>

//                         <div className="cart-buttons mt-4">
//                             <button onClick={clearCart} className="cart-clear-button">
//                                 Vaciar Carrito
//                             </button>
//                             <button
//                                 onClick={handleConfirmPurchase}
//                                 className="cart-confirm-button"
//                                 disabled={isLoading || !buyerData.name || !buyerData.phone || !buyerData.email}
//                             >
//                                 Confirmar Compra
//                             </button>
//                         </div>
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };

// export default Cart;