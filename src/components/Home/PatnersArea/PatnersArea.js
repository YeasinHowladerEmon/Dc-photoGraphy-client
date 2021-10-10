import React from 'react';
import { Container, Row } from 'react-bootstrap';
import partner1 from "../../../image/partner1.png"
import partner2 from "../../../image/partner2.png"
import partner3 from "../../../image/partner3.png"
import partner4 from "../../../image/partner4.png"
import partner5 from "../../../image/partner5.png"
import partner6 from "../../../image/partner6.png"
import partner7 from "../../../image/partner7.png"
import partner8 from "../../../image/partner8.png"
import partner9 from "../../../image/partner9.png"
import partner10 from "../../../image/partner10.png"
import partner11 from "../../../image/partner11.png"
import partner12 from "../../../image/partner12.png";
import PatnerArea from '../PatnerArea/PatnerArea';
import './PatnersArea.css';
const imageData = [
    {
        img: partner1
    },
    {
        img: partner2
    },
    {
        img: partner3
    },
    {
        img: partner4
    },
    {
        img: partner5
    },
    {
        img: partner6
    },
    {
        img: partner7
    },
    {
        img: partner8
    },
    {
        img: partner9
    },
    {
        img: partner10
    },
    {
        img: partner11
    },
    {
        img: partner12
    },
    
]
const PatnersArea = () => {
    return (
        <section className="partner-area pt-100 pb-100">
            <Container>
                <div className="section-title">
                    <h2>Trusted By</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <Row className="justify-content-center">
                    {
                        imageData.map(imgs => <PatnerArea imgs={imgs} />)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default PatnersArea;