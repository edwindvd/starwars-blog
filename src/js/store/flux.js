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
			favorites: JSON.parse(localStorage.getItem("favorites")) || []
		},
		actions: {
			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			// loadSomeData: () => {
			// 	/**
			// 	 fetch().then().then(data => setStore({ "foo": data.bar }))
			// 	 */
			// },
			getCharacters: ()=>{
				fetch(BASEURL + 'people/')
				.then(response => response.json())
				.then(data => setStore({characters: data.results, status:false}))

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

			addFavorites: (id) =>{
				const store = getStore()
				let exists = store.favorites.find((item)=>{
					return item == id	
				})
				if(!exists){
					setStore({
						...store,
						favorites:[...store.favorites,id]
					})
					localStorage.setItem("favorites" ,JSON.stringify(store.favorites))
				}
				
			},

			deleteFavs: (id) =>{
				const store = getStore()
				let newFavorite = store.favorites.filter((item,index)=>{
					return id != index
				})
				store.favorites = newFavorite
				setStore({
					...store,
					favorites: store.favorites
				})
				localStorage.setItem("favorites", JSON.stringify(store.favorites))
			},
		}
	};
};

export default getState;
