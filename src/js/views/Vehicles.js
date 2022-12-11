import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Card from "../component/card";
import Spinner from "../component/spinner";


const Vehicles = () => {

    const { store, actions } = useContext(Context);

    return (
        <div className="vehicles bg-dark">
            <h2 className="tittle ms-4 mb-4" style={{color:"hsl(50, 84%, 51%)"}}>Vehicles</h2>
            <div className="card-deck overflow-auto">
                <div className="d-flex flex-row flex-nowrap">
                    {!!store.vehicles && store.vehicles.length >= 0 ? store.vehicles.map((vehicles, index) => {
                        return (
                            <Card
                                key={index}
                                name={vehicles.name}
                                labelText1={"Model: "}
                                text1={vehicles.model}
                                id={index}
                                section="vehicles"
                            />
                        );
                    }) : (<Spinner />)}
                </div>
            </div>
        </div>
    );
}

export default Vehicles;