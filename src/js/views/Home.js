import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Card from "../component/card";
import Spinner from "../component/spinner";

function Home() {

	const { store, actions } = useContext(Context);
	const [searchpeople, setSearchpeople] = useState("");
	const [searchplanet, setSearchplanet] = useState("");
	const [searchvehicle, setSearchvehicle] = useState("");


	const searcherpeople = (event) => {
		setSearchpeople(event.target.value)
		console.log(event.target.value)
	}

	const searcherplanet = (event) => {
		setSearchplanet(event.target.value)
		console.log(event.target.value)
	}

	const searchervechicle = (event) => {
		setSearchvehicle(event.target.value)
		console.log(event.target.value)
	}

	let searchresultpeople = {};
	if (!searchpeople) {
		searchresultpeople = store.people;
	} else {
		searchresultpeople = store.people.filter((data) =>
			data.name.toLowerCase().includes(searchpeople.toLowerCase())
		)
	}

	let searchresultplanet = {};
	if (!searchplanet) {
		searchresultplanet = store.planets;
	} else {
		searchresultplanet = store.planets.filter((data) =>
			data.name.toLowerCase().includes(searchplanet.toLowerCase())
		)
	}

	let searchresultvehicle = {};
	if (!searchvehicle) {
		searchresultvehicle = store.vehicles;
	} else {
		searchresultvehicle = store.vehicles.filter((data) =>
			data.name.toLowerCase().includes(searchvehicle.toLowerCase())
		)
	}

	return (
		<div className="container bg-dark mb-5">
			<div className="row mb-5 pt-3 d-flex justify-content-between">
				<h2 className="tittle-home col-4"><Link to="/characters"style={{textDecoration:"none", color:" hsl(50, 84%, 51%)"}}>Characters</Link></h2>
				<div className="col-md-3 text-white">
					<input className="input bg-light border-light mt-2" type="text" placeholder="Search Character" value={searchpeople} onChange={searcherpeople} />
				</div>
			</div>
			<div className="characters container-fluid p-0 mb-4">
				<div className="card-deck overflow-auto">
					<div className="d-flex flex-row flex-nowrap">
						{!!searchresultpeople && searchresultpeople.length > 0 ? searchresultpeople.map((character, index) => {
							return (
								<Card
									key={index}
									name={character.name}
									labelText1={"Gender: "}
									text1={character.gender}
									id={index}
									section="characters"
								/>
							);
						}) : (<Spinner />)}
					</div>
				</div>
			</div>
			<div className="row mb-5 d-flex justify-content-between">
				<h2 className="tittle-home col-4"><Link style={{textDecoration:"none", color:"hsl(50, 84%, 51%)"}} to="/planets">Planets</Link></h2>
				<div className="col-md-3 text-white">
					<input className="input bg-light border-light" type="text" placeholder="Search Planet" value={searchplanet} onChange={searcherplanet} />
				</div>
			</div>
			<div className="planets container-fluid p-0 mb-4">
				<div className="card-deck overflow-auto">
					<div className="d-flex flex-row flex-nowrap">
						{!!searchresultplanet && searchresultplanet.length > 0 ? searchresultplanet.map((planets, index) => {
							return (
								<Card
									key={index}
									name={planets.name}
									labelText1={"Population: "}
									text1={planets.population}
									id={index}
									section="planets"
								/>
							);
						}) : (<Spinner />)}
					</div>
				</div>
			</div>
			<div className="row mb-5 d-flex justify-content-between">
				<h2 className="tittle-home col-4"><Link style={{textDecoration:"none", color:"hsl(50, 84%, 51%)"}} to="/vehicles">Vehicles</Link></h2>
				<div className="col-md-3 text-white">
					<input className="input bg-light border-light" type="text" placeholder="Search Vehicles" value={searchvehicle} onChange={searchervechicle} />
				</div>
			</div>
			<div className="vehicles container-fluid p-0 mb-4">
				<div className="card-deck overflow-auto">
					<div className="d-flex flex-row flex-nowrap">
						{!!searchresultvehicle && searchresultvehicle.length > 0 ? searchresultvehicle.map((vehicles, index) => {
							return (
								<Card
									key={index}
									name={vehicles.name}
									labelText1={"Cost: "}
									text1={vehicles.cost_in_credits}
									id={index}
									section="vehicles"
								/>
							);
						}) : (<Spinner />)}
					</div>
				</div>
			</div>



		</div>
	);
}

export default Home;