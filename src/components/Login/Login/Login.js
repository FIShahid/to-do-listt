
import { async } from '@firebase/util';
import React, { useEffect, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    //redirect user
    if (user) {
        navigate(from, { replace: true });
    }
        //error handling
    if (error) {
        errorElement = <p className='text-danger fw-bold'>❌ User Email or Password Did Not Matched!!!!</p>
    }
    if (loading || sending) {
        return <Loading></Loading>
    }
    const handleSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }
    const navigateSignUp = e => {
        navigate('/signup')

    }
        //Resetting Password
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please Enter Your Email')
        }

    }


    return (
        <div className='container w-50 mx-auto '>
            <h2 className='text-primary text-center mt-3 mb-2'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>
                {error?.email && <p className="error-message">{error.email}</p>}

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                {error?.password && <p className="error-message">{error.password}</p>}
                <Button variant="primary" type="submit  " className='w-100 mb-2'>
                    Login
                </Button>
            </Form>
            {errorElement}
            <p>Please Login/SignUp to Continue <Link to='/signup' className='text-primary text-decoration-none' onClick={navigateSignUp}>Please Sign Up</Link></p>
            <p>Forgot your Password? <button className='btn btn-link text-primary text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    );
};

export default Login;