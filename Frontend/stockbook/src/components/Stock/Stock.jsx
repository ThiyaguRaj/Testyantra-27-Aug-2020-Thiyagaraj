// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";
// import "./stock.css";
// import { useEffect } from "react";

// function Stock(props) {
//   const [company, setCompany] = useState({});
//   useEffect(() => {
//     axios({
//       method: "post",
//       url: " http://localhost:8080/stockmanagement/companies/company",
//       data: JSON.stringify(props.user),
//       headers: { "Content-Type": "application/json" },
//     })
//       .then((resp) => {
//         setCompany(resp.data.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   function submitHandle(event) {
//     event.preventDefault();

//     let stockData = {
//       stockAmount: document.getElementById("amount").value,
//       availabeStock: document.getElementById("availabeStock").value,
//       maxStock: 80,
//       company: {
//         companyId: company.companyId,
//         companyName: company.companyName,
//         companyPhone: company.companyPhone,
//         companyAddress: company.companyAddress,
//         user: {
//           userId: props.user.userId,
//           userName: props.user.userName,
//           phone: props.user.phone,
//           password: props.user.password,
//           email: props.user.email,
//           address: props.user.address,
//           role: props.user.role,
//         },
//       },
//     };

//     axios({
//       method: "post",
//       url: " http://localhost:8080/stockmanagement/companies/stock",
//       data: JSON.stringify(stockData),
//       headers: { "Content-Type": "application/json" },
//     }).then((resp) => {
//       console.log(resp);
//     });
//     let ele = document.getElementById("main");
//     ele.innerHTML = "Stock Added Successfully";
//     ele.style.textAlign = "center";
//   }

//   return (
//     <div id="main" className="col-md-4 offset-md-4 mt-5 mb-5 card card-body">
//       <form className="" name="myform" onSubmit={submitHandle}>
//         <h3 className="mt-5 mb-5 text-muted text-center">Add New Stock</h3>

//         <div className="form-group">
//           <label className="price text-muted">Stock Price</label>
//           <input
//             type="number"
//             name="stockAmount"
//             id="amount"
//             className="form-control"
//             placeholder="Enter Stock Amount"
//           />
//         </div>
//         <div className="form-group">
//           <label className="price text-muted">Number Of Stocks</label>
//           <input
//             type="number"
//             name="availabeStock"
//             id="availabeStock"
//             className="form-control"
//             placeholder="Enter Number of Stocks to Add"
//           />
//         </div>
//         <div>
//           <button className="btn btn-primary" type="submit">
//             Click to Add Stock
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
// export default Stock;


// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";
// import "./stock.css";
// import { useEffect } from "react";

// function Stock(props) {
//   const [company, setCompany] = useState({});
//   useEffect(() => {
//     axios({
//       method: "post",
//       url: " http://localhost:8080/stockmanagement/companies/company",
//       data: JSON.stringify(props.user),
//       headers: { "Content-Type": "application/json" },
//     })
//       .then((resp) => {
//         setCompany(resp.data.data, () => { console.log(company); });
//         console.log(company);
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//     axios({
//       method: "post",
//       url: " http://localhost:8080/stockmanagement/companies/stocks",
//       data: JSON.stringify(company),
//       headers: { "Content-Type": "application/json" },
//     })
//       .then((resp) => {
//         console.log("=============================");
//         console.log(resp);
//         localStorage.removeItem("company");
//         console.log("=============================");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   function submitHandle(event) {
//     event.preventDefault();

//     let stockData = {
//       stockAmount: document.getElementById("amount").value,
//       availabeStock: document.getElementById("availabeStock").value,
//       maxStock: 80,
//       company: {
//         companyId: company.companyId,
//         companyName: company.companyName,
//         companyPhone: company.companyPhone,
//         companyAddress: company.companyAddress,
//         user: {
//           userId: props.user.userId,
//           userName: props.user.userName,
//           phone: props.user.phone,
//           password: props.user.password,
//           email: props.user.email,
//           address: props.user.address,
//           role: props.user.role,
//         },
//       },
//     };

//     axios({
//       method: "post",
//       url: " http://localhost:8080/stockmanagement/companies/stock",
//       data: JSON.stringify(stockData),
//       headers: { "Content-Type": "application/json" },
//     }).then((resp) => {
//       console.log(resp);
//     });
//     let ele = document.getElementById("main");
//     ele.innerHTML = "Stock Added Successfully";
//     ele.style.textAlign = "center";
//   }

//   function updateHandle() {

//   }

//   return (
//     <div id="main" className="col-md-4 offset-md-4 mt-5 mb-5 card card-body">
//       <div className="add">
//         <form className="add" name="myform" onSubmit={submitHandle}>
//           <h3 className="mt-5 mb-5 text-muted text-center">Add New Stock</h3>

//           <div className="form-group">
//             <label className="price text-muted">Stock Price</label>
//             <input
//               type="number"
//               name="stockAmount"
//               id="amount"
//               className="form-control"
//               placeholder="Enter Stock Amount"
//             />
//           </div>
//           <div className="form-group">
//             <label className="price text-muted">Number Of Stocks</label>
//             <input
//               type="number"
//               name="availabeStock"
//               id="availabeStock"
//               className="form-control"
//               placeholder="Enter Number of Stocks to Add"
//             />
//           </div>
//           <div>
//             <button className="btn btn-primary" type="submit">
//               Click to Add Stock
//           </button>
//           </div>
//         </form>
//       </div>

//       <div className="update">
//         <form className="upd" name="myform" onSubmit={updateHandle}>
//           <h3 className="mt-5 mb-5 text-muted text-center">Update Stock</h3>

