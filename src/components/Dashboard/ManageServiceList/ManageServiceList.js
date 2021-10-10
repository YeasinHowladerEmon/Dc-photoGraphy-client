import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios'
import Button from '@restart/ui/esm/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import AddService from '../AddService/AddService'
import Swal from 'sweetalert2';
import swal from 'sweetalert';
import toast from 'react-hot-toast';
const ManageServiceList = () => {
    const [service, setService] = useState([])
    const [updateService, setUpdateService] = useState({})

    const loadProduct = () => {
        axios.get('http://localhost:5000/services')
            .then(response => {
                setService(response.data);
            })
            .catch(error => {
                console.log(error)
            })
    }
    useEffect(() => {
        loadProduct()
    }, [])

    const handleDelete = (id) => {

        
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "Are you sure you want to delete this service?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                const loading = toast.loading('Please wait a minute...')
                axios.delete(`http://localhost:5000/deleteService/${id}`)
                    .then(res => {
                        toast.dismiss(loading);
                        if (res.data) {
                            loadProduct(res.data)
                            return swal('Successful', 'Your Booking has been successfully', 'success')
                        }
                        Swal.fire('Failed!', 'Something went wrong! Please try again', 'error')
                    }).catch(error => {
                        toast.dismiss(loading);
                        Swal.fire('Failed!', 'Something went wrong! Please try again', 'error')
                    })
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your file is safe :)',
                    'error'
                )
            }
        })
        // swalWithBootstrapButtons.fire({
        //     title: 'Are you sure?',
        //     text: "You won't be able to revert this!",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonText: 'Yes, delete it!',
        //     cancelButtonText: 'No, cancel!',
        //     reverseButtons: true
        //   }).then((result) => {
        //     if (result.isConfirmed) {
        //       swalWithBootstrapButtons.fire(
        //         'Deleted!',
        //         'Your file has been deleted.',
        //         'success'
        //       )
        //     } else if (
        //       /* Read more about handling dismissals below */
        //       result.dismiss === Swal.DismissReason.cancel
        //     ) {
        //       swalWithBootstrapButtons.fire(
        //         'Cancelled',
        //         'Your imaginary file is safe :)',
        //         'error'
        //       )
        //     }
        //   })
        // swal({
        //     title: "Are you sure?",
        //     text: "Once deleted, you will not be able to recover this imaginary file!",
        //     icon: "warning",
        //     buttons: true,
        //     dangerMode: true,
        // })
        //     .then((willDelete) => {
        //         if (willDelete) {
        //             swal("Poof! Your imaginary file has been deleted!", {
        //                 icon: "success",
        //             });
        //         } else {
        //             swal("Your imaginary file is safe!");
        //         }
        //     });


        // const removeServiceData = service.filter(service => service._id !== id)


    }

    return (
        updateService._id ? <AddService updateService={updateService} setUpdateService={setUpdateService} /> :
            <div className="bg-white px-5 pt-5 mx-md-4 mt-5" style={{ borderRadius: "15px" }}>
                <Table hover borderless responsive>
                    <thead className="bg-light">
                        <tr>
                            <th>Title Name</th>
                            <th>Service Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    {
                        service.map(services => {
                            return (
                                <tbody key={services._id} style={{ fontWeight: "500" }}>
                                    <tr>
                                        <td>{services.title}</td>
                                        <td>{services.name}</td>
                                        <td>{services.description.slice(0, 50)}...</td>
                                        <td>${" "}{services.amount}</td>
                                        <td className="text-center">
                                            <Button variant="outline-success" className="p-1 mb-0 btn btn-outline-success" onClick={() => setUpdateService(services)}>
                                                <FontAwesomeIcon icon={faEdit} className="mx-1" />Edit
                                            </Button>
                                            <Button variant="outline-danger" className="p-1 mb-0 ms-3 btn btn-outline-danger" onClick={() => handleDelete(services._id)}>
                                                <FontAwesomeIcon icon={faTrash} className="mx-1" />Delete
                                            </Button>

                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }
                </Table>
            </div>
    );
};

export default ManageServiceList;