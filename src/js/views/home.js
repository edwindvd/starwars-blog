import React, {useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const {store, actions} = useContext(Context)
	useEffect(()=>{
		actions.getCharacters()
	},[])
	
	
	return(
	<div className="text-center mt-5">
		{store.characters.map((alliens, i) => {
			return <h1 key={i}>{alliens.name}</h1>
		})}
	</div>
)};
