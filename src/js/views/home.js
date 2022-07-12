import React, {useEffect, useContext} from "react";
import { Context } from "../store/appContext";
// import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/Card.js"

export const Home = () => {
	const {store, actions} = useContext(Context)
	useEffect(()=>{
		actions.getCharacters()
	},[])
	
	
	return(
	<div className="text-center mt-5">
		{store.characters.map((alliens) => {
			return <Card key={alliens.uid} item={alliens}/>
		})}
	</div>
)};
