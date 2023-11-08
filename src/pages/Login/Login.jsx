import { useForm } from 'react-hook-form';
import image1 from '../../assets/authentication.jpeg'
import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SocialLogin from '../../components/SocialLogin';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {login} = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
      const onSubmit = (data) =>{
        login(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Successfully! You have logged in your account.',
                showConfirmButton: false,
                timer: 1500
              });
        })
        .catch(error => {
            console.log(error)
            Swal.fire({
                title: 'Error!',
                text: `${error?.message}`,
                icon: 'error',
                confirmButtonText: 'Ok'
              })
        })
      }


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
                    <span className='label-text'>Email*</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered"

                {...register("email", { required: true })} required/>
                 {errors.email && <span>Email field is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className='label-text'>Password*</span>
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
                <input type="submit" value="Login" className="btn bg-[#ff4d4d] text-white"/>
                </div>
                <p><small>New to Travily? Please 
                <Link className='text-[#ff4d4d]' to="/signup"> Sign Up</Link></small></p>
            </form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    </div>
    );
};

export default Login;