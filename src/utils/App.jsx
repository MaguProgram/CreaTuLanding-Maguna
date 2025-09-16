// App.jsx
import { useEffect, useState } from "react";
import { getBooks } from "./firebase.js";

function App() {
    // 1. Crea un estado para guardar los libros
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // 2. Crea una función asíncrona dentro de useEffect
        const fetchBooks = async () => {
            try {
                const booksData = await getBooks();
                // 3. Actualiza el estado con los datos obtenidos
                setBooks(booksData);
            } catch (error) {
                console.error("Error al obtener los libros:", error);
            }
        };

        // 4. Llama a la función
        fetchBooks();
    }, []);

    // 5. Muestra los datos en la consola para verificar
    useEffect(() => {
        if (books.length > 0) {
            console.log("Libros cargados:", books);
        }
    }, [books]);

    return (
        <>
            <h1>FIREBASE</h1>
            {/* Aquí podrías renderizar los libros */}
        </>
    );
}

export default App;