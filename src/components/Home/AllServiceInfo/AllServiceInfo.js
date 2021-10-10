import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import camera from "../../../image/camera-cartoon-photography-royalty-free-png-favpng-YeYuXfJZekdKRhCq2VjN635Tq.jpg";
import './AllServiceInfo.css'
import it from "../../../image/it-service1.png";
import './AllServiceInfo.css'
const AllServiceInfo = () => {
    return (
        <div className="service-style-two ptb-100  bg-fcfbfb">
            <Container as="div">
                <Row className="align-items-center" as="div">
                    <Col lg={6}>
                        <div className="service-info pr-50">
                            <div className="info-head">
                                <h2 className="title">PhotoShop Services Catagories</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sed quisquam maiores eaque fugit. Voluptatibus quod magnam reiciendis voluptatem culpa?</p>
                            </div>
                            <Row>
                                <Col sm="6">
                                     <div className="feature-list">
                                       <FontAwesomeIcon className="icon" icon={faCheckSquare} />
                                        Wedding Anniversary
                                    </div> 
                                    {/* <div className="feature-list">
                                        <p><FontAwesomeIcon className="icon" icon={faCheckSquare} />
                                        Birthday Anniversary</p>
                                    </div>
                                    <div className="feature-list">

                                        <p><FontAwesomeIcon className="icon" icon={faCheckSquare} />Photo shotes</p>
                                    </div> */}
                                </Col>
                                {/* <Col sm="6">
                                    <div className="feature-list">
                                        <p><FontAwesomeIcon className="icon" icon={faCheckSquare} />
                                        Wedding Anniversary</p>
                                    </div>
                                    <div className="feature-list">
                                        <p><FontAwesomeIcon className="icon" icon={faCheckSquare} />
                                        Birthday Anniversary</p>
                                    </div>
                                    <div className="feature-list">
                                        <p><FontAwesomeIcon className="icon" icon={faCheckSquare} />
                                        Photo shotes</p>
                                    </div>
                                </Col> */}
                            </Row>
                            <div className="Service-read-more">
                                <Link className="btn btn-primary" to="/">Read more</Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="service-right-img">
                            <img src={it} alt="service-photo" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default AllServiceInfo;