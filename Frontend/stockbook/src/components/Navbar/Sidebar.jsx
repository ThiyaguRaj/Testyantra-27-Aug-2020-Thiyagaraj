import React, { Component } from 'react';
import { Nav, NavLink } from "react-bootstrap";
import { withRouter  } from "react-router";
import {Route, BrowserRouter as Router} from 'react-router-dom';
import './Dashboard.css';
import Login from '../Login/Login';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
                <Router>
                    <Route path="/login" user="abc" component={Login} />
                    <div className="menu">
                        <a href="/login" className="list-group-item list-group-item-action bg-light">Dashboard</a>
                        <a href="/login" className="list-group-item list-group-item-action bg-light">Login</a>
                        <a href="/login" className="list-group-item list-group-item-action bg-light">Shortcuts</a>
                        <a  href="/login" className="list-group-item list-group-item-action bg-light">Overview</a>
                        <a href="/login" className="list-group-item list-group-item-action bg-light">Events</a>
                        <a href="/login" className="list-group-item list-group-item-action bg-light">Profile</a>
                        <a href="/login" className="list-group-item list-group-item-action bg-light">Status</a>
                    </div>
                    
                </Router>
        );
    }
}
export default withRouter(Sidebar);