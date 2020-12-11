import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './welcome.css';
import Tech from './Images/tech.svg';
import Data from './Images/data.svg';
import Mob from './Images/mobile.svg';
import Sett from './Images/setting.svg';
import { useEffect } from 'react';

function Welcome(props) {

  useEffect(()=>{
    props.loginCheck();
  },[])
  return (
    <div>
      <Jumbotron className="jumb bg-primary m-0 text-light">
        <h2 className="text-center head">Welcome to StockBook</h2>
        <p className="welcome text-center"><br></br>
          The purpose of stock control is to reduce the costs of holding stock,
          while ensuring you can meet customer demand and making sure that there's enough material for
          production.
          Businesses should always
          have a safe amount of stock so that they're able to react and cover any unforeseen issues.
        </p>
      </Jumbotron>
      <div className=" pt-5">
      <div className="text-center mb-5 acc">
        <h3>Benefits of opening a Stockbook account</h3>
      </div>
      <div className="container notes">
        <div className="row">
          <div className="col-md-6 text-center mt-5 mb-5">
            <img className="snip" src={Tech} />
            <h3 className="sniphead">Easy access</h3>
            <p className="text-muted">Have a mobile phone? You can<br />buy and sell stocks anywhere<br /> everywhere</p>
          </div>
          <div className="col-md-6 text-center mt-5 mb-5">
            <img className="snip" src={Data} />
            <h3 className="sniphead">Data Security</h3>
            <p className="text-muted">Thinking about your data?<br />Data you provide will be<br />in a secured place</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 text-center mt-5 mb-5">
            <img className="snip" src={Mob} />
            <h3 className="sniphead">Paperless account opening</h3>
            <p className="text-muted">Free equity deliveries, Rs. 20/intraday<br/> order*. Your profits are yours. Why<br/> spend on brokerage?</p>
          </div>
          <div className="col-md-6 text-center mt-5 mb-5">
            <img className="snip" src={Sett} />
            <h3 className="sniphead">Customization</h3>
            <p className="text-muted">Customise your account like<br />your own taste and do things<br /> by your own</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Welcome;