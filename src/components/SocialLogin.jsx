import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    const handleGoogleLogin = () => 
    {

    }
    return (
        <div className="p-4">
            <div className='divide divide-black'></div>
            <div className="flex justify-center items-center my-4">
                <button className={`btn btn-circle btn-outline`} onClick={handleGoogleLogin}>
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;