import React, { useEffect, useState } from 'react';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'
import { faAngleUp, faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
// import Button from '@restart/ui/esm/Button';
const Footer = () => {
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        })
    }, [])
    return (
        <footer className="footer-area">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={3} sm={6}>
                        <div className="single-footer-widget">
                            <div className="logo">
                                <Link>Dream Canvas</Link>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <ul className="social-links">
                                <li>
                                    <a href="http://" target="_blank" ><FontAwesomeIcon icon={faFacebook} className="icon" /></a>
                                </li>
                                <li>
                                    <a href="http://" target="_blank" ><FontAwesomeIcon icon={faLinkedin} className="icon" /></a>
                                </li>
                                <li>
                                    <a href="http://" target="_blank" ><FontAwesomeIcon icon={faTwitter} className="icon" /></a>
                                </li>
                                <li>
                                    <a href="http://" target="_blank" ><FontAwesomeIcon icon={faInstagram} className="icon" /></a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="single-footer-widget me-4 pe-5">
                            <h3>Explore</h3>
                            <ul className="list">
                                <li><a href="">Home</a></li>
                                <li><a href="">About</a></li>
                                <li><a href="">Services</a></li>
                                <li><a href="">Photos</a></li>
                                <li><a href="">Team</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="single-footer-widget me-4"><h3>Quick Links</h3>
                            <ul className="list">
                                <li><a href="">Contact Us</a></li>
                                <li><a href="">Pricing</a></li>
                                <li><a href="">Faq</a></li>
                                <li><a href="">Privacy Policy</a></li>
                                <li><a href="">Terms & Condition</a></li>
                            </ul></div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="single-footer-widget">
                            <h3>Get in Touch</h3>
                            <ul className="get-in-touch">
                                <li>
                                    <FontAwesomeIcon icon={faHome} className="icon" /> Manda Mugdha, dhaka 1214
                                </li>
                                <li>
                                    <FontAwesomeIcon className="icon" icon={faPhone} />
                                    <a style={{position: "relative" , top: "-7px"}} href="tel:+8801903245299">+8801903245299</a>
                                </li>
                                <li>
                                    <FontAwesomeIcon className="icon" icon={faEnvelope} />
                                    <a style={{position: "relative" , top: "-7px"}} href="mailto:emonibnsalim@gmail.com">emonibnsalim@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="copy-right-area">
                <Container>
                    <p>Copyright © {(new Date().getFullYear())} Dream Canvas. All Rights Reserved By{" "}
                        <a href="http://" target="_blank">Emon Ibn Salim</a>
                    </p>
                </Container>
            </div>
            <div className="scroll-to-top">
                <FontAwesomeIcon className={scrolled ? "d-block icon" : "d-none"} onClick={() => window.scrollTo(500, 0)} icon={faAngleUp} />
            </div>
        </footer >
    );
};

export default Footer;