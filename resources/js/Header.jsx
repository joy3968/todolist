import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import "../css/app.css";
import {BrowserRouter} from "react-router-dom";
import {BsPrefixRefForwardingComponent} from "react-bootstrap/helpers";
import {ButtonProps} from "react-bootstrap/Button";

function Header()
{
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Todo List</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/add">Add product</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header;
