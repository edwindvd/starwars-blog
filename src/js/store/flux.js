const BASEURL = "https://www.swapi.tech/api/";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			character: null,
			characters:[],
			planet: null,
			planets:[],
			vehicle: null,
			vehicles:[],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
				 fetch().then().then(data => setStore({ "foo": data.bar }))
				 */
			},
			getCharacters: ()=>{
				fetch(BASEURL + 'people/')
				.then(response => response.json())
				.then(data => setStore({characters: data.results}))
				.catch(err => console.log(err))
					// console.log(typeof BASEURL)
			},
			getCharacterByUid: (id)=>{
				fetch(BASEURL + 'people/'+id)
				.then(response => response.json())
				.then(data => setStore({character: data.result}))
				.catch(err => console.log(err))
					// console.log(typeof BASEURL)
			},
			getPlanets: ()=>{
				fetch(BASEURL + 'planets/')
				.then(response => response.json())
				.then(data => setStore({planets: data.results}))
				.catch(err => console.log(err))
					// console.log(typeof BASEURL)
			},
			getPlanetByUid: (id)=>{
				fetch(BASEURL + 'planets/'+id)
				.then(response => response.json())
				.then(data => setStore({planet: data.result}))
				.catch(err => console.log(err))
					// console.log(typeof BASEURL)
			},
			getVehicles: ()=>{
				fetch(BASEURL + 'vehicles/')
				.then(response => response.json())
				.then(data => setStore({vehicles: data.results}))
				.catch(err => console.log(err))
					// console.log(typeof BASEURL)
			},
			getVehicleByUid: (id)=>{
				fetch(BASEURL + 'vehicles/'+id)
				.then(response => response.json())
				.then(data => setStore({vehicle: data.result}))
				.catch(err => console.log(err))
					// console.log(typeof BASEURL)
			},

			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
		}
	};
};

export default getState;
