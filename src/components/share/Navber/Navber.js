import React, { useContext, useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import ProfilePopbar from '../../Home/ProfilePopbar/ProfilePopbar';
import './Navber.css'
// import logo from '../../../image/logo-photography-25085.png'
const Navber = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext)
    const [isCollapsed, setCollapsed] = useState(null);
    const [isSticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            }
            else {
                setSticky(false)
            }
        })
    }, [])
    // "py-2 text-white" : "shadow-sm bg  py-4 text-black"
    // const shortcut = () =>{
    //     return (isSticky || isCollapsed) ? "text-black" : "text-white"
    // } 

    return (
        <Container fluid="md">
            <Navbar
                collapseOnSelect
                expand="lg"
                variant="light"
                fixed="top"
                className={(isSticky || isCollapsed) ? "shadow-sm bg-white fw-bold py-2" : "py-4 fw-bold"}
            >
                <Navbar.Brand
                    as={Link} to="/"
                    className={`ms-md-5 ${(isSticky || isCollapsed) ? "text-b " : "text-w"}`}>
                    {/* className={shortcut}> */}
                    <strong>Dream Canvas</strong>
                </Navbar.Brand>
                <Navbar.Toggle
                    onClick={() => setCollapsed(!isCollapsed)}
                    aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav"
                    className={isCollapsed}>
                    <Nav className=" ms-auto">
                        <Nav.Link as={Link} to='/' className={(isSticky || isCollapsed) ? "text-b ms-md-5" : "text-w ms-md-5"} onClick={() => window.scrollTo(500, 0)} >Home</Nav.Link>
                        <Nav.Link href="#services"
                            className={(isSticky || isCollapsed) ? "text-b ms-md-5" : "text-w ms-md-5"}
                        >Services</Nav.Link>
                        <Nav.Link href="#reviews"
                            className={(isSticky || isCollapsed) ? "text-b ms-md-5" : "text-w ms-md-5"}
                        >Reviews</Nav.Link>
                        <Nav.Link href="#contact"
                            className={(isSticky || isCollapsed) ? "text-b ms-md-5" : "text-w ms-md-5"}
                        >Contact us</Nav.Link>
                        <Nav.Link as={Link} to="/dashboard/profile"
                            className={(isSticky || isCollapsed) ? "text-b ms-md-5" : "text-w ms-md-5"}
                        >Dashboard</Nav.Link>
                        {
                            loggedInUser.isSignedIn ?
                                <div
                                    className={`${(isSticky || isCollapsed) ? "ms-md-5 me-md-5 mt-3" : "ms-md-5 me-md-5 mt-3"}`}> <ProfilePopbar />
                                </div>
                                : <Nav.Link as={Link} to="/login"
                                    className={`${(isSticky || isCollapsed) ? "text-b ms-md-5 me-md-5" : "text-w ms-md-5 me-md-5"} btn btn-primary primary-radius`}
                                >Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Navber;