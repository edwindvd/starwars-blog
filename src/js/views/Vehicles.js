import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Vehicles = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

    useEffect(()=>{
        actions.getVehicleByUid(params.uid)

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
				<h2 className="title">{store.vehicle && store.vehicle.properties.name}</h2>
				<p className="description fs-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum deserunt debitis harum doloribus? Laboriosam incidunt placeat ipsum tempore recusandae? Officia maxime enim iusto alias a nesciunt quisquam dolores veniam illo!</p>
			</div>
	 	</div>
		<div className="container2 wd-flex border-top border-danger border-2">
			<div className="details d-flex pt-4">
				<h5 className="px-5 text-danger">Name:
	 				<p className="pt-2 text-danger">{store.vehicle && store.vehicle.properties.name}</p>
	 			</h5>
				<h5 className="px-5 text-danger">Model:
					<p className="pt-2 text-danger">{store.vehicle && store.vehicle.properties.model}</p>
				</h5>
			<h5 className="px-5 text-danger">Manufacturer:
	 				<p className="pt-2 text-danger">{store.vehicle && store.vehicle.properties.manufacturer}</p>
				</h5>
				<h5 className="px-5 text-danger">Class:
					<p className="pt-2 text-danger">{store.vehicle && store.vehicle.properties.vehicle_class}</p>
	 			</h5>
	 			<h5 className="px-5 text-danger">Crew:
					<p className="pt-2 text-danger">{store.vehicle && store.vehicle.crew}</p>
	 			</h5>
				<h5 className="px-5 text-danger">Consumables:
					<p className="pt-2 text-danger">{store.character && store.character.properties.consumables}</p>
	 			</h5>
	 		</div>
		</div>
		</div>
	);
};
