import React from 'react';
import img1 from '../../../assets/ready_travel.jpg'
import { Parallax } from 'react-parallax';
import { LuTreePine } from "react-icons/lu";
import { IoDiamondOutline } from "react-icons/io5";
import { LuBaggageClaim } from "react-icons/lu";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { GiFlexibleStar } from "react-icons/gi";
import { PiMountains } from "react-icons/pi";
import { TbBeach } from "react-icons/tb";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { FaEarthAsia } from "react-icons/fa6";

const Ready_Travel = () => {
    return (
        <>
        <div className='pt-20'>

            <Parallax bgImage={img1} strength={800}>
                <div className='bg-black bg-opacity-60 md:h-[550px]'>
                    <div className='w-10/12 mx-auto py-16'>
                        <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
                            <div>
                                <div>
                                    <p className='banner_h text-xl font-semibold text-yellow-500'>Are you ready to travel?</p>
                                    <h2 className='font-bold text-4xl mb-2 text-white'>Travily is one of <br/> the Best Online Tour Booking <br/> Platfrom</h2>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-5'>
                                <div className='bg-white text-center px-4 py-10 h-[200px]'>
                                    <div className='flex justify-center items-center'>
                                        <div className='w-16 h-16 bg-yellow-300 flex justify-center items-center rounded-full'>
                                            <LuTreePine className='w-10 h-10'/>
                                        </div>
                                    </div>
                                    <h4 className='text-lg font-extrabold mt-2'>WildLife Tours</h4>
                                </div>
                                <div className='bg-white text-center px-4 py-10 h-[200px]'>
                                    <div className='flex justify-center items-center'>
                                        <div className='w-16 h-16 bg-yellow-300 flex justify-center items-center rounded-full'>
                                            <IoDiamondOutline className='w-10 h-10'/>
                                        </div>
                                    </div>
                                    <h4 className='text-lg font-extrabold mt-2'>Paragliding Tours</h4>
                                </div>
                                <div className='bg-white text-center px-4 py-10 h-[200px]'>
                                    <div className='flex justify-center items-center'>
                                        <div className='w-16 h-16 bg-yellow-300 flex justify-center items-center rounded-full'>
                                            <LuBaggageClaim className='w-10 h-10'/>
                                        </div>
                                    </div>
                                    <h4 className='text-lg font-extrabold mt-2'>Adventure Tours</h4>
                                </div>
                                <div className='bg-white text-center px-4 py-10 h-[200px]'>
                                    <div className='flex justify-center items-center'>
                                        <div className='w-16 h-16 bg-yellow-300 flex justify-center items-center rounded-full'>
                                            <FaUmbrellaBeach className='w-10 h-10'/>
                                        </div>
                                    </div>
                                    <h4 className='text-lg font-extrabold mt-2'>Beaches Tours</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
        <div className=' bg-blue-950 pb-10'>
            <div className=' w-10/12 mx-auto'>
                <div className='text-center pt-14 mb-8'>
                    <p className='banner_h text-2xl font-semibold text-yellow-500'>Our Trusted Partners</p>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-5'>
                    <div className='text-center'>
                        <div className='flex justify-center items-center'>
                            <div className='w-16 h-16 text-white flex justify-center items-center rounded-full'>
                                <GiFlexibleStar className='w-10 h-10'/>
                            </div>
                        </div>
                        <h4 className='text-lg font-extrabold text-white'>Starts</h4>
                    </div>
                    <div className='text-center'>
                        <div className='flex justify-center items-center'>
                            <div className='w-16 h-16 text-white flex justify-center items-center rounded-full'>
                                <PiMountains className='w-10 h-10'/>
                            </div>
                        </div>
                        <h4 className='text-lg font-extrabold text-white banner_h'>Mountains</h4>
                    </div>
                    <div className='text-center'>
                        <div className='flex justify-center items-center'>
                            <div className='w-16 h-16 text-white flex justify-center items-center rounded-full'>
                                <TbBeach className='w-10 h-10'/>
                            </div>
                        </div>
                        <h4 className='text-lg font-extrabold text-white banner_h'>Summer</h4>
                    </div>
                    <div className='text-center'>
                        <div className='flex justify-center items-center'>
                            <div className='w-16 h-16 text-white flex justify-center items-center rounded-full'>
                                <BsEmojiHeartEyes className='w-10 h-10'/>
                            </div>
                        </div>
                        <h4 className='text-lg font-extrabold text-white banner_h'>Say YES</h4>
                    </div>
                    <div className='text-center'>
                        <div className='flex justify-center items-center'>
                            <div className='w-16 h-16 text-white flex justify-center items-center rounded-full'>
                                <FaEarthAsia className='w-10 h-10'/>
                            </div>
                        </div>
                        <h4 className='text-lg font-extrabold text-white banner_h'>LISTEn EaRtH</h4>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Ready_Travel;