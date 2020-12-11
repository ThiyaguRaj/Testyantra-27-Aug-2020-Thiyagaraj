import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap';

export default function UserDetails(props) {


    useEffect(()=>{
        Axios({
            method:'get',
            url:''
        })
    },[])

    return (
        <>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    
                </tbody>
            </Table>
        </>
    )
}