import React, {useEffect, useContext} from "react";
import { Context } from "../store/appContext";
// import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/Card.js"


export const Home = () => {
	const {store, actions} = useContext(Context)
	useEffect(()=>{
		actions.getPlanets()
		actions.getCharacters()
	},[])

	// const {store, actions} = useContext(Context)
	// useEffect(()=>{
	// 	actions.getPlanets()
	// },[])
	
	//tenemos las tarjetas de personajes, vehiculos y planetas

	return(
<div className="home">
	<div className=" mt-5">
		<h1> Character </h1>
		<div className="row">
		{store.characters.map((alliens) => {
			return <Card key={alliens.uid} item={alliens}/>
		})}
		</div>
	</div>
	<div className=" mt-5">
		<h1> Planets </h1>
		<div className="row">
		{store.planets.map((planetas) => {
			return <Card key={planetas.uid} item={planetas}/>
		})}
		</div>
	</div>
	<div className=" mt-5">
		<h1> Vehicle </h1>
		<div className="row">
		{store.vehicles.map((naves) => {
			return <Card key={naves.uid} item={naves}/>
		})}
		</div>
	</div>
</div>

)};
