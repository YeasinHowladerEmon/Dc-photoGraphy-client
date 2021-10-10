import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../../Home/Service/Service';

const Book = () => {
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
        <div>
            <Row className="justify-content-center">
                {
                    serviceData.map(services => <Service key={services._id} services={services} />)
                }
            </Row>
        </div>
    );
};

export default Book;