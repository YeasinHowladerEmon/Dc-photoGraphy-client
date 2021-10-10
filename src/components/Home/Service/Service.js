import React, { useContext, useState } from 'react';
import '../Services/Services.css'
import { Col } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';

import { UserContext } from '../../../App';
import BookModal from '../BookModal/BookModal';

const Service = ({ services }) => {

    const { setDataStore } = useContext(UserContext)
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <Col md={3} className="">
                {/* <FontAwesomeIcon className="icon" icon={faCreditCard} /> */}
                <div className="box">
                    <div className="imgBx">
                        <img src={services.image} alt="image" />
                    </div>
                    <div className="content">
                        <h2>{services.name}</h2>
                        <h3>{services.title}</h3>
                        <h3>{services.description}</h3>
                        <h4>$ {services.amount}</h4>
                        <Button className="btn btn-primary"
                            // as={Link} to="/dashboard/profile"
                            onClick={() => {
                                setModalShow(true);
                                setDataStore(services)
                            }}
                        >Book Now</Button>
                    </div>
                </div>
                <BookModal show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </Col>
        </>
    );
};

export default Service;