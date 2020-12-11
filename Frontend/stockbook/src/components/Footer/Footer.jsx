import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import ContactUs from '../ContactUs/ContactUs';
import AboutUs from '../About/AboutUs';
import TermsAndConditions from '../TermsAndConditions/TermsAndConditions';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';
import Fb from './Images/fb.png';
import Insta from './Images/insta.png';
import Twitter from './Images/twitter.png';
import Google from './Images/google.png';
import './footer.css';

export default function Footer(props) {
    return (
        <div>
            <Route path="/terms" component={TermsAndConditions} />
            <Route path="/contact" component={ContactUs} />
            <Route path="/about" component={AboutUs} />
            <Route path="/privacy" component={PrivacyPolicy} />
            <footer className="foot sticky-bottom">
                <div className="footdata">
                    <p>Testyantra Solutions: 50, 2nd Floor, Brigade MLR Center, Vanivilas Rd, Bengaluru, Karnataka 560004 | Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI and our Terms of Use and Privacy Policy</p>
                    <div className="row">
                        <div className="col-md-3 mt-5">
                            <NavLink className="terms" to="/terms">Terms and conditions</NavLink><br /><br />
                            <NavLink className="terms" to="/contact">ContactUs </NavLink><br /><br />
                            <NavLink className="terms" to="/about">About Us </NavLink><br /><br />
                            <NavLink className="terms" to="/privacy">Privacy Policy</NavLink><br /><br />
                        </div>
                        <div className="col-md-9 p-5 media">
                            <div className="min ml-auto">
                                <a href="/"><img src={Fb} alt="Facebook" /></a><br />
                                <a href="/"><img src={Insta} alt="Instagram" /></a><br />
                                <a href="/"><img src={Twitter} alt="Twitter" /></a><br />
                                <a href="/"><img src={Google} alt="Google" /></a>
                            </div>
                        </div>
                    </div>
                </div>



            </footer>
        </div>
    );
}