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