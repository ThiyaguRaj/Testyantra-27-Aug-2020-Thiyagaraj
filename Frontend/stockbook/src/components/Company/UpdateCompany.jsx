import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import "./company.css";
import { useEffect } from "react";

function UpdateCompany(props) {

  useEffect(() => {
    console.log(props.company);
  })

  function submitHandler(event) {
    event.preventDefault();
    const phone = document.getElementById('cph');
    const pwd = document.getElementById('pwd');
    const cpwd = document.getElementById('cpwd');
    if (phone.value.length === 10 && (pwd.value.trim()) === (cpwd.value).trim()) {
      let object = {
        companyId: props.company.companyId,
        companyName: document.getElementById('cname').value,
        companyPhone: document.getElementById('cph').value,
        companyAddress: document.getElementById('cadd').value,
        status: "Active",
        user:
        {
          userId: props.company.user.userId,
          userName: document.getElementById('uname').value,
          phone: document.getElementById('cph').value,
          password: document.getElementById('pwd').value,
          email: document.getElementById('mail').value,
          address: document.getElementById('cadd').value,
          role: document.getElementById('role').value,
          status: "Active"
        }

      };
      let json = JSON.stringify(object);
      console.log(json);
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      axios
        .put("http://localhost:8080/stockmanagement/companies", json, config)
        .then((response) => {
          if (response.data.error) {
            let ele = document.getElementById('co');
            ele.innerHTML = "Updation Failed";
            ele.style.textAlign = "center";
            ele.style.marginBottom = "30px"
          } else {
            let ele = document.getElementById('co');
            ele.innerHTML = "Updation Successfull";
            ele.style.textAlign = "center";
            ele.style.marginBottom = "30px"
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }else{
      if ((pwd.value.trim()) !== (cpwd.value).trim()) {
        cpwd.focus();
        cpwd.style.outline = "3px solid red"
        cpwd.placeholder = "password's didn't match";
      }else{
        phone.focus();
        phone.style.outline = "3px solid red"
      }
    }

  }
  return (
    <div className="col-md-6 offset-md-3 card card-body mt-5 coform mb-5" id="co">
      <form name="myForm" onSubmit={submitHandler}>
        <h3 className="mb-5 text-muted text-center mt-5">Update Company</h3>

        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            id="cname"
            className="form-control"
            name="companyName"
            value={props.company.companyName}
            placeholder="Enter Company Name"
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="number"
            id="cph"
            name="companyPhone"
            className="form-control"
            placeholder="Enter Contact Number"
          />
        </div>

        <div className="form-group">
          <label>Company Address</label>
          <textarea
            type="textarea"
            id="cadd"
            name="companyAddress"
            className="form-control"
            placeholder="Enter Company Address"
          />
        </div>

        <div className="form-group">
          <label>Username </label>
          <input
            type="text"
            name="uname"
            id="uname"
            className="form-control"
            placeholder="Enter Manager Name"
          />
        </div>

        <div className="form-group">
          <label>Email </label>
          <input
            type="email"
            name="email"
            id="mail"
            value={props.company.user.email}
            className="form-control"
            placeholder="Enter Manager Email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="pwd"
            placeholder="Enter Manager password"
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            name="Cpassword"
            id="cpwd"
            placeholder="Confirm password"
          />
        </div>

        <div className="form-group">
          <input
            type="radio"
            className="rad form-control"
            value="Manager"
            id="role"
            checked
            name="role"
          />
        </div>

        <div className="form-group">
          <input
            type="radio"
            className="rad form-control"
            value="Manager"
            checked
            name="role"
          />
        </div>

        <div>
          <button className="btn btn-primary mt-4 subtn" type="submit">Update</button>
        </div>
      </form>
    </div>
  );
}
export default UpdateCompany;