//           <div className="form-group">
//             <label className="price text-muted">Stock Price</label>
//             <input
//               type="number"
//               name="stockAmount"
//               id="amount"
//               className="form-control"
//               placeholder="Enter Stock Amount"
//             />
//           </div>
//           <div className="form-group">
//             <label className="price text-muted">Number Of Stocks</label>
//             <input
//               type="number"
//               name="availabeStock"
//               id="availabeStock"
//               className="form-control"
//               placeholder="Enter Number of Stocks to Add"
//             />
//           </div>
//           <div>
//             <button className="btn btn-primary" type="submit">
//               Update Stock
//           </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
// export default Stock;


import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./stock.css";

class Stock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: {},
      stock: {}
    }
  }
  componentDidMount() {
    axios({
      method: "post",
      url: " http://localhost:8080/stockmanagement/companies/company",
      data: JSON.stringify(this.props.user),
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => {
        this.setState({ company: resp.data.data });
        console.log(this.state.company);
        axios({
          method: "post",
          url: " http://localhost:8080/stockmanagement/companies/stocks",
          data: resp.data.data,
          headers: { "Content-Type": "application/json" },
        })
          .then((resp) => {
            if (!resp.data.error) {
              document.getElementById('add').style.display = "none";
              document.getElementById('upd').style.display = "block";
              this.setState({ stock: resp.data.data });
              console.log(this.state.stock);
            } else {
              document.getElementById('upd').style.display = "none";
            }
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  submitHandle = (event) => {
    event.preventDefault();
    let maxStox=document.getElementById("availabeStock");
    let stox=document.getElementById("avail");
    if (maxStox.value<=80 && stox.value<=80) {
      if (this.state.stock.stockId === undefined) {
        let sData = {
          stockAmount: document.getElementById("amount").value,
          availabeStock: document.getElementById("availabeStock").value,
          maxStock: 80,
          company: {
            companyId: this.state.company.companyId,
            companyName: this.state.company.companyName,
            companyPhone: this.state.company.companyPhone,
            companyAddress: this.state.company.companyAddress,
            user: {
              userId: this.props.user.userId,
              userName: this.props.user.userName,
              phone: this.props.user.phone,
              password: this.props.user.password,
              email: this.props.user.email,
              address: this.props.user.address,
              role: this.props.user.role,
            },
          },
        };

        axios({
          method: "post",
          url: " http://localhost:8080/stockmanagement/companies/stock",
          data: JSON.stringify(sData),
          headers: { "Content-Type": "application/json" },
        }).then((resp) => {
          console.log(resp);
        });
        let ele = document.getElementById("main");
        ele.innerHTML = "Stock Added Successfully";
        ele.style.textAlign = "center";
      } else {
        let stockData = {
          stockId: this.state.stock.stockId,
          stockAmount: document.getElementById("amt").value,
          availabeStock: document.getElementById("avail").value,
          maxStock: 80,
          company: {
            companyId: this.state.company.companyId,
            companyName: this.state.company.companyName,
            companyPhone: this.state.company.companyPhone,
            companyAddress: this.state.company.companyAddress,
            user: {
              userId: this.props.user.userId,
              userName: this.props.user.userName,
              phone: this.props.user.phone,
              password: this.props.user.password,
              email: this.props.user.email,
              address: this.props.user.address,
              role: this.props.user.role,
            },
          },
        };

        axios({
          method: "put",
          url: " http://localhost:8080/stockmanagement/companies/stock",
          data: JSON.stringify(stockData),
          headers: { "Content-Type": "application/json" },
        }).then((resp) => {
          console.log(resp);
        }).catch(err => console.log(err))
        let ele = document.getElementById("main");
        ele.innerHTML = "Stock Updated Successfully";
        ele.style.textAlign = "center";
      }
    }else{
      maxStox.style.outline="3px solid red";
      stox.style.outline="3px solid red";
    }
  }


  render() {
    return (
      <div id="main" className="col-md-4 offset-md-4 mt-5 mb-5 card card-body">
        <div className="add" id="add">
          <form className="add" name="myform" onSubmit={this.submitHandle}>
            <h3 className="mt-5 mb-5 text-muted text-center">Add New Stock</h3>

            <div className="form-group">
              <label className="price text-muted">Stock Price</label>
              <input
                type="number"
                name="stockAmount"
                id="amount"
                required
                className="form-control"
                placeholder="Enter Stock Amount"
              />
            </div>
            <div className="form-group">
              <label className="price text-muted">Number Of Stocks</label>
              <input
                type="number"
                name="availabeStock"
                id="availabeStock"
                required
                className="form-control"
                placeholder="Enter Number of Stocks to Add"
              />
            </div>
            <div>
              <button className="btn btn-primary" type="submit">
                Click to Add Stock
            </button>
            </div>
          </form>
        </div>

        <div className="update" id="upd">
          <form className="upd" name="myform" onSubmit={this.submitHandle}>
            <h3 className="mt-5 mb-5 text-muted text-center">Update Stock</h3>

            <div className="form-group">
              <label className="price text-muted">Stock Price</label>
              <input
                type="number"
                name="stockAmount"
                id="amt"
                required
                className="form-control"
                placeholder="Enter Stock Amount"
              />
            </div>
            <div className="form-group">
              <label className="price text-muted">Number Of Stocks</label>
              <input
                type="number"
                name="availabeStock"
                id="avail"
                required
                className="form-control"
                placeholder="Enter Number of Stocks to Add"
              />
            </div>
            <div>
              <button className="btn btn-primary" type="submit">
                Update Stock
            </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Stock;
