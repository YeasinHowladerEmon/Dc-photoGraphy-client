import React from 'react';
import { faListAlt, faHeart, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';
import './FunFactsIconArea.css'
import Map from '../../../image/map.png'
const FunFactsIconArea = () => {
    return (
        <section className="funfacts-area ptb-100 bg-fcfbfb">
            <Container>
                <div className="section-title">
                    <h2>We always try to understand users expectation</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <Row as="div"
                    className="justify-content-center">
                    <Col lg="3" sm="6">
                        <div className="funfact">
                        <FontAwesomeIcon className="icon" icon={faListAlt} />
                            <h3>980+</h3>
                            <p>Completed Projects</p>
                        </div>
                        </Col>
                    <Col lg="3" sm="6">
                        <div className="funfact">
                        <FontAwesomeIcon className="icon" icon={faHeart} />
                            <h3>950+</h3>
                            <p>Happy Clients</p>
                        </div>
                        </Col>
                    <Col lg="3" sm="6">
                        <div className="funfact">
                            <FontAwesomeIcon className="icon" icon={faListAlt} />
                            <h3>780+</h3>
                            <p>Ongoing Projects</p>
                        </div>
                        </Col>
                    <Col lg="3" sm="6">
                        <div className="funfact">
                        <FontAwesomeIcon className="icon" icon={faTrophy} />
                            <h3>70+</h3>
                            <p>Winning Awards</p>
                        </div>
                        </Col>
                </Row>
                <div className="contact-cta-box">
                    <h3>Have any questions about us?</h3>
                    <p>Don't hesitate to contact us</p>
                    <a className="btn btn-primary" href="/">Contact</a>
                </div>
                <div className="map-bg">
                    <img src={Map} alt="" />
                </div>

            </Container>
        </section>
    );
};

export default FunFactsIconArea;