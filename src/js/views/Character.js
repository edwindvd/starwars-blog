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
		<div>       
	{/* //         <div className="main">
	// // 	<div className="container1">
	// // 		<div className="image mb-3">
	// // 			<div className="container g-0 d-flex">
	// // 				<img src="https://via.placeholder.com/550x350" alt="..." />
	// // 			</div>
	// // 		</div>
	// // 		<div className="text text-center p-4">
	// // 			<h2 className="title">{info.properties?.name}</h2>
	// // 			<p className="description fs-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum deserunt debitis harum doloribus? Laboriosam incidunt placeat ipsum tempore recusandae? Officia maxime enim iusto alias a nesciunt quisquam dolores veniam illo!</p>
	// // 		</div>
	// // 	</div>
	// // 	<div className="container2 d-flex border-top border-danger border-2">
	// // 		<div className="details d-flex pt-4">
	// // 			<h5 className="px-5 text-danger">Name:
	// // 				<p className="pt-2 text-danger">{info.properties?.name}</p>
	// // 			</h5>
	// // 			<h5 className="px-5 text-danger">Birth Year:
	// // 				<p className="pt-2 text-danger">{info.properties?.birth_year}</p>
	// // 			</h5>
	// // 			<h5 className="px-5 text-danger">Gender:
	// // 				<p className="pt-2 text-danger">{info.properties?.gender}</p>
	// // 			</h5>
	// // 			<h5 className="px-5 text-danger">Height:
	// // 				<p className="pt-2 text-danger">{info.properties?.height}</p>
	// // 			</h5>
	// // 			<h5 className="px-5 text-danger">Skin Color:
	// // 				<p className="pt-2 text-danger">{info.properties?.skin_color}</p>
	// // 			</h5>
	// // 			<h5 className="px-5 text-danger">Eye Color:
	// // 				<p className="pt-2 text-danger">{info.properties?.eye_color}</p>
	// // 			</h5>
	// // 		</div>
	// // 	</div>
	// // </div> */}


            <h1> {store.character && store.character.properties.name} </h1>
            <h1>{params.uid}</h1>

		</div>
	);
};
