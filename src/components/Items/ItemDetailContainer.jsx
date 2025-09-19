import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getBookById } from '../../utils/firebase';

const ItemDetailContainer = () => {
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams(); // Obtiene el ID de la URL

    useEffect(() => {
        // Lógica para obtener el libro específico de Firebase
        getBookById(id)
            .then((data) => {
                setBook(data);
                setLoading(false);
            })
            .catch((error) => console.error(error));
    }, [id]); // El efecto se vuelve a ejecutar si el ID cambia

    return (
        <div>
            {loading ? (
                <p>Cargando detalle del producto...</p>
            ) : (
                // Pasa los datos al componente de presentación
                <ItemDetail book={book} />
            )}
        </div>
    );
};

export default ItemDetailContainer;