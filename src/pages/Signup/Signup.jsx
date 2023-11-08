import { useForm } from 'react-hook-form';
import image1 from '../../assets/authentication.jpeg'
import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SocialLogin from '../../components/SocialLogin';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProviders';


const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
      const onSubmit = (data) =>{
        console.log(data);
        if(data.password != data.cpassword)
        {
            Swal.fire({
                title: 'Error!',
                text: 'Password are not same',
                icon: 'error',
                confirmButtonText: 'Sorry!!'
              })
        }
        else{
            createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name)
                .then(() => {})
                .catch(error => {
                    Swal.fire({
                        title: 'Error!',
                        text: `${error.message}`,
                        icon: 'error',
                        confirmButtonText: 'Sorry!!'
                      })
                })

                const newUser = {
                    username: data.name,
                    email: data.email,
                    password: data.password,
                    role: 'customer'
                };

                fetch('http://localhost:3000/users' ,{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newUser)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.insertedId){
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Successfully! You have created an account.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })

            })
            .catch(error =>
            {
                Swal.fire({
                    title: 'Error!',
                    text: `${error.message}`,
                    icon: 'error',
                    confirmButtonText: 'Sorry!!'
                  })
            })
        }
      }

    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                <img src={image1} alt="" />
            </div>
            <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl'>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-0">
                <h1 className="text-3xl text-center font-bold">Please Sign Up!</h1>
                <div className="form-control">
                    <label className="label">
                        <span className='label-text'>User Name*</span>
                    </label>
                    <input type="name" placeholder="name" className="input input-bordered"

                    {...register("name", { required: true })}/>
                    {errors.name && <span>Name field is required</span>}
                </div>
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
                        {...register("password", { required: true, minLength: 6, 
                            pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])/i })} required/>
                        <span
                        className={`absolute inset-y-0 right-0 px-3 py-2 btn bg-transparent border-0`}
                        onClick={() => setShowPassword(!showPassword)}
                        >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    {errors.password && <span>Password field is required. Password must have 6 characters,
                            one capital letter, one special letter</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className='label-text'>Confirm Password*</span>
                    </label>
                    <input type="password" placeholder="confirm password" className={`input input-bordered`} 
                    {...register("cpassword", { required: true })} required/>
                    {errors.cpassword && <span className="text-red-500">
                        <small>Confirm Password field is required</small></span>}
                </div>
                <div className="form-control mt-6">
                <input type="submit" value="Sign Up" className="btn bg-[#ff4d4d] text-white"/>
                </div>
                <p><small>Already have an account? Please 
                <Link className='text-[#ff4d4d]' to="/login"> Log in</Link></small></p>
                <SocialLogin></SocialLogin>
            </form>
            </div>
        </div>
    </div>
    );
};

export default Signup;