import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const handleNavbarToggle = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    const closeNavbar = () => {
        setIsNavbarOpen(false);
    };

    return (
        <nav className="navbar navbar-expand-lm navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/" onClick={closeNavbar}>
                    CIDIUM
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={handleNavbarToggle}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`}
                    id="navbarNav"
                >
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                activeClassName="active"
                                exact={true}
                                to="/inicio"
                                onClick={closeNavbar}
                            >
                                Welcome
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                activeClassName="active"
                                exact={true}
                                to="/posts"
                                onClick={closeNavbar}
                            >
                                New Post
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                activeClassName="active"
                                exact={true}
                                to="/edit"
                                onClick={closeNavbar}
                            >
                                All Posts
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                activeClassName="active"
                                exact={true}
                                to="/login"
                                onClick={closeNavbar}
                            >
                                Salir
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
