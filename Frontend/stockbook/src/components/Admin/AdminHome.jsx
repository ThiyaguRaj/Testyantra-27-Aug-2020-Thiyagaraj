import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Admin.css";
import User from "../Investor/Images/user.png";
import { withRouter } from "react-router-dom";
import Add from "./AddAdmin";
import axios from "axios";
import Company from "../Company/AddCompany";
import Update from './UpdateAdmin';
import Block from './BlockUser';
import CompBlock from './BlockCompany';
import { Table } from 'react-bootstrap';

function AdminHome(props) {
  const [adminClick, setAdminClick] = useState(false);
  const [comp, setComp] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [compClick, setCompClick] = useState(false);
  // const [updateCom, setUpdateCom] = useState({});
  const [updateClick, setUpdateClick] = useState(false);
  const [userData, setUserData] = useState({});
  const [blockClick, setBlockClock] = useState(false);
  const [compBlock, setCompBlock] = useState(false)

  useEffect(() => {
    props.loginCheck();
    setUserData(JSON.parse(localStorage.getItem("Admin")));
  },[])
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/stockmanagement/companies",
    }).then((response) => {
      console.log(response);
      setCompanies(response.data.data);
      console.log(companies);
    });
  },[]);
  function handleAd() {
    setComp(false);
    setCompClick(false);
    setUpdateClick(false);
    setBlockClock(false);
    setCompBlock(false);
    setAdminClick(!adminClick);
  }
  function companyFunc() {
    setComp(false);
    setAdminClick(false);
    setUpdateClick(false);
    setBlockClock(false);
    setCompBlock(false);
    setCompClick(!compClick);
  }
  function handleOut() {
    localStorage.removeItem(userData.role);
    props.history.push("/login");
  }
  function handleCompany() {
    setAdminClick(false);
    setCompClick(false);
    setUpdateClick(false);
    setBlockClock(false);
    setCompBlock(false);
    setComp(!comp);
  }
  // function compUpdate(event) {
  //   setUpdateCom(event.target.value);
  //   console.log(updateCom);
  // }
  function updateAd() {
    setAdminClick(false);
    setCompClick(false);
    setComp(false);
    setBlockClock(false);
    setCompBlock(false);
    setUpdateClick(!updateClick);
  }
  function blockFunc() {
    setAdminClick(false);
    setCompClick(false);
    setComp(false);
    setUpdateClick(false);
    setCompBlock(false);
    setBlockClock(!blockClick)
  }
  function blockCompFunc() {
    setAdminClick(false);
    setCompClick(false);
    setComp(false);
    setUpdateClick(false);
    setBlockClock(false);
    setCompBlock(!compBlock);
  }
  if (userData) {
    return (
      <>
        <div className="top">
          <div className="text-center bg-primary pb-4">
            <img src={User} className="responsive" alt="User" />
            <br />
            <hr />
            <br />
            <h1 className="text-light user">
              Hello {userData.userName}
            </h1>
          </div>
          <div className="text-center btns pt-4 pb-4 bg-primary">
            <button className="mr-3" onClick={handleAd}>
              <i class="fas fa-plus-circle"></i> Admin
            </button>
            <button className="mr-3" onClick={handleCompany}>
              <i class="fas fa-plus-circle"></i> Company
            </button>
            <button className="mr-3" onClick={companyFunc}>
              Companies
            </button>
            <button className="mr-3" onClick={updateAd}>
              Update
            </button>
            <button className="mr-3" onClick={blockFunc}>
              Block User
            </button>
            <button className="mr-3" onClick={blockCompFunc}>
              Block Company
            </button>
            <button className="mt-5" onClick={handleOut}>
            <i class="fas fa-sign-out-alt"></i> Logout
            </button>
          </div>
          <div className="admin">
            {adminClick && <Add userData={userData} />}
          </div>
          <div className="admin">
            {comp && <Company userData={userData} />}
          </div>
          <div>
            {updateClick && <Update userData={userData} />}
          </div>
          <div>
            {blockClick && <Block />}
          </div>
          <div>
            {compBlock && <CompBlock />}
          </div>
          {
            <div className="companies">

              {compClick && <Table striped bordered hover variant="light" className="col-md-8 offset-md-2 mt-5 mb-5">
                <thead>
                  <tr className="bg-dark text-light">
                    <th>CompanyId</th>
                    <th>Company Name</th>
                    <th>Email</th>
                    <th>Stocks</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    companies.map((detail) => {
                      return (
                        <tr>
                          <td>{detail.companyId}</td>
                          <td>{detail.companyName}</td>
                          <td>{detail.user.email}</td>
                          <td className="text-success">{detail.status}</td>
                        </tr>
                      )
                    })
                  }

                </tbody>
              </Table>}
            </div>
          }
        </div>
      </>
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
export default withRouter(AdminHome);