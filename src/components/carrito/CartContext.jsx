import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

// Crear el proveedor del contexto
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Función para agregar un libro al carrito
    const addToCart = (bookToAdd) => {
        setCartItems(prevItems => {
            // Si el libro ya está en el carrito, solo actualiza la cantidad
            const existingItem = prevItems.find(item => item.id === bookToAdd.id);

            let newCart;
            if (existingItem) {
                newCart = prevItems.map(item =>
                    item.id === bookToAdd.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // Si no está, agrega el libro con una cantidad inicial de 1
                newCart = [...prevItems, { ...bookToAdd, quantity: 1 }];
            }

            return newCart;
        });
    };

    const removeFromCart = (bookId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== bookId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    // El valor que se comparte con todos los componentes
    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
// Hook personalizado para usar el contexto
export const useCart = () => {
    return useContext(CartContext);
};