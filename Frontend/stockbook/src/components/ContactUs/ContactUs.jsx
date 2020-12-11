import React, { Component } from 'react';
import './contact.css'
import Phone from './Images/phone.png';
import Addr from './Images/address.png';
import Mail from './Images/email.png';
import Fb from './Images/fb.png';
import Insta from './Images/insta.png';
import Site from './Images/site.png';
import { Jumbotron } from 'react-bootstrap';



class ContactUs extends Component {

    render() {
        return (
            <div>
                <Jumbotron className="text-light text-center bg-primary jumbo1">
                    <h1 className="display-3">Contact Us</h1>
                    <hr className="my-2" />
                    <p>We're here to help solve all your queries.</p>

                </Jumbotron>
                    <div className="condiv text-left m-auto col-md-4 offset-md-4 p-5">
                        
                        <img src={Phone} alt="Phone"/><strong>phone:</strong><br/>+91 (080) 4120-4235<br></br><hr/>
                        <img src={Addr} alt="Address"/><strong>Address:</strong><br></br> #88, 3rd Floor, Brigade Chambers,
                        Gandhi Bazaar Main Rd, Basavanagudi, Bangalore-560004 Karnataka, India<br></br><hr/>
                        <img src={Mail} alt="Mail"/><strong>Email:</strong>  @testyantra.com<br></br><hr/>
                        <img src={Fb} alt="Fb"/><strong>facebook:</strong> https://www.facebook.com/TestYantra<br></br><hr/>
                        <img src={Insta} alt="Instagram"/><strong>Instagram:</strong> @testyantraltd<br></br><hr/>
                        <img src={Site} alt="Site"/><strong>website:</strong> http://testyantra.com/<br></br><hr/>

                    </div>
            </div>
        )
    }
}
export default ContactUs;