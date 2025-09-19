import { useEffect, useState } from "react";
import { getBooks } from "./firebase.js";

function App() {
    // Crea un estado para guardar los libros
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Crea una función asíncrona dentro de useEffect
        const fetchBooks = async () => {
            try {
                const booksData = await getBooks();
                console.log("Libros obtenidos de Firebase:", booksData);

                // Actualiza el estado con los datos obtenidos
                setBooks(booksData);
            } catch (error) {
                console.error("Error al obtener los libros:", error);
            }
        };

        fetchBooks();
    }, []);

    // Muestra los datos en la consola para verificar
    useEffect(() => {
        if (books.length > 0) {
            console.log("Libros cargados:", books);
        }
    }, [books]);

}

export default App;