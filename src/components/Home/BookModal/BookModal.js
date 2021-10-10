import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@restart/ui/esm/Button';
import axios from 'axios';
import React, { useContext } from 'react';
import { Form, Modal, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import swal from 'sweetalert';
import { UserContext } from '../../../App';
import './BookModal.css'
const BookModal = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { dataStore, setDataStore, } = useContext(UserContext)
    const { loggedInUser } = useContext(UserContext)
    // const onSubmit = () => {
    //     throw new Error('Something is wrong')
    //   }
    const onSubmit = data => {
        const loading = toast.loading('Please wait a minute...')
        console.log(data);
        const orderDetails = {
            dataStore,
            data
        }
        axios.post("http://localhost:5000/addOrder", orderDetails)
            .then(res => {
                toast.dismiss(loading);
                if (res.data) {
                    return swal('Successful', 'Your Booking has been successfully', 'success')
                }
                Swal.fire('Failed!', 'Something went wrong! Please try again', 'error')
            }).catch(error => {
                toast.dismiss(loading);
                Swal.fire('Failed!', 'Something went wrong! Please try again', 'error')
            })


    }
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header className="ms-auto pb-0">
                    <Button onClick={props.onHide} className="close"><FontAwesomeIcon icon={faTimes} /></Button>
                </Modal.Header>
                <Modal.Body>
                    <Row className="justify-content-center">
                        <h2>Confirm Your Booking</h2>
                        <p>Send Booking of Your Items and additional message</p>
                        <Form onSubmit={handleSubmit(onSubmit)} className="w-100">
                            <div className=" mx-auto bg-white form-main" style={{ borderRadius: "15px", maxWidth: '85rem' }}>
                                <Form.Group className="me-md-3 form-group">
                                    <Form.Label style={{ fontWeight: "bold" }}>Enter Your Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Name"
                                        defaultValue={loggedInUser.name}
                                        {...register("name")} />
                                </Form.Group>
                                <Form.Group className="me-md-3 form-group">
                                    <Form.Label style={{ fontWeight: "bold" }}>Enter Your Email</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Email"
                                        defaultValue={loggedInUser.email}
                                        {...register("email")}
                                    />
                                </Form.Group>
                                <Form.Group className="me-md-3 form-group">
                                    <Form.Label style={{ fontWeight: "bold" }}>Enter Your Address</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Address"
                                        {...register("address")} />
                                </Form.Group>
                                <Form.Group className="me-md-3 form-group">
                                    <Form.Label style={{ fontWeight: "bold" }}>Enter Your Mobile number</Form.Label>
                                    <Form.Control id="mobileNumber" type="tel" placeholder="Enter Your Mobile number" {...register("MobileNumber", { required: true, minLength: 11, maxLength: 14 })} />
                                    {errors.MobileNumber && errors.MobileNumber.type && <span>This is required </span>}
                                    {errors.MobileNumber && errors.MobileNumber.type && <span>Max length exceeded</span>}
                                </Form.Group>
                                <div className="mt-5 mt-2">
                                    <Button 
                                type="submit" className="sign-in-up">
                                        Submit
                                    </Button>
                                </div>
                                {/* <input onClick={() => console.log("click")} type="submit" /> */}
                            </div>
                        </Form>
                    </Row>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default BookModal;