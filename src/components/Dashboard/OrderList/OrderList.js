import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../../App';

const OrderList = () => {
    // const {isAdmin} = useContext(UserContext)
    const { loggedInUser: { email }, isAdmin } = useContext(UserContext)
    const [orderData, setOrderData] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/orders?email=${email}`)
            .then(res => setOrderData(res.data))
            .catch(error => console.log(error.message))
    }, [email])
    return (
        <div className="bg-white px-5 pt-5 mx-md-4 mt-5" style={{ borderRadius: "15px" }}>
            <Table hover borderless responsive>
                <thead className="bg-light">
                    <tr>
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Service</th>
                        <th>Bill</th>
                        <th>Cell Number</th>
                        <th>Address</th>
                        <th>Status</th>
                    </tr>
                </thead>
                {
                    orderData.map(orderData => {
                        return (
                            <tbody key={orderData._id} style={{ fontWeight: "500" }}>
                                <tr>
                                    <td>{orderData.data.name}</td>
                                    <td>{orderData.data.email}</td>
                                    <td>{orderData.dataStore.name}</td>
                                    <td>${" "}{orderData.dataStore.amount}</td>
                                    <td>{orderData.data.MobileNumber}</td>
                                    <td>{orderData.data.address}</td>
                                    <td>
                                            <select>
                                                <option className="bg-white text-muted">Pending</option>
                                                <option className="bg-white text-muted">On going</option>
                                                <option className="bg-white text-muted">Done</option>
                                            </select>
                                        </td>
                                    
                                </tr>
                            </tbody>
                        )
                    })
                }
            </Table>
        </div>
    );
};

export default OrderList;