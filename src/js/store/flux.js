const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			planets: [],
		
			vehicles: [],

			people: []

		},
		actions: {
			// Use getActions to call a function within a fuction
			getDataPeople: (id) => {
				fetch(`https://www.swapi.tech/api/people/${id}`), {
					method: "GET",
					headers: { 'Content-Type': 'application/json' }

				}

					.then(res => res.json())
					.then(data => console.log(data))
					.catch(err => console.error(err))
			},

			getDataVehicles: (id) => {
				fetch(`https://www.swapi.tech/api/vehicles/${id}`), {
					method: "GET",
					headers: { 'Content-Type': 'application/json' }

				}

					.then(res => res.json())
					.then(data => console.log(data))
					.catch(err => console.error(err))
			},

			getDataPlanets: (id) => {
				fetch(`https://www.swapi.tech/api/planets/${id}`), {
					method: "GET",
					headers: { 'Content-Type': 'application/json' }

				}

					.then(res => res.json())
					.then(data => console.log(data))
					.catch(err => console.error(err))
			}




		}
	}
};

	export default getState;
