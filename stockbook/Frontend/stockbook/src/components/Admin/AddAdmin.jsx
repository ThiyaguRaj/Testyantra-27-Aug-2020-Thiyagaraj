import axios from "axios";
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./addAdmin.css";
import { withRouter } from "react-router-dom";

class AddAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push({
      pathname: "/admin",
      userData: this.props.userData,
    });
    let object = {};
    let formData = new FormData(event.target);
    formData.forEach((value, key) => {
      object[key] = value;
    });
    let json = JSON.stringify(object);
    console.log(json);
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    axios
      .post("http://localhost:8080/stockmanagement/users", json, config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    document.myform.reset();
    document.getElementById("adform").style.display = "none";
    document.getElementById("err").style.display = "block";
  };
  render() {
    return (
      <>
        <div className="adalert mt-0 mb-0" id="err">
          <span className="closebtn">
            <button
              onClick={() => {
                document.getElementById("err").style.display = "none";
              }}
            >
              &times;
            </button>
          </span>
          Admin Added Successfully
        </div>
        <div id="adform" className="col-sm-6 offset-sm-3  mt-5 mb-5">
          <form
            action="/login"
            className="regdiv p-5"
            name="myform"
            onSubmit={this.handleSubmit}
          >
            <h2 className=" text-center text-muted pb-5">Add Admin</h2>

            <div className="row mt-5">
              <div className="form-group col-md-6">
                <label>Name</label>
                <input
                  type="text"
                  required
                  name="userName"
                  className="line form-control"
                  placeholder="FullName"
                />
              </div>

              <div className="form-group col-md-6">
                <label>Phone</label>
                <input
                  type="number"
                  required
                  name="phone"
                  className="line form-control"
                  placeholder="Enter Your Phone Number"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Address</label>
              <textarea
                type="textarea"
                required
                name="address"
                className="form-control"
                placeholder="Enter Your address"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                required
                name="email"
                className="form-control"
                placeholder="Enter Your email"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                required
                name="password"
                className="form-control"
                placeholder="Enter Your password"
              />
            </div>

            <div className="form-group">
              <input
                type="radio"
                readOnly="true"
                className="rad form-control"
                value="Admin"
                checked
                name="role"
              />
            </div>

            <div className="form-group">
              <input
                type="radio"
                readOnly="true"
                className="rad form-control"
                value="Active"
                checked
                name="status"
              />
            </div>
            <div className="form-group mt-5">
              <Button variant="primary" type="submit">
                Add
              </Button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default withRouter(AddAdmin);
