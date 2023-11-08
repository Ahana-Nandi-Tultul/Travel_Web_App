import { useForm } from 'react-hook-form';
import image1 from '../../assets/authentication.jpeg'
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
      const onSubmit = (data) =>{}


    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
                <img src={image1} alt="" />
            </div>
            <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl'>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-0">
                <h1 className="text-3xl text-center font-bold">Please Login!</h1>
                <div className="form-control">
                <label className="label">
                    <span className='label-text'>Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered"

                {...register("email", { required: true })} required/>
                 {errors.name && <span>Name field is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className='label-text'>Password</span>
                    </label>
                    <div className="relative">
                        <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        className={`input input-bordered w-full`}
                        {...register("password", { required: true })} required/>
                        <span
                        className={`absolute inset-y-0 right-0 px-3 py-2 btn bg-transparent border-0`}
                        onClick={() => setShowPassword(!showPassword)}
                        >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    {errors.password && <span>Name field is required</span>}
                </div>
                <div className="form-control mt-6">
                <input type="submit" value="Login" className="btn bg-[#01a2a6] text-white"/>
                </div>
                <p><small>New to TalkTime? Please </small></p>
            </form>
            </div>
        </div>
    </div>
    );
};

export default Login;