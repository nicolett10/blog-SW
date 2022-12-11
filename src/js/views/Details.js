import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import placeholder from "../../img/placeholder.jpg";

const Detail = () => {
  const { store, actions } = useContext(Context);
  const [details, setDetails] = useState("");
  const params = useParams();
  const picture = Number(params.id) + 1;
  const URL_PICTURE =
    "https://starwars-visualguide.com/assets/img/" +
    params.section +
    "/" +
    picture +
    ".jpg";
  const ALT_PICTURE = placeholder;

  useEffect(() => {
    if (params.section == "characters") {
      setDetails(store.people[params.id]);
    }
    else if (params.section == "planets") {
      setDetails(store.planets[params.id]);

    } else {
      setDetails(store.vehicles[params.id]);
    }
  }, []);

  if (params.section == "characters") {
    return (
      <div className="container">
        <div className="card m-auto">
          <div className="row mb-5">
            <div className="col-lg-4  col-sm-6">
              <img
                src={URL_PICTURE}
                className="img-character img-fluid"
                style={{ height: "100%" }}
              />
            </div>

            <div className="card-body col-lg-8 col-sm-6 justify-content-center">
              <h5 className="card-title" style={{ color: "hsl(50, 84%, 51%)" }}>
                {details?.name}
              </h5>
              <h6>Birth year</h6>
              <p className="card-text">{details?.birth_year}</p>
              <h6>Gender</h6>
              <p className="card-text">{details?.gender}</p>
              <h6>Height</h6>
              <p className="card-text">{details?.height}</p>
              <h6>Skin color</h6>
              <p className="card-text">{details?.skin_color}</p>
              <h6>Eye color</h6>
              <p className="card-text">{details?.eye_color}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  else if (params.section == "planets") {
    return (
      <div className="container">
        <div className="card m-auto">
          <div className="row mb-5">
            <div className="col-lg-4  col-sm-6">
              <img
                src={params.id == 0 ? ALT_PICTURE : URL_PICTURE}
                alt="photo"
                className="Img-planets img-fluid"
                style={{ height: "100%" }}
              />
            </div>

            <div className="card-body col-lg-8 col-sm-6 justify-content-center">
              <h5 className="card-title" style={{ color: "hsl(50, 84%, 51%)" }}>
                {details?.name}
              </h5>
              <h6>Climate</h6>
              <p className="card-text">{details?.climate}</p>
              <h6>Population</h6>
              <p className="card-text">{details?.population}</p>
              <h6>Orbital period</h6>
              <p className="card-text">{details?.orbital_period}</p>
              <h6>Rotation period</h6>
              <p className="card-text">{details?.rotation_period}</p>
              <h6>Diameter</h6>
              <p className="card-text">{details?.diameter}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="card m-auto">
          <div className="row mb-5">
            <div className="col-lg-4  col-sm-6">
              <img
                src={params.id == 0 ? ALT_PICTURE : URL_PICTURE}
                alt="photo"
                className="Img-planets img-fluid"
                style={{ height: "100%" }}
              />
            </div>

            <div className="card-body col-lg-8 col-sm-6 justify-content-center">
              <h5 className="card-title" style={{ color: "hsl(50, 84%, 51%)" }}>
                {details?.name}
              </h5>
              <h6>Model</h6>
              <p className="card-text">{details?.model}</p>
              <h6>Manufacturer</h6>
              <p className="card-text">{details?.manufacturer}</p>
              <h6>Cost in credits</h6>
              <p className="card-text">{details?.cost_in_credits}</p>
              <h6>Max Atmosphering Speed</h6>
              <p className="card-text">{details?.max_atmosphering_speed}</p>
              <h6>Vehicle Class</h6>
              <p className="card-text">{details?.vehicle_class}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Detail;
