import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Card from "../component/card";
import Spinner from "../component/spinner";


const Planets = () => {

    const { store, actions } = useContext(Context);

    return (
        <div className="planets bg-dark">
            <h2 className="tittle ms-4 mb-4" style={{color:"hsl(50, 84%, 51%)"}}>Planets</h2>
            <div className="card-deck overflow-auto">
                <div className="d-flex flex-row flex-nowrap">
                    {!!store.planets && store.planets.length >= 0 ? store.planets.map((planets, index) => {
                        return (
                            <Card
                                key={index}
                                name={planets?.name}
                                labelText1={"Population: "}
                                text1={planets?.population}
                                id={index}
                                section="planets"
                            />
                        );
                    }) : (<Spinner />)}
                </div>
            </div>
        </div>
    );
}

export default Planets;