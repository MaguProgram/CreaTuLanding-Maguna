const AgregarLibro = (props) => {
    const { nombre, autor, id, type } = props

    return (
        <>
            <h2>Agregar Libro</h2>

            <label>Nombre</label>
            <input nombre={nombre} autor={autor} id={id} type={type} />
            <label>Autor</label>
            <input autor={autor} id={id} type={type} />
            <label>Identificador</label>
            <input id={id} type={type} />
            <button class="agregarbtn">Agregar</button>
        </>
    )
};


export default AgregarLibro;