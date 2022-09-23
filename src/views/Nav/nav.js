import React from 'react';
import './Nav.scss';

//ReactDom
import ReactDOM from "react-dom/client";
import {
    Nav, NavLink
} from "react-router-dom";

class Navs extends React.Component {
    render() {
        return (
            <div className="topnav">
                {/* <a className="active" href="/">Home</a>
                <a href="/todo">Todos</a>
                <a href="/about">About</a> */}
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/todo">Todos</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/TestNav">Test</NavLink>
                <NavLink to="invoices">Invoices</NavLink>
                <NavLink to="user">User</NavLink>
            </div>
        )
    }
}

export default Navs;