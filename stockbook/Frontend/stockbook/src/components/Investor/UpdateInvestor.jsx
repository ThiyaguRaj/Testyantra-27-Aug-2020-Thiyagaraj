import axios from "axios";
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "../SignUp/SignUp.css";
import { withRouter } from "react-router-dom";

class UpdateInvestor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitHandler = (event) => {
    event.preventDefault();
    const phone = document.getElementById('cph');
    const pwd = document.getElementById('pwd');
    const cpwd = document.getElementById('cpwd');
    if (phone.value.length === 10 && (pwd.value.trim()) === (cpwd.value).trim()) {
      let object = {};
      let formData = new FormData(event.target);
      formData.forEach((value, key) => {
        object[key] = value;
      });
      object.userId = this.props.user.userId;
      let json = JSON.stringify(object);
      console.log(json);
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      axios
        .put("http://localhost:8080/stockmanagement/users", json, config)
        .then((response) => {
          if (response.data.error) {
            let wrap = document.getElementById("wrap");
            wrap.innerHTML = "Update Failed";
            wrap.style.textAlign = "center";
          } else {
            let wrap = document.getElementById("wrap");
            wrap.innerHTML = "Update Successful";
            wrap.style.textAlign = "center";
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }else{
      if ((pwd.value.trim()) != (cpwd.value).trim()) {
        cpwd.focus();
        cpwd.style.outline = "3px solid red"
        phone.style.outline = "none"
      }else{
        phone.focus();
        phone.style.outline = "3px solid red"
        cpwd.style.outline = "none"
      }
    }
  };
  render() {
    return (
      <div className="col-sm-6 offset-sm-3 mt-5 mb-5" id="wrap">
        <form
          action="/login"
          className="regdiv p-5"
          onSubmit={this.submitHandler}
        >
          <h2 className=" text-center text-muted pb-5">Update</h2>

          <div className="row mt-5">
            <div className="form-group col-md-6">
              <label>Name</label>
              <input
                type="text"
                required
                value={this.props.user.userName}
                name="userName"
                className="line form-control"
                placeholder="Enter Your FullName"
              />
            </div>

            <div className="form-group col-md-6">
              <label>Phone</label>
              <input
                type="number"
                required
                name="phone"
                id="cph"
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
              value={this.props.user.email}
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
              id="pwd"
              className="form-control"
              placeholder="Enter Your password"
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              required
              name="repassword"
              id="cpwd"
              className="form-control"
              placeholder="Confirm Your password"
            />
          </div>

          <div className="form-group">
            <input
              type="radio"
              readOnly="true"
              className="rad form-control"
              value="Investor"
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
          <div>
            <Button variant="primary" className="mt-5" type="submit">
              Update
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(UpdateInvestor);
