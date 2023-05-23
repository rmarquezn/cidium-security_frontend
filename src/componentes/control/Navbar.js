import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">


            <div className="navbar-collapse">
                <ul className="navbar-nav">

                    <li className="nav-item">
                        <Link className="navbar-brand" to="/">
                            CIDIUM
                        </Link>
                    </li>
                    <li className="nav-item">


                        <NavLink
                            className={({ isActive }) => isActive ? "active" : "nav-item nav-link"}
                            exact="true"
                            to="/inicio"
                        >
                            Inicio
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink
                           className={({ isActive }) => isActive ? "active" : "nav-item nav-link"}
                           exact="true"
                            to="/posts"
                        >
                            Posts
                        </NavLink>
                    </li>


                    <li className='nav-item'>
                        <NavLink
                           className={({ isActive }) => isActive ? "active" : "nav-item nav-link"}
                           exact="true"
                            to="/login"
                        >
                            Salir
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

