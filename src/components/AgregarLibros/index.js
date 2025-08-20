
const AgregarLibro = (props) => {
    const { nombre, autor, id, type } = props


    return (
        <>
            <h1>Agregar Libro</h1>

            <label> Nombre</label>
            <input nombre={nombre} autor={autor} id={id} type={type} />
            <label>Autor</label>
            <input autor={autor} id={id} type={type} />
            <label>Identificador</label>
            <input id={id} type={type} />
            <button>Agregar</button>


        </>
    )
};


export default AgregarLibro;