// import React, { Component } from 'react';
// import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";
// import axios from "axios";
// import "./pop.css";

// class Pop extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: 0,
//       amount: 0,
//       stock: {}
//     }
//   }
//   componentDidMount() {
//     axios({
//       method: "post",
//       url: " http://localhost:8080/stockmanagement/companies/stocks",
//       data: JSON.stringify(this.props.cname),
//       headers: { "Content-Type": "application/json" },
//     })
//       .then((resp) => {
//         typeof (resp.data.data) === 'object' && this.setState({ stock: resp.data.data });
//         console.log(this.state.stock);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   manageBuy = (event) => {
//     event.preventDefault();
//     let numb = document.getElementById('stock')
//     if (numb.value <= this.state.stock.availabeStock) {
//       let info = {
//         buyAmount: this.state.amount,
//         investorId: this.props.idata.investorId,
//         sellAmount: 0,
//         user: this.props.user,
//       };

//       axios({
//         method: "put",
//         url: "http://localhost:8080/stockmanagement/investor",
//         data: JSON.stringify(info),
//         headers: { "Content-Type": "application/json" },
//       }).then((resp) => { });
//       document.getElementById('frm').innerHTML = "Happy Buy";
//       let d = new Date();
//       let move = {
//         movementDate: d,
//         stock: this.state.stock,
//         investor: this.props.idata,
//       }
//       console.log(move);
//       axios({
//         method: "post",
//         url: " http://localhost:8080/stockmanagement/investor",
//         data: JSON.stringify(move),
//         headers: { "Content-Type": "application/json" },
//       })
//         .then((resp) => {
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//       document.myForm.reset();
//     } else {
//       document.getElementById('stock').style.outline = "3px solid red";
//       document.getElementById('stock').value = ''
//     }
//   }


//   render() {
//     return (
//       <>
//         <Popup
//           trigger={<button className="btn btn-success"> Buy</button>}
//           position="left"
//         >
//           <>
//             <form className="popcard card card-body bg-dark text-light" name="myForm" id="frm" onSubmit={this.manageBuy}>
//               <div className="row mb-3">
//                 <div className="col-md-7 text-right">
//                   Available
//                 </div>
//                 <div className="col-md-5 text-center border">
//                   {this.state.stock.availabeStock}
//                 </div>
//               </div>
//               <div className="row mb-5">
//                 <div className="col-md-7 text-right">
//                   SAmount
//                 </div>
//                 <div className="col-md-5 text-center border">
//                   {this.state.stock.stockAmount}
//                 </div>
//               </div>
//               <input
//                 type="number"
//                 id="stock"
//                 required
//                 className="popdata"
//                 placeholder="Number of stocks"
//                 onChange={(event) => {
//                   this.setState({ value: event.target.value });
//                   this.setState({ amount: event.target.value * this.state.stock.stockAmount });
//                 }}
//               />
//               <input
//                 type="number"
//                 id="amt"
//                 required
//                 className="popdata mt-3 mb-3"
//                 value={this.state.amount}
//                 placeholder="Amount"
//               />
//               <button className="btn btn-success mt-3">
//                 Buy
//           </button>
//             </form>
//           </>
//         </Popup>
//       </>
//     );
//   }
// }

// export default Pop;


import React, { Component } from 'react';
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import axios from "axios";
import "./pop.css";

class Pop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      amount: 0,
      stock: {},
      avail:{}
    }
  }
  componentDidMount() {
    axios({
      method: "post",
      url: " http://localhost:8080/stockmanagement/companies/stocks",
      data: JSON.stringify(this.props.cname),
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => {
        typeof (resp.data.data) === 'object' && this.setState({ stock: resp.data.data });
        console.log(this.state.stock);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  manageBuy = (event) => {
    event.preventDefault();
    let numb = document.getElementById('stock')
    if (numb.value <= this.state.stock.availabeStock) {
      let info = {
        buyAmount: this.state.amount+this.props.idata.buyAmount,
        investorId: this.props.idata.investorId,
        sellAmount: 0,
        user: this.props.user,
      };

      axios({
        method: "put",
        url: "http://localhost:8080/stockmanagement/investor",
        data: JSON.stringify(info),
        headers: { "Content-Type": "application/json" },
      }).then((resp) => { });
      
      let d = new Date();
      let move = {
        movementDate: d,
        stock: this.state.stock,
        investor: this.props.idata,
      }
      axios({
        method: "post",
        url: " http://localhost:8080/stockmanagement/investor",
        data: JSON.stringify(move),
        headers: { "Content-Type": "application/json" },
      })
        .then((resp) => {
        })
        .catch((err) => {
          console.log(err);
        });

      let upStock = {
        stockId: this.state.stock.stockId,
        stockAmount: this.state.stock.stockAmount,
        availabeStock: (this.state.stock.availabeStock - document.getElementById('stock').value),
        maxStock: this.state.stock.maxStock,
        company: this.state.stock.company
      }
      axios({
        method: "put",
        url: "http://localhost:8080/stockmanagement/companies/stock",
        data: JSON.stringify(upStock),
        headers: { "Content-Type": "application/json" }
      }).catch(err=>console.log(err))
      document.getElementById('frm').innerHTML = "Happy Buy";
      document.myForm.submit();
      
    } else {
      document.getElementById('stock').style.outline = "3px solid red";
      document.getElementById('stock').focus();
      document.getElementById('stock').value = ''
    }
  }


  render() {
    return (
      <>
        <Popup
          trigger={<button className="btn btn-success"> Buy</button>}
          position="left"
        >
          <>
            <form className="popcard card card-body bg-dark text-light" name="myForm" id="frm" onSubmit={this.manageBuy}>
              <div className="row mb-3">
                <div className="col-md-7 text-right">
                  Available
                </div>
                <div className="col-md-5 text-center border">
                  {this.state.stock.availabeStock}
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-md-7 text-right">
                  SAmount
                </div>
                <div className="col-md-5 text-center border">
                  {this.state.stock.stockAmount}
                </div>
              </div>
              <input
                type="number"
                id="stock"
                required
                className="popdata"
                placeholder="Number of stocks"
                onChange={(event) => {
                  this.setState({ value: event.target.value });
                  this.setState({ amount: event.target.value * this.state.stock.stockAmount });
                }}
              />
              <input
                type="number"
                id="amt"
                required
                className="popdata mt-3 mb-3"
                value={this.state.amount}
                placeholder="Amount"
              />
              <button className="btn btn-success mt-3">
                Buy
          </button>
            </form>
          </>
        </Popup>
      </>
    );
  }
}

export default Pop;
