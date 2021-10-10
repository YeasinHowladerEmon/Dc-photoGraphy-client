import Button from '@restart/ui/esm/Button';
import React, { useContext } from 'react';
import { Image, OverlayTrigger, Popover } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { UserContext } from '../../../App';
import { initializeLoginFramework, handleSignOut } from '../../Login/LoginSetting';

const ProfilePopbar = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext)
    const {photo, name, email } = loggedInUser
    console.log(loggedInUser);
    const signOut = () => {
        initializeLoginFramework()
        handleSignOut()
            .then(res => {
                setLoggedInUser(res)
                toast.error("Log Out")
            })
    }
    return (
        <>
            <OverlayTrigger
                trigger="click"
                rootClose
                key="bottom"
                placement="bottom"
                overlay={
                    <Popover id={`popover-positioned-bottom`}>
                        <Popover.Body>
                            <strong className="text-center d-block">{name}</strong>
                            <strong className="text-center d-block">{email}</strong>
                            <div className="d-flex justify-content-center mt-1"><Button size="sm" className=" btn btn-primary" style={{
                                fontSize: "13px",
                                padding: "3px"
                            }} onClick={signOut}>Logout</Button></div>
                        </Popover.Body>
                    </Popover>
                }
            >
                <Image
                    src={photo}
                    width="40"
                    height="40"
                    roundedCircle
                    className="d-inline-block align-top"
                />
            </OverlayTrigger >
        </>
    );
};

export default ProfilePopbar;