import React from 'react';
import { faDribbble, faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';
import team9 from '../../../image/team9.jpg';
import team10 from '../../../image/team10.jpg';
import team11 from '../../../image/team11.jpg';
import './TeamCompoArea.css'
const TeamCompoArea = () => {
    return (
        <div className="pt-100 pb-70">
            <Container>
                <div className="section-title">
                    <h2>Our Expert Team</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <Row>
                    <Col lg={4} sm={6}>
                        <div className="team-card text-center">
                            <div className="team-img">
                                <img src={team9} alt="team1" />
                                <div className="social-links">
                                    <div className="d-table">
                                        <div className="d-table-cell">
                                            <ul>
                                                <li>
                                                    <a href="/">
                                                        <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <FontAwesomeIcon className="icon" icon={faTwitter} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <FontAwesomeIcon className="icon" icon={faFacebook} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <FontAwesomeIcon className="icon" icon={faInstagram} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <FontAwesomeIcon className="icon" icon={faDribbble} />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="team-caption">
                                <h3>James white</h3>
                                <p>CEO & founder</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={6}>
                        <div className="team-card text-center">
                            <div className="team-img">
                                <img src={team10} alt="team1" />
                                <div className="social-links">
                                    <div className="d-table">
                                        <div className="d-table-cell">
                                            <ul>
                                            <li>
                                                    <a href="/">
                                                        <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <FontAwesomeIcon className="icon" icon={faTwitter} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <FontAwesomeIcon className="icon" icon={faFacebook} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <FontAwesomeIcon className="icon" icon={faInstagram} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <FontAwesomeIcon className="icon" icon={faDribbble} />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="team-caption">
                                <h3>James white</h3>
                                <p>CEO & founder</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} className="offset-sm-3 offset-lg-0">
                        <div className="team-card text-center">
                            <div className="team-img">
                                <img src={team11} alt="team1" />
                                <div className="social-links">
                                    <div className="d-table">
                                        <div className="d-table-cell">
                                            <ul>
                                            <li>
                                                    <a href="/">
                                                        <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <FontAwesomeIcon className="icon" icon={faTwitter} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <FontAwesomeIcon className="icon" icon={faFacebook} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <FontAwesomeIcon className="icon" icon={faInstagram} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <FontAwesomeIcon className="icon" icon={faDribbble} />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="team-caption">
                                <h3>James white</h3>
                                <p>CEO & founder</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TeamCompoArea;