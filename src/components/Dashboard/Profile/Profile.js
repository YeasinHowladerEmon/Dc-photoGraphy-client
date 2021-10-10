import React, { useContext } from 'react';
import { UserContext } from '../../../App';

const Profile = () => {
    const { loggedInUser: { name, photo, email } } = useContext(UserContext)
    return (
        <>
            <div className="container align-items-center" style={{ maxWidth: "40rem", position: "relative", top: "115px" }}>
                <div className="border-0 shadow card bg-white d-flex justify-content-center" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={photo} className="img-fluid rounded-start" alt="..." width="200" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h4 className="text-center border-0 mb-4 card-header">Profile</h4>
                                <h5 className="card-text"><strong>Name:</strong>{" "}{name}</h5>
                                <p className="card-text"><strong>Email:</strong>{" "}{email}</p>
                                {/* <h4 className="card-title">Card title</h4> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;