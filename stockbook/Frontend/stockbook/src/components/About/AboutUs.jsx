// import React from 'react';
// import { Jumbotron } from 'react-bootstrap';


// function AboutUs() {
//     return (

//         <div className="m-5">
//             <p>
//                 <h3>Stock  Management System</h3>

//                 <p>
//                     This page outlines the Project. The project is to develop a Stock Management System.
//                     This page contains the work flow of the system and gives guidelines on how to build the functionality
//                     gradually in each of the course modules.
//                 </p>
//                 <p>
//                     This Web application is aimed at providing a standalone Stock Management System simulation,
//                     which is used by investors to buy stocks/shares of a company
//                     There are three kind of users, (company manager) one who add the stocks and remove stocks
//                     from the application. This user can update the stocks that can be brought by the investors.
//                     Investor,the one who can buy some stocks from the application as well as sell the stocks whatever user
//                     bought from the application in the application dashboard. And last type of user
//                     (admin) one who can do crud operation on company manager,
//                     user and crud operation on companies that are visible to investors to buy stocks. Admin will decide how much
//   stock an investor can buy and what is the maximum amount he/she can invest in one company.<br></br><br></br>
//                 </p>

//             </p>
//         </div>
//     )

// }
// export default AboutUs;

import React from 'react';
import './About.css';
import { Jumbotron } from 'react-bootstrap';
export default function AboutUs(props) {
    return (
        <div className="about">


            <div className="grp">

                <Jumbotron className="bg-primary jumbo1">
                    <h1 className="display-3">What we do</h1>
                    <hr className="my-2" />
                    <p>We're working to make trading easier to work and cheaper to follow</p>

                </Jumbotron>
            </div>
            <div className="aboutpara col-md-6 offset-md-3">
                <h2>We power the curious.</h2>
                <p>Powered by millions of dreams, hopes and aspirations, India today is brimming with potential. At NSE, we are driven by this ambition that makes India charge ahead and take a more prominent place on the global stage.We aim to catalyze India's growth story by creating investment opportunities, enabling access and empowering our stakeholders. We work harder, smarter and faster to deliver impact across the investment ecosystem.</p>
                <p>In a world that changes shape by the second, we constantly reinvent ourselves to redefine the future.Our ambition gives us direction. It pivots, and propels us. It is the leap we take from today, towards a brighter tomorrow.</p>
            </div>
            <div className="aboutpara col-md-6 offset-md-3">
                <h2>Using feedback to improve our world.</h2>
                <p> SB'sidentity crafted in the nineties has for the last 25 years, stood for reliability, expertise, innovation and trust. In the last 25 years, the Indian economy and technology landscape has changed dramatically. So, As Stockbook</p>
                <p>The new identity depicts growth with a modern representation of a blooming flower. The multiple colours capture the multi-faceted nature of the business. The red denotes SB's strong foundation, the yellow and orange are inspired by the flower for prosperity and auspicious ventures the marigold, and the blue triangle is a compass, always future-oriented and helping us find our true North.</p>
                <p>The sharp edges indicate technology, precision and efficiency. The shape also amplifies SB's tradition of collaboration. The internal vectors depict SB's DNA of continuously pushing boundaries.</p>
            </div>
        </div>
    );
}