import axios from 'axios';
import React, { useContext } from 'react';
import { Button, Col, Row, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import { UserContext } from '../../../App';

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();
    const { loggedInUser: { email } } = useContext(UserContext)
    const onSubmit = data => {
        const loading = toast.loading('Please wait a minute...')
        if (email === "admin@test.com") {
            toast.dismiss(loading);
            return swal("Permission restriction!", "As a test-admin, you don't have this permission.", "info");
        }
            axios.post("http://localhost:5000/addAdmin", data)
                .then(res => {
                    if (res.data) {
                        return swal('Successful Added', `${data.email} has been successfully added as a admin`, 'success')
                    }
                    Swal.fire('Failed!', 'Something went wrong! Please try again', 'error')
                }).catch(error => {
                    toast.dismiss(loading);
                    Swal.fire('Failed!', 'Something went wrong! Please try again', 'error')
                })
    }
    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)} className="w-100">
                <div className="p-5 mx-md-auto mt-5 bg-white form-main d-flex justify-content-center" style={{ borderRadius: "15px", maxWidth: '85rem' }}>
                    <div className="py-md-4">
                        <Row>
                            <Form.Group as={Col} xs="auto" className=" form-group">
                                <Form.Label style={{ fontWeight: "bold" }}>Enter Email</Form.Label>
                                <Form.Control style={{ width: '30rem' }} type="text" placeholder="Enter Email"
                                    {...register("email")} />
                            </Form.Group>
                            <Form.Group as={Col} xs="auto" className="mt-5">
                                <Button type="submit" className="btn btn-primary submit-btn">Add</Button>
                            </Form.Group>
                        </Row>
                    </div>
                    {/* <div className="mt-5 mt-2">
                        <button type="submit" className="btn btn-primary submit-btn">
                            Submit
                        </button>
                    </div> */}
                </div>
            </Form>
        </div>
    );
};

export default MakeAdmin;