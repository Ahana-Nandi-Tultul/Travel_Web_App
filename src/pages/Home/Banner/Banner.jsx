import React from 'react';
import image1 from '../../../assets/Banner/banner_3.jpg';
import image2 from '../../../assets/Banner/banner_1.jpg';
import './Banner.css';
import { useForm } from 'react-hook-form';

const Banner = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
      const onSubmit = (data) =>{
        console.log(data);
      }
    return (
        <>
            <div className='pt-10 bg-blue-900 w-full relative'>
                <div className='md:w-10/12 mx-auto p-4 md:p-0'>
                    <div className='grid grid-cols-1 md:grid-cols-2 text-white justify-center 
                    items-center gap-4'>
                        <div>
                            <p className='banner_h text-yellow-300 text-4xl mb-2'>Explore The</p>
                            <h2 className='font-bold text-5xl mb-2'>Travel & Adventures</h2>
                            <p className='text-lg'>Find awesome hotel, tour, car and activities in Bangladesh</p>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                            <div className='h-1/2 hidden md:flex'>
                                <img src={image1} alt="" className='w-full h-full'/>
                            </div>
                            <div className='h-[500px] w-full md:w-[300px]'>
                                <img src={image2} alt="" className='w-full h-full'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-4/5 mx-auto bg-white md:absolute z-50 md:top-[450px] md:left-1/2 md:transform md:-translate-x-1/2 p-4 rounded-lg'>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className='grid grid-cols-1 md:grid-cols-5 items-end'>
                        <div className="form-control w-fulll mr-2">
                            <label className="label">
                                <span className="label-text banner_h font-semibold text-black text-lg">Destination</span>
                            </label>
                            <input type="text" placeholder="Where To Go" name="destination" className="input input-bordered w-full" 
                            {...register("destination", { required: true })}/>
                             {errors.destination && <span className='text-red-600'>Destination field is required</span>}
                        </div>
                        <div className="form-control w-full mr-2">
                            <label className="label">
                                <span className="label-text banner_h font-semibold text-black text-lg">Type</span>
                            </label>
                            <input type="text" placeholder="Activity" className="input input-bordered w-full" name="type"
                             {...register("type", { required: true })}/>
                              {errors.type && <span className='text-red-600'>Type field is required</span>}
                        </div>
                        <div className="form-control w-full mr-2">
                            <label className="label">
                                <span className="label-text banner_h font-semibold text-black text-lg">When</span>
                            </label>
                            <input type="date" placeholder="Date" className="input input-bordered w-full" name="date"
                            {...register("date", { required: true })} />
                             {errors.date && <span className='text-red-600'>Date field is required</span>}
                        </div>
                        <div className="form-control w-full mr-2">
                            <label className="label">
                                <span className="label-text banner_h font-semibold text-black text-lg">Guests</span>
                            </label>
                            <input type="text" placeholder="0" className="input input-bordered" name="guests"
                            {...register("guests", { required: true })}/>
                             {errors.guests && <span className='text-red-600'>Guests field is required</span>}
                        </div>
                        <input type="submit" className="btn btn-warning mt-2" value="Search"/>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Banner;