import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './Navbar.css';


class Navbar extends Component {
    render() {

        const renderLinks = this.props.links.map(link =>
        <NavLink exact activeClassName="Navbar-active" to={`/${link.name}`} key={uuid()}>{link.name}</NavLink>
        )

        return (
            <div className="Navbar">
                <NavLink exact activeClassName="Navbar-active" to="/dogs">Home</NavLink>
                {renderLinks}
            </div>
        );
    }
}

export default Navbar;