import React, {Component, createContext} from 'react';

class NavBar extends Component {

    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar <span
                        className="badge bg-secondary text-light m-2">{this.props.totalCounters}</span> </a>
                </div>
            </nav>)
    }
}

export default NavBar;