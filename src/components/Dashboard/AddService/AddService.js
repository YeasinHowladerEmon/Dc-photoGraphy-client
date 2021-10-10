import React, { useState } from 'react';
import axios from 'axios';
import { Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Button from '@restart/ui/esm/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import './AddService.css'
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
const AddService = ({ setUpdateService, updateService }) => {
    // console.log(updateService);
    // const [imageUrl, setImageUrl] = useState(null)
    const { register, handleSubmit } = useForm();
    const onSubmit = async data => {
        const loading = toast.loading('Please wait a minute...')
        // console.log(data.image[0]);
        // console.log(data)
        //  let imageURL = ;
        // if (!updateService || (updateService && data.image[0])) {
        //     const imageData = new FormData();
        //     imageData.set('key', 'ee01d8d35d1691b4d6750da40c79c9c7');
        //     imageData.append('image', data.image[0]);
        //     axios.post('https://api.imgbb.com/1/upload', imageData)
        //     .then(function (response) {
        //         // setImageUrl(response.data.data.display_url);
        //         imageUrl = (response.data.data.display_url);
        //             console.log(response.data.data.display_url);
        //         })
        //         .catch(function (error) {
        //             console.log(error);
        //         });
        //     }
        let imageUrl = updateService ? updateService.image : '';
        if (!updateService || (updateService && data.image[0])) {
            const imageData = new FormData();
            imageData.set('key', 'ee01d8d35d1691b4d6750da40c79c9c7');
            imageData.append('image', data.image[0]);

            const request = await axios.post('https://api.imgbb.com/1/upload', imageData);
            imageUrl = request.data.data.display_url;
            // console.log(request.data.data.display_url);
            // console.log(request);

        }




        const serviceData = {
            name: data.name,
            title: data.title,
            description: data.description,
            amount: data.amount,
            image: imageUrl
        }

        // if(updateService){
        //     axios.patch(`http://localhost:5000/update/${updateService._id}`,serviceData)
        //       .then(function (response) {
        //         console.log(response);
        //       })
        //       .catch(function (error) {
        //         console.log(error);
        //       });
        // }
        console.log(updateService, "service update data");

        if (updateService) {
            try {
                const data = await axios.patch(`http://localhost:5000/update/${updateService._id}`, serviceData);
                toast.dismiss(loading);
                if (data) {
                    setUpdateService(serviceData)
                    return swal("Successfully updated", "Your service has been successfully updated!", 'success')
                }
                Swal.fire('Failed!', 'Something went wrong! Please try again', 'error')
                setUpdateService({})
                // console.log(data);

                return data;
            } catch (error) {
                console.log(error)
                toast.dismiss(loading);
                Swal.fire('Failed!', 'Something went wrong! Please try again', 'error')
            }
        }



        console.log(serviceData)
        axios.post("http://localhost:5000/addService", serviceData)
            .then(res => {
                toast.dismiss(loading);
                if (res.data) {
                    return swal("Successfully updated", "Your service has been successfully updated!", 'success')
                }
                Swal.fire('Failed!', 'Something went wrong! Please try again', 'error')
            }).catch(err => {
                toast.dismiss(loading);
                Swal.fire('Failed!', 'Something went wrong! Please try again', 'error')
            })
    };
    // const handleImageUpload = (e) => {
    //     const imageData = new FormData();
    //     imageData.set('key', 'ee01d8d35d1691b4d6750da40c79c9c7');
    //     imageData.append('image', e.target.files[0]);
    //     axios.post('https://api.imgbb.com/1/upload', imageData)
    //         .then(function (response) {
    //             // setImageUrl(response.data.data.display_url);
    //             setImageUrl(response.data.data.display_url);
    //             console.log(response.data.data.display_url);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }
    return (
        <>
            <section className="add-service">
                <Form onSubmit={handleSubmit(onSubmit)} className="w-100">
                    <div className="py-5 mx-auto mt-5 bg-white form-main" style={{ borderRadius: "15px", maxWidth: '85rem' }}>
                        <Row className="justify-content-center">
                            <Form.Group as={Col} md={3} sm={12} className="me-md-5 form-group"
                            // controlId="formBasicEmail"
                            >
                                <Form.Label style={{ fontWeight: "bold" }}>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name"
                                    // name="name"
                                    defaultValue={updateService ? updateService.name : ""}
                                    {...register("name")} />
                            </Form.Group>
                            <Form.Group as={Col} md={4} sm={12} className="me-md-5 form-group"
                            // controlId="formBasicEmail"
                            >
                                <Form.Label style={{ fontWeight: "bold" }}>Title Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Title"
                                    // name="title"
                                    defaultValue={updateService ? updateService.title : ""}
                                    {...register("title")} />
                            </Form.Group>
                            <Form.Group as={Col} md={3}
                                sm={12} className="form-group"
                            // controlId="formBasicEmail"
                            >
                                <Form.Label style={{ fontWeight: "bold" }}>Service Amount</Form.Label>
                                <Form.Control
                                    style={{ maxWidth: "260px" }}
                                    type="text"
                                    defaultValue={updateService ? updateService.amount : ""}
                                    placeholder="Enter Amount"
                                    //  name="amount"
                                    {...register("amount")} />
                            </Form.Group>
                            <Form.Group as={Col} md={6} sm={12} className=" mt-md-3 form-group" style={{ marginLeft: "-97px" }} >
                                {/* controlId="exampleForm.ControlTextarea1" */}
                                <Form.Label style={{ fontWeight: "bold" }}>Description</Form.Label>
                                <Form.Control
                                    style={{ height: "10rem" }}
                                    as="textarea"
                                    type="text"
                                    defaultValue={updateService ? updateService.description : ""}
                                    // name="description"
                                    rows={3} {...register("description")}
                                    placeholder="Enter Description" />
                            </Form.Group>
                            <Form.Group as={Col} md={4} sm={12} className="mt-md-3" style={{ position: "relative", right: "-40px", display: "inline-block" }}>
                                <Form.Label style={{ fontWeight: "bold" }}> "Add Image"</Form.Label>
                                <Button
                                    as={"label"}
                                    htmlFor="upload"
                                    variant="outline-primary"
                                    className="d-block p-2 upload-btn">
                                    <FontAwesomeIcon icon={faCloudUploadAlt} className="me-2" />Upload Image
                                </Button>
                                <Form.Control
                                    hidden="hidden"
                                    id="upload"
                                    type="file"
                                    // defaultFile={updateService ? updateService.image : ""}
                                    // onChange={handleImageUpload}
                                    {...register("image")}
                                    placeholder="Upload photo" />
                                {/* <input type="file" name="file" /> */}
                                <div className="mt-5 mt-2">
                                    <Button type="submit" className="btn btn-primary submit-btn">
                                        Submit
                                    </Button>
                                </div>
                            </Form.Group>
                        </Row>

                        {/* <input type="submit" /> */}
                    </div>
                </Form>
            </section>
        </>
    );
};

export default AddService;