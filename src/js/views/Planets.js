import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Planets = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

    useEffect(()=>{
        actions.getPlanetByUid(params.uid)

    },[])

	return (  
	       <div className="main px-5 mx-5">
		<div className="container1 row">
			<div className="image col-4 mb-3">
				<div className="container">
	 				<img src="https://via.placeholder.com/300x250" />
				</div>
			</div>
		<div className="text text-center col-8 p-4">
				<h2 className="title">{store.planet && store.planet.properties.name}</h2>
				<p className="description fs-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum deserunt debitis harum doloribus? Laboriosam incidunt placeat ipsum tempore recusandae? Officia maxime enim iusto alias a nesciunt quisquam dolores veniam illo!</p>
			</div>
	 	</div>
		<div className="container2 wd-flex border-top border-danger border-2">
			<div className="details d-flex pt-4">
				<h5 className="px-5 text-danger">Name:
	 				<p className="pt-2 text-danger">{store.planet && store.planet.properties.name}</p>
	 			</h5>
				<h5 className="px-5 text-danger">Climate:
					<p className="pt-2 text-danger">{store.planet && store.planet.properties.climate}</p>
				</h5>
			<h5 className="px-5 text-danger">Population:
	 				<p className="pt-2 text-danger">{store.planet && store.planet.properties.population}</p>
				</h5>
				<h5 className="px-5 text-danger">Orbital Period:
					<p className="pt-2 text-danger">{store.planet && store.planet.properties.orbital_period}</p>
	 			</h5>
	 			<h5 className="px-5 text-danger">Rotation Period:
					<p className="pt-2 text-danger">{store.planet && store.planet.rotation_period}</p>
	 			</h5>
				<h5 className="px-5 text-danger">Diameter:
					<p className="pt-2 text-danger">{store.character && store.character.properties.diameter}</p>
	 			</h5>
	 		</div>
		</div>
		</div>
	);
};

