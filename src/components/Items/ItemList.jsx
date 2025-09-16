import Item from './Item'; // Componente para cada producto individual

const ItemList = ({ books }) => {
    return (
        <div className="item-list-container">
            {books.map((book) => (
                // Pasa la información de cada libro a un componente 'Item'
                <Item key={book.id} book={book} />
            ))}
        </div>
    );
};

export default ItemList;