
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import about from '../../../image/about-img3.jpg'
import './About.css';
import ModalCompo from '../ModalCompo/ModalCompo';
// import Modal from 'react-modal';

// const customStyles = {
//     content: {
//         top: '50%',
//         left: '50%',
//         right: 'auto',
//         bottom: 'auto',
//         marginRight: '-50%',
//         transform: 'translate(-50%, -50%)',
//         transition: `opacity .3s ease-out`,
//         cursor: 'pointer',
//         // backgroundColor: 'rgba(0,0,0,.5)'
//     },
// };
const About = () => {
    const [modalShow, setModalShow] = useState(false);
    // const [isOpen, setOpen] = useState(false)
    // const [modalIsOpen, setIsOpen] = useState(false)

    // // const openModal = () => {
    // //     setIsOpen(true);
    // // }
    // const afterOpenModal = () => {
    //     // subtitle.style.color = '#f00';
    // }
    // const closeModal = () => {
    //     setIsOpen(false);
    // }
    return (
        <section className="about-area ptb-100 pt-100">
            <Container>
                <Row className="align-items-center">
                    <Col lg={7} md={12}>
                        <div className="about-content about-content-two ps-0 mt-0">
                            <div className="section-title">
                                <h2>Why Choose Us</h2>
                                <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
                            </div>
                            <div className="about-text">
                                <h4>Who We Are</h4>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            </div>

                            <div className="about-text">
                                <h4>Our History</h4>
                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.</p>
                            </div>

                            <div className="about-text">
                                <h4>Our Mission</h4>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5} md={12}>
                        <div className="about-image right-image">
                            <img src={about} alt="image" className="rounded-10" />
                            <div className="video-box">
                                <div
                                    // onClick={() => setIsOpen(true)}
                                    onClick={() => setModalShow(true)}
                                    className="video-btn">
                                    <FontAwesomeIcon className="icon" icon={faPlay} />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                <ModalCompo show={modalShow} onHide={() => setModalShow(false)} />

                <div>
                    {/* <button onClick={openModal}>Open Modal</button> */}
                    {/* <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    // onClose={()=> setIsOpen(false)}
                    >
                        <div>
                            <div>
                                <div>
                                    <button></button>
                                    <iframe
                                        width="560"
                                        height="315"
                                        src='https://www.youtube.com/embed/tu-bgIg-Luo?autoplay=1'
                                        frameborder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>

                    </Modal> */}
                </div>
            </Container>
        </section>
    );
};

export default About;