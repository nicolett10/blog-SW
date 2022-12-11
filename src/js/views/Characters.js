import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Card from "../component/card";
import Spinner from "../component/spinner";


const Characters = () => {

    const { store, actions } = useContext(Context);

    return (
        <div className="characters bg-dark">
            <h2 className="tittle ms-4 mb-4" style={{color:"hsl(50, 84%, 51%)"}}>Characters</h2>
            <div className="card-deck overflow-auto">
                <div className="d-flex flex-row flex-nowrap">
                    {!!store.people && store.people.length >= 0 ? store.people.map((character, index) => {
                        return (
                            <Card
                                key={index}
                                name={character?.name}
                                labelText1={"Gender: "}
                                text1={character?.gender}
                                id={index}
                                section="characters"
                            />
                        );
                    }) : (<Spinner />)}
                </div>
            </div>
        </div>
    );
};

export default Characters;