

const FetchApi = () => {
    fetch('https://openlibrary.org/search.json?q={tu-termino-de-busqueda}')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        });

    return (
        <div>
            <button onClick={FetchApi}>Fetch data</button>
        </div>
    );

};
export default FetchApi;
