import React from 'react';
import contactImage from '../../../assets/contact.jpg';
import SectionTitle from '../../../components/SectionTitle';
import { GiCheckMark } from "react-icons/gi";

const Contact = () => {
    return (
        <div className='bg-slate-100 py-20 rounded-lg'>
            <div className='w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
                <div className='h-[600px]'>
                    <img src={contactImage} alt="" className='h-full w-full' />
                </div>
                <div>
                    <SectionTitle heading = "Why Choose Us" subheading="Plan Your Trip With Travily"></SectionTitle>
                    <p className='text-slate-600 mt-5'>Certainly! To integrate the motion.div with Framer Motion into your React app, you can follow some steps.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, eius? Similique, delectus ipsum! Non, quam modi ea ad molestias 
                        eaque magni consequatur officia itaque cupiditate voluptatem culpa libero nam rerum!
                    </p>
                    <div className='grid grid-cols-2 gap-5 text-black mt-5'>
                        <div className='flex items-center gap-3'>
                            <GiCheckMark className='h-5 w-5'/>
                            <h6 className='font-bold'>Travel Plan</h6>
                        </div>
                        <div className='flex items-center gap-3'>
                            <GiCheckMark className='h-5 w-5'/>
                            <h6 className='font-bold'>Cheap Rates</h6>
                        </div>
                        <div className='flex items-center gap-3'>
                            <GiCheckMark className='h-5 w-5'/>
                            <h6 className='font-bold'>Hand-picked Tour</h6>
                        </div>
                        <div className='flex items-center gap-3'>
                            <GiCheckMark className='h-5 w-5'/>
                            <h6 className='font-bold'>Private Guide</h6>
                        </div>
                        <button className="btn btn-outline mt-5">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;