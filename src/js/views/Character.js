import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Character = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

    useEffect(()=>{
        actions.getCharacterByUid(params.uid)

    },[])

	return (  
	       <div className="main">
		<div className="container1 row">
			<div className="image col-4 mb-3">
				<div className="container">
	 				<img src="https://via.placeholder.com/300x250" />
				</div>
			</div>
		<div className="text text-center col-8 p-4">
				<h2 className="title">{store.character && store.character.properties.name}</h2>
				<p className="description fs-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum deserunt debitis harum doloribus? Laboriosam incidunt placeat ipsum tempore recusandae? Officia maxime enim iusto alias a nesciunt quisquam dolores veniam illo!</p>
			</div>
	 	</div>
		<div className="container2 wd-flex border-top border-danger border-2">
			<div className="details d-flex pt-4">
				<h5 className="px-5 text-danger">Name:
	 				<p className="pt-2 text-danger">{store.character && store.character.properties.name}</p>
	 			</h5>
				<h5 className="px-5 text-danger">Birth Year:
					<p className="pt-2 text-danger">{store.character && store.character.properties.birth_year}</p>
				</h5>
			<h5 className="px-5 text-danger">Gender:
	 				<p className="pt-2 text-danger">{store.character && store.character.properties.gender}</p>
				</h5>
				<h5 className="px-5 text-danger">Height:
					<p className="pt-2 text-danger">{store.character && store.character.properties.height}</p>
	 			</h5>
	 			<h5 className="px-5 text-danger">Skin Color:
					<p className="pt-2 text-danger">{store.character && store.character.properties.skin_color}</p>
	 			</h5>
				<h5 className="px-5 text-danger">Eye Color:
					<p className="pt-2 text-danger">{store.character && store.character.properties.eye_color}</p>
	 			</h5>
	 		</div>
		</div>

{/* 
            <h1> {store.character && store.character.properties.name} </h1>
            <h1>{params.uid}</h1> */}

		</div>
	);
};
