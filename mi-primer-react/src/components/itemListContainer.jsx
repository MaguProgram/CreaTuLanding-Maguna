import Item from "./Item";

const ItemListContainer = () => {
    // Datos de los libros en un arreglo de objetos
    const libros = [
        { id: 1, titulo: 'El Visitante', autor: 'Stephen King', imagen: 'El_Visitante.png' },
        { id: 2, titulo: 'El Alquimista', autor: 'Paulo Coelho', imagen: 'El_Alquimista.png' },
        { id: 3, titulo: 'La presa del Tigre', autor: 'Wilbur Smith', imagen: 'La_presa_del_Tigre.png' },
        { id: 4, titulo: 'El dia que se perdio la cordura', autor: 'Javier Castillo', imagen: 'El_dia_que_se_perdio_la_cordura.png' }
    ];

    return (
        <div>
            <ol className='itemListContainer'>
                {libros.map(libro => (
                    <Item key={libro.id} libro={libro} />
                ))}
            </ol>
        </div>
    );
};

export default ItemListContainer;
