import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../store/appContext";
import { FaBars, FaTrashAlt } from 'react-icons/fa';
import SW from "../../img/SW.jpg"

const Navbar = () => {

    const { store, actions } = useContext(Context);
    console.log(store.favorites);

    return (
        <nav className="navbar navbar-expand-lg sticky-top bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img className="img-fluid" src={SW} alt="Star Wars Blog" style={{maxWidth: "6em"}} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <FaBars />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav justify-content-end flex-grow-1 me-5 ">
                        <NavLink className="nav-link" to="/">
                            Home
                        </NavLink>
                        <NavLink className="nav-link" to="/characters">
                            Characters
                        </NavLink>
                        <NavLink className="nav-link" to="/planets">
                            Planets
                        </NavLink>
                        <NavLink className="nav-link" to="/vehicles">
                            Vehicles
                        </NavLink>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Favorites <span className="badge bg-warning text-dark">{store.favorites.length}</span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                {store.favorites.length > 0 ? (
                                    store.favorites.map((favorite, index) => {
                                        return (
                                            <li className="dropdown-item d-flex justify-content-between" key={index}>
                                                <div className="text-favorite">
                                                    {favorite}
                                                </div>
                                                <FaTrashAlt className="btn-delete" onClick={() => { actions.deleteFavorite({ index }) }} />
                                            </li>
                                            
                                        );
                                    })
                                ) : (
                                    <li><a className="dropdown-item">No Favorites</a></li>
                                )}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;