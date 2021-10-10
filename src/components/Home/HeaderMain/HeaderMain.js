import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import './HeaderMain.css'
import Banner from '../../../image/animate-banner-img1.jpg'
const HeaderMain = () => {
    return (
        <>
            <div className="hero-banner it-banner overly hero-bg4">
                <div className='d-table'>
                    <div className='d-table-cell'>
                        <div className='container fluid'>
                            <Row className='align-items-center'>
                                <Col lg={6}>
                                    <div className='main-banner-content'>
                                        <h1>we're an Photoshoot agency</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <a className='btn btn-primary' href="/">Get Started</a>
                                        <a className='btn btn-secondary' href="/"><FontAwesomeIcon className="icon" icon={faPlay} />Watch this video</a>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="animate-banner-image">
                                        <img src={Banner} alt="animateBanner" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderMain;