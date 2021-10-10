import React from 'react';
import { Col } from 'react-bootstrap';

const PatnerArea = ({imgs}) => {
    // const {imageURL} = props.imgs;
    // console.log(imageURL);
    return (
        <Col lg={2} md={6} sm={4}>
            <div className="single-partner">
                <a href="#" onClick={(e) => e.preventDefault()}>
                    <img src={imgs.img} alt="img" />
                </a>
            </div>
        </Col>
    );
};

export default PatnerArea;