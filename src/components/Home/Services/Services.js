import axios from 'axios';
import Service from '../Service/Service'
import React, { useEffect, useState } from 'react';
import {Container, Row } from 'react-bootstrap';
import './Services.css'

const Services = () => {

    const [serviceData, setServiceData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/services')
            .then(response => {
                // console.log(response.data);
                setServiceData(response.data);
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    return (
        <>
        <Container className="conatainers">
            <div className="ptb-100 pb-60">
                <div className="section-title">
                    <h2>Our Services</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
                <Row className="justify-content-center">
                    {
                        serviceData.map(services => <Service key={services._id} services={services} />)
                    }
                </Row>
            </div>
            </Container>
        </>
    );
};

export default Services;