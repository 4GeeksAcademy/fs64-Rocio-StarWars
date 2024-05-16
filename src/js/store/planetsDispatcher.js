const PlanetsDispatcher = async () => {
    const response = await fetch("https://www.swapi.tech/api/planet/", {
        method: 'GET',
        headers:{'Content-Type':'application/json'}
    })
    return response.json();
}


export default PlanetsDispatcher;


