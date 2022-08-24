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
		<div>
            <h1> {store.vehicle && store.vehicle.properties.name} </h1>
            <h1>{params.uid}</h1>
		</div>
	);
};
