import React, { Component } from "react";
import "./company.css";
import User from "../Investor/Images/user.png";
import { withRouter } from "react-router-dom";
import Stocks from '../Stock/Stock';
import axios from "axios";
import Update from './UpdateCompany';

class CompanyHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company:{},
      stockClick: false,
      comClick:false,
      userData:{}
    }
  }
  componentDidMount(){
    this.props.loginCheck();
    axios({
      method:'post',
      url:'http://localhost:8080/stockmanagement/companies/company',
      data:JSON.parse(localStorage.getItem("Manager")),
      headers: { "Content-Type": "application/json" }
    }).then((resp)=>{
      this.setState({company:resp.data.data});
      console.log(this.state.userData);
      console.log(this.state.company);
    })
    this.setState({userData:JSON.parse(localStorage.getItem("Manager"))});
  }

  getCompFunc=()=>{
    this.setState({stockClick:false});
    this.setState({comClick:!this.state.comClick});
  }
  handleOut = () => {
    localStorage.removeItem(this.state.userData.role);
    localStorage.removeItem("company");
    this.props.history.push("/login");
  }
  handleStock=()=>{
    this.setState({comClick:false});
    this.setState({stockClick:!this.state.stockClick});
  }
  render() {
    if (this.state.userData) {
      return (
        <div className="top">
          <div className="text-center bg-primary pb-4">
            <img src={User} className="responsive" alt="User" />
            <br />
            <hr />
            <br />
            <h1 className="text-light user">
              Hello {this.state.userData.userName}
            </h1>
          </div>
          <div className="text-center btns pt-4 pb-4 bg-primary">
            <button className="mr-3" onClick={this.handleStock}>
            <i class="fas fa-plus-circle"></i> Stock
            </button>
            <button className="mr-3" onClick={this.getCompFunc}>
              Update
            </button>
            <button className="mr-3" onClick={this.handleOut}>
              Logout
            </button>
           
          </div>
          <div className="stocks">
            {this.state.stockClick && <Stocks user={this.state.userData}/>}
            {this.state.comClick && <Update company={this.state.company} />}
          </div>
        </div>
      );
    } else {
      return (
        <>
          <p className="text-center msg">
            404 <strong>Page Not Found</strong>
          </p>
        </>
      );
    }
  }
}
export default withRouter(CompanyHome);