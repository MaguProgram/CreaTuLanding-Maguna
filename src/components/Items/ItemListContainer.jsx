import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getBookById } from '../../utils/firebase';

const ItemListContainer = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Lógica para obtener los libros de Firebase
        getBookById()
            .then((data) => {
                setBooks(data);
                setLoading(false);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div>
            {loading ? (
                <p>Cargando productos...</p>
            ) : (
                // Pasa los datos al componente de presentación
                <ItemList books={books} />
            )}
        </div>
    );
};

export default ItemListContainer;