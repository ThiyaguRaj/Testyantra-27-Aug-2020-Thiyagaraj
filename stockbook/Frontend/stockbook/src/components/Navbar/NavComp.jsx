import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom';
import Book from './Images/book.png';
import './nav.css';
import Login from '../Login/Login.jsx';
import Welcome from '../Welcome/Welcome';
import ContactUs from '../ContactUs/ContactUs';
import AboutUs from '../About/AboutUs';
import TermsAndConditions from '../TermsAndConditions/TermsAndConditions';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';

class NavComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:true
    }
  }
  render() {
    let data="";
    if(this.state.value){
      data=<NavLink to="/login" className="log ml-auto"><button onClick={()=>{this.setState({value:false})}} className="btn btn-primary">SIGNIN</button></NavLink>
    }else{
      data="";
    }
    return (
      <Router>
        <nav class="navbar navbar-expand-lg sticky-top navbar-primary bg-primary">
          <NavLink exact to="/"><img src={Book} alt="Logo" /><label className="com ml-3">Stockbook</label></NavLink>
          {data}
        </nav>

        <Route exact path="/" component={Welcome} />
        <Route path="/login" component={Login} />
        <Route path="/terms" component={TermsAndConditions} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/about" component={AboutUs} />
        <Route path="/privacy" component={PrivacyPolicy} />


        <footer className="foot sticky-bottom mt-5">
          <div className="footdata">
            Testyantra Solutions: 50, 2nd Floor, Brigade MLR Center, Vanivilas Rd, Bengaluru, Karnataka 560004 | <br />Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI and our Terms <br />of Use and Privacy Policy <NavLink className="terms" to="/terms">Terms and conditions</NavLink><br /><br />
            <NavLink className="terms" to="/contact">ContactUs </NavLink><br /><br />
            <NavLink className="terms" to="/about">About Us </NavLink><br /><br />
            <NavLink className="terms" to="/privacy">Privacy Policy</NavLink>
          </div>
        </footer>
      </Router>
    );
  }
}

export default NavComp;