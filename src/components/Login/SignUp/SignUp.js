import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './SignUp.css'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true }); //email verification

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate()
    const navigateLogin = () => {
        navigate('/login');

    }
    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        // navigate('/home');
        console.log('user', user);
    }
    const handleRegister = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        if(password!==confirmPassword){
            toast('Your Password Did Not Matched!!')
            return;
    }

        await createUserWithEmailAndPassword(email, password ,confirmPassword);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
    
}
    return (
        <div className='signup-form'>
            <h2 className='text-primary text-center mt-3 mb-2'  >Please Sign Up</h2>
            <form onSubmit={handleRegister} >
                <input type="text" name="name" id="" placeholder='Your Name' required />

                <input type="email" name="email" id="" placeholder='Email Address' required />

                <input type="password" name="password" id="" placeholder='Password' required />
                <input type="password" name="confirmPassword" id="" placeholder='Confirm Password' required />

                <input

                    className='w-100 mx-auto btn btn-primary mt-2'
                    type="submit"
                    value="Sign Up" />

            </form>
            <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
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

export default SignUp;