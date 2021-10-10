import React, { useContext } from 'react';
import { faTimes, faUserCircle, faListUl, faFileUpload, faUserPlus, faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Route, Switch } from 'react-router-dom';
import SidebarRoute from '../SidebarRoute/SidebarRoute';
import './Sidebar.css'
import { UserContext } from '../../../App';
const Sidebar = ({ isOpen, setIsOpen }) => {
    const { isAdmin } = useContext(UserContext)
    return (
        <div>
            <div id="sidebar">
                <div className={`${isOpen ? "d-block" : "d-lg-block d-none"} p-0 sidebar-wrapper`}>
                    <div className="sidebar-header">
                        <div className="d-flex justify-content-between">
                            <div className="logo">
                                <Link to="/">Dream Canvas</Link>
                            </div>
                            <div className="toggle">
                                <a href="#" onClick={() => {
                                    setIsOpen(false)
                                    console.log("click")
                                }}
                                    id="sidebarCollapse"
                                    className={isOpen ? "d-block d-lg-none" : "d-none"}>
                                    <FontAwesomeIcon className="icon" icon={faTimes} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-menu">
                        <ul className=" list-unstyled components">
                            <li className="sidebar-item active">
                                <Link className="link-active" to="/dashboard/profile"><FontAwesomeIcon icon={faUserCircle} className="icon" /> <span>Profile</span></Link>
                            </li>
                            { isAdmin ?
                                    <>
                                        <li className="active">
                                            <Link className="link-active" to="/dashboard/orderList"><FontAwesomeIcon icon={faListUl} className="icon" /> <span>Order List</span></Link>
                                        </li>
                                        <li className="active">
                                            <Link className="link-active" to="/dashboard/addService"><FontAwesomeIcon icon={faFileUpload} className="icon" /> <span>Add Service</span></Link>
                                        </li>
                                        <li className="active">
                                            <Link className="link-active" to="/dashboard/makeAdmin"><FontAwesomeIcon icon={faUserPlus} className="icon" /> <span>Make Admin</span></Link>
                                        </li>
                                        <li className="active">
                                            <Link className="link-active" to="/dashboard/serviceList"><FontAwesomeIcon icon={faCog} className="icon" /> <span>Manage Services</span></Link>
                                        </li>
                                    </>
                                     :
                                    <>
                                        <li className="active">
                                            <Link className="link-active" to="/dashboard/book"><FontAwesomeIcon icon={faListUl} className="icon" /> <span>Book</span>
                                            </Link>
                                        </li>
                                        <li className="active">
                                            <Link className="link-active" to="/dashboard/bookList"><FontAwesomeIcon icon={faListUl} className="icon" /> <span>Book List</span>
                                            </Link>
                                        </li>
                                    </>
                            }
                        </ul>
                    </div>

                    <Switch>
                        {SidebarRoute.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.sidebar />}
                            />
                        ))}
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;