import React, { useContext, useState } from 'react';
import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './LoginPage.css'
import { Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Button from '@restart/ui/esm/Button';
import { initializeLoginFramework, handleGoogleSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword, setUserToken } from './LoginSetting'
import { UserContext } from '../../App';
import toast from 'react-hot-toast';
import { useHistory, useLocation } from 'react-router';
const LoginPage = () => {
    const {setLoggedInUser} = useContext(UserContext)
    const [newUser, setNewUser] = useState(false)
    const { register: registerSignUp, handleSubmit: handleSignUp, formState: { errors: errorsSignUp } } = useForm();
    const { register: registerSignIn, handleSubmit: handleSignIn, formState: { errors: errorsSignIn } } = useForm();
    initializeLoginFramework();
    let history = useHistory();
    let location  = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const googleSignIn = () => {
        const loading = toast.loading('Please wait a minute...');
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res);
                toast.dismiss(loading)
            }).catch(err =>  {
                toast.dismiss(loading);
                toast.error(err.message);
            })
    }


    const onSubmit = data => {
        console.log(data);
        const loading = toast.loading('Please wait a minute...');
        const {name, email, password} = data;
        
        if(newUser){
            createUserWithEmailAndPassword(name, email, password)
            .then(res => {
                toast.dismiss(loading)
                res.name= name; 
                handleResponse(res)
            }).catch(err =>  {
                toast.dismiss(loading);
                toast.error(err.message);
            })
        }else{
            signInWithEmailAndPassword(email, password)
            .then(res => {
                toast.dismiss(loading)
                handleResponse(res)
            }).catch(err => {
                toast.dismiss(loading);
                toast.error(err.message);
            })
        }

    }
    const handleResponse = (res) => {
        setLoggedInUser(res)
        setUserToken()
        history.replace(from);
        toast.success('Successfully Logged In!!!');
    }


    return (
        <Container>
            <div className={`${newUser ? "right-panel-active" : ""}`} id="container">
                <div className="form-container sign-up-container">
                    <Form onSubmit={handleSignUp(onSubmit)} className="h-child">
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="#" className="social"><FontAwesomeIcon icon={faFacebookF} className="icon" /></a>
                            <a href="#" onClick={googleSignIn} className="social"><FontAwesomeIcon icon={faGooglePlusG} className="icon" /></a>
                            <a href="#" className="social"><FontAwesomeIcon icon={faLinkedinIn} className="icon" /></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="type" placeholder="Name" {...registerSignUp("name", { required: true })} />
                        {/* {errorsSignUp.name?.type === 'name' && "Name is required"} */}
                        <input type="email" placeholder="Email" {...registerSignUp("email", { required: true })} />
                        {/* {errorsSignUp.email?.type === 'email' && "Email is required"} */}
                        <input type="password" placeholder="Password" {...registerSignUp("password", { required: true })} />
                        {/* {errorsSignUp.name?.type === 'password' && "Password is required"} */}
                        <button type="submit" className="sign-in-up">Sign Up</button>
                        {/* <input type="submit" /> */}

                    </Form>
                </div>
                <div className="form-container sign-in-container">
                    <Form onSubmit={handleSignIn(onSubmit)} className="h-child">
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <a href="#"  className="social"><FontAwesomeIcon icon={faFacebookF} className="icon" /></a>
                            <a href="#"  onClick={googleSignIn} className="social"><FontAwesomeIcon icon={faGooglePlusG} className="icon" /></a>
                            <a href="#"  className="social"><FontAwesomeIcon icon={faLinkedinIn} className="icon" /></a>
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" {...registerSignIn("email", { required: true })} />
                        {/* {errorsSignIn.email?.type === 'email' && "Email is required"} */}
                        <input type="password" placeholder="Password" {...registerSignIn("password", { required: true })} />
                        {/* {errorsSignIn.name?.type === 'password' && "Password is required"} */}

                        {/* <input type="submit" className="signinup"/> */}
                        <button type="submit" className="sign-in-up">Sign In</button>

                        {/* <input type="submit" /> */}
                    </Form>
                </div>
                <div className="overlay-container">
                    <div className="overlay h-child">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>
                                To keep connected with us please login with your personal info
                            </p>
                            <button onClick={() => setNewUser(!newUser)} className="sign-in-up ghost" id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button onClick={() => setNewUser(!newUser)} className="sign-in-up ghost" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default LoginPage;