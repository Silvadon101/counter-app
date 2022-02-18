import React, {Component, createContext} from 'react';

const NavBar = (props) => {
    /**
     * ---------------------------------------
     *  Stateless Functional Component
     *
     * A class-less component that returns
     * a React Element
     * @return reactElement
     * ---------------------------------------
     */

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar <span
                    className="badge bg-secondary text-light m-2">{props.totalCounters}</span> </a>
            </div>
        </nav>)

}

export default NavBar;