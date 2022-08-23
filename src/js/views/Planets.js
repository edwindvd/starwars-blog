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
		<div>
            <h1> {store.planet && store.planet.properties.name} </h1>
            <h1>{params.uid}</h1>
		</div>
	);
};

