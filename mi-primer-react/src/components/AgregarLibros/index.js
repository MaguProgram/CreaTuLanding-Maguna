const AgregarLibro = (props) => {
    const { nombre, autor, id, type } = props

    return (
        <div>
            <h2>Actualizar Ranking</h2>

            <label>Nombre</label>
            <input nombre={nombre} autor={autor} id={id} type={type} />
            <label>Autor</label>
            <input autor={autor} id={id} type={type} />
            <label>Identificador</label>
            <input id={id} type={type} />
            <div className="contenedor-boton">
                <button className="agregarbtn">Agregar</button>
            </div>
        </div>
    )
};


export default AgregarLibro;