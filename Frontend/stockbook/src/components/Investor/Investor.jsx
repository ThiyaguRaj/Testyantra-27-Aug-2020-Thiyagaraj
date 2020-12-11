import React, { Component } from "react";
import User from "./Images/user.png";
import "./investor.css";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Update from './UpdateInvestor';
import Companies from './CompanyDet';

class Investor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      compClick: false,
      updateClick: false,
      investor: {},
      userData: {}
    };
  }
  componentDidMount() {
    this.props.loginCheck();
    this.setState({ userData: JSON.parse(localStorage.getItem("Investor")) })
  }
  updateFunc = () => {
    this.setState({ compClick: false });
    this.setState({ updateClick: !this.state.updateClick });
  }
  handleOut = () => {
    localStorage.removeItem(this.state.userData.role);
    this.props.history.push("/login");
  };
  handleComp = () => {
    this.setState({ updateClick: false });
    this.setState({ compClick: !this.state.compClick });
    axios({
      method: "post",
      url: "http://localhost:8080/stockmanagement/investor/invest",
      data: JSON.stringify(this.state.userData),
      headers: { "Content-Type": "application/json" },
    }).then((resp) => {
      this.setState({ investor: resp.data.data });
    });
  };
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
            <button className="mr-3" onClick={this.handleComp}>
              Companies
            </button>

            <button className="mr-3" onClick={this.updateFunc}>
              Update
            </button>
            <button className="mr-3" onClick={this.handleOut}>
              Logout
            </button>
          </div>
          <div>{this.state.updateClick && <Update user={this.state.userData} />}</div>
          <div className="companies col-md-8 offset-md-2">
            {this.state.compClick && <Companies user={this.state.userData} idata={this.state.investor} />}
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

export default withRouter(Investor);
