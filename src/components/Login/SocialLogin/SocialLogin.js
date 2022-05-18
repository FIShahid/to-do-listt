import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../Image/icon/google.png'
import Loading from '../Loading';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location?.state?.from?.pathname || "/";

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger fw-bold'>❌ Something Went Wrong</p>

    }
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        navigate('/home')
    }
    //redirect to checkout
    if (user) {
        navigate(from, { replace: true });
    }


    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50 '>

                </div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50 ' ></div>
            </div>
            {errorElement}
            <button onClick={() => signInWithGoogle()} className='btn btn-primary w-100 d-block'>
                <img style={{ width: '20px' }} src={google} alt="" />
                <span className='px-2'>Google Sign In</span></button>
        </div>
    );
};

export default SocialLogin;