import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { withRouter } from "react-router-dom";
import "./Login.css";
import Mail from "./Images/mail.svg";
import Pass from "./Images/pass.svg";
import axios from "axios";
import User from "./Images/user.png";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: true,
      mail: "",
      pass: "",
      udata: {},
    };
  }

  componentDidMount(){
    this.props.loginCheck();
  }
  setEmail = (event) => {
    this.setState({ mail: event.target.value });
  };
  setPass = (event) => {
    this.setState({ pass: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    var body = {
      email: this.state.mail,
      password: this.state.pass,
    };

    let json = JSON.stringify(body);

    axios({
      method: "post",
      url: "http://localhost:8080/stockmanagement/users/login",
      data: json,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        this.setState({ udata: response.data.data });
        console.log(response);
        if (!response.data.error) {
          localStorage.setItem(
            response.data.data.role,
            JSON.stringify(response.data.data)
          );
        }
        if (
          this.state.udata.role === "Manager" &&
          this.state.udata.status === "Active"
        ) {
          this.props.history.push({
            pathname: "/company",
            userData: response.data.data,
          });
        } else if (
          this.state.udata.role === "Admin" &&
          this.state.udata.status === "Active"
        ) {
          this.props.history.push({
            pathname: "/admin",
            userData: response.data.data,
          });
        } else if (
          this.state.udata.role === "Investor" &&
          this.state.udata.status === "Active"
        ) {
          this.props.history.push({
            pathname: "/Investor",
            userData: response.data.data,
          });
        } else {
          document.getElementById("err").style.display = "block";
          document.getElementById('exampleInputEmail1').style.outline="2px solid red";
          document.getElementById('exampleInputPassword1').style.outline="2px solid red";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="first">
        <div className="logalert mt-5" id="err">
          <span className="closebtn">
            <button
              onClick={() => {
                document.getElementById("err").style.display = "none";
              }}
            >
              &times;
            </button>
          </span>
          Wrong Email or Password
        </div>
        <div className="formdiv col-md-3 mr-auto card card-body ml-auto  mt-5 mb-5">
          <div>
            <img className="user" src={User} alt="LOGIN" />
            <h2 className="text-center text-muted">Login</h2>
          </div>

          <form name="myform" className="logform" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                required
                onChange={this.setEmail}
                className="form-control"
                name="email"
                placeholder="Email"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group mb-5">
              <input
                type="password"
                required
                onChange={this.setPass}
                className="form-control"
                name="password"
                placeholder="Password"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btn btn-success">
              Submit
            </button>
            <br />
          </form>
        </div>
        <p className="text-center mt-5 mb-5">
          Or,{" "}
          <a onClick={() => this.props.history.push("/signup")} href="#">
            Signup
          </a>{" "}
          now to Start Invest
        </p>
      </div>
    );
  }
}
export default withRouter(Login);
