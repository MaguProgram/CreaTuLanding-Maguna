import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

/**
 * Guarda una nueva orden en la colección 'orders' de Firestore.
 * @param {object} orderData 
 * @returns {Promise<string|null>} 
 */
export const saveOrder = async (orderData) => {
    try {
        // Obtenemos una referencia a la colección 'orders'
        const ordersCollection = collection(db, 'orders');

        // Añadimos un nuevo documento a la colección con los datos de la orden
        const docRef = await addDoc(ordersCollection, {
            ...orderData,
            createdAt: new Date() // Agregamos una marca de tiempo
        });

        console.log("Orden guardada con éxito. ID de la orden:", docRef.id);
        return docRef.id;
    } catch (error) {
        console.error("Error al guardar la orden:", error);
        return null;
    }
};