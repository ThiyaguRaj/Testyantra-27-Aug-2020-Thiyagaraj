import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import Pop from './Pop'

class CompanyDet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            compData: []
        }
    }

    componentDidMount() {
        axios({
            method: "get",
            url: "http://localhost:8080/stockmanagement/companies",
        }).then((response) => {
            console.log(response);
            this.setState({ compData: response.data.data });
            console.log(this.state.compData);
        });
    }
    render() {
        return (
            <>
                <Table striped bordered hover variant="light" className="m-0 ">
                    <thead>
                        <tr className="bg-dark text-light">
                            <th>Company Name</th>
                            <th>Email</th>
                            <th>Stocks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.compData.map((detail) =>(
                                    <tr key={detail.companyId}>
                                        <td>{detail.companyName}</td>
                                        <td>{detail.user.email}</td>
                                        <td className="text-center"><Pop
                                            user={this.props.user}
                                            idata={this.props.idata}
                                            cname={detail}
                                            key={detail.companyId}
                                        /></td>
                                    </tr>
                                )
                            )
                        }

                    </tbody>
                </Table>
            </>
        );
    }
}

export default CompanyDet;