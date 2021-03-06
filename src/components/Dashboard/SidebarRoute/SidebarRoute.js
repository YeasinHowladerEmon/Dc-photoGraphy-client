import React from 'react';
import Services from '../../Home/Services/Services';
import AddService from '../AddService/AddService';
import Book from '../Book/Book';
import BookList from '../BookList/BookList';
import '../Dashboard/Dashboard.css'
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageServiceList from '../ManageServiceList/ManageServiceList';
import OrderList from '../OrderList/OrderList';
import Profile from '../Profile/Profile';
const SidebarRoute = [
    {
        path: "/dashboard/profile",
        exact: true,
        sidebar: () => <></>,
        main: () => {
            return (
                <>
                    <div className="page-heading">
                        <h2>Profile</h2>
                    </div>
                    <div id="page-content">
                        <Profile />
                    </div>
                </>
            )
        }

    },
    {
        path: "/dashboard/book",
        exact: true,
        sidebar: () => <></>,
        main: () => {
            return (
                <>
                    <div className="page-heading">
                        <h2>Book</h2>
                    </div>
                    <div id="page-content">
                        <div>
                            <h2 className="text-center">Service List</h2>
                            <h4 className="text-center">Lets go Service Booking</h4>
                        </div>
                        <div>
                            <Book />
                            </div>

                    </div>
                </>
            )
        }

    },
    {
        path: "/dashboard/bookList",
        exact: true,
        sidebar: () => <></>,
        main: () => {
            return (
                <>
                    <div className="page-heading">
                        <h2>Book List</h2>
                    </div>
                    <div id="page-content">
                        <OrderList />
                    </div>
                </>
            )
        }

    },
    {
        path: "/dashboard/orderList",
        sidebar: () => <></>,
        main: () => {
            return (
                <>
                    <div className="page-heading">
                        <h2>Order List</h2>
                    </div>
                    <div id="page-content">
                        <OrderList />
                    </div>
                </>
            )
        }
    },
    {
        path: "/dashboard/addService",
        sidebar: () => <></>,
        main: () => {
            return (
                <>
                    <div className="page-heading">
                        <h3>Add Service</h3>
                    </div>
                    <div id="page-content">
                        <AddService />
                    </div>

                </>
            )
        }
    },
    {
        path: "/dashboard/makeAdmin",
        sidebar: () => <></>,
        main: () => {
            return (
                <>
                    <div className="page-heading">
                        <h2>Make Admin</h2>
                    </div>
                    <div id="page-content">
                        <MakeAdmin />
                    </div>
                </>
            )
        }
    },
    {
        path: "/dashboard/serviceList",
        sidebar: () => <></>,
        main: () => {
            return (
                <>
                    <div className="page-heading">
                        <h2>Manage Service List</h2>
                    </div>
                    <div id="page-content">
                        <ManageServiceList />
                    </div>
                </>
            )
        }
    }
];
export default SidebarRoute;