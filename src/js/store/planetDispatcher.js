const planetDispatcher = {
    get: async () => {
       const response = await fetch ( "https://www.swapi.tech/api/planets/", {
         method: "GET" ,
         headers:{'Content-Type':'application/json'}
        })
        return response.json();
    }
}

export default planetDispatcher;


