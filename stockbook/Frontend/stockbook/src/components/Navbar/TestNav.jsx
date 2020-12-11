import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Book from './Images/book.png';
import Footer from '../Footer/Footer';
import Login from '../Login/Login.jsx';
import Welcome from '../Welcome/Welcome';
import Company from '../Company/CompanyHome';
import Signup from '../SignUp/SignUp';
import AddStock from '../Stock/AddStock';
import Investor from '../Investor/Investor';
import Admin from '../Admin/AdminHome';
import './nav.css';
import { useState } from 'react';



function TestNav(props) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    function loginCheck(){
        setIsLoggedIn(true);
    }
    function welcomeCheck(){
        setIsLoggedIn(false);
    }

    return (
        <div className="">
            <nav class="navbar navbar-expand-lg sticky-top navbar-primary bg-primary">
                <NavLink exact to="/"><img src={Book} alt="Logo" /><label className="com ml-3">Stockbook</label></NavLink>
                {!isLoggedIn && <NavLink to="/login" className="ml-auto btnlog"><button className="btn btn-primary sigbtn">Signin</button></NavLink>}
            </nav>
             <Route exact path="/" render={()=><Welcome loginCheck={welcomeCheck} />} />
            <Route path="/login" render={() => <Login loginCheck={loginCheck} />} />
            <Route path="/company" render={()=><Company loginCheck={loginCheck} />} />
            <Route path="/signup" render={()=><Signup loginCheck={welcomeCheck} />} />
            <Route path="/addstock" render={()=><AddStock loginCheck={loginCheck} />} />
            <Route path="/Investor" render={()=><Investor loginCheck={loginCheck} />} />
            <Route path="/admin" render={()=><Admin loginCheck={loginCheck} />} />
            <Footer />
        </div>
    );

}

export default TestNav;