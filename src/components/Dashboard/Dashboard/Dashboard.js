import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import SidebarRoute from '../SidebarRoute/SidebarRoute';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css'
import '../Sidebar/Sidebar.css'
import { useParams } from 'react-router-dom';

const Dashboard = () => {
    // const [open, setOpen] = useState(false)
    // const toggleButton = () => {
    //     console.log('true',true);
    //     setOpen(true)
    // }
    const [isOpen, setIsOpen] = useState(false);
    // const [isOpenClose, setisOpenClose] = useState(true);

    // const handleClose = () => setisOpen(false);
    // const handleisOpen = () => { 
    //     console.log("hello");
    //     setisOpen(true)
    //  };"d-block d-xl-none d-lg-none"
    return (
        <section>
            <Container fluid>
                <Row >
                    {/* <button
                        onClick={() => setisOpen((previous)=>!previous)} 
                        type="button" id="sidebarCollapse"
                        className="d-block d-lg-none"
                    >
                        <span>{isOpen? "true":"false"}</span>
                    </button> */}

                    <Router>
                        <Col lg={2} md={12} sm={12}>
                            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
                        </Col>
                        <Col lg={10} md={12} sm={12}>
                            <Switch>
                                <div id="main">
                                    <header className="mb-3">
                                        <a href="#" onClick={() =>
                                            setIsOpen(true)
                                        }
                                            id="sidebarCollapse"
                                            className={isOpen ? "d-none" : "d-lg-none d-block"}>
                                            <FontAwesomeIcon className="icon" icon={faBars} />
                                        </a>
                                    </header>
                                    {SidebarRoute.map((route, index) => (
                                        <Route
                                            key={index}
                                            path={route.path}
                                            exact={route.exact}
                                            children={<route.main />}
                                        />
                                    ))}
                                </div>
                            </Switch>
                        </Col>
                    </Router>
                </Row>
            </Container>
        </section>
    );
};

export default Dashboard;