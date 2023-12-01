import React from 'react';
import { Parallax } from 'react-parallax';

const Banner = ({image, dir, subdir, title}) => {
    return (
        <div>
            <Parallax bgImage={image} strength={400}>
                <div className='bg-black bg-opacity-70 h-[300px]'>
                    <div className='w-10/12 mx-auto flex items-center h-full'>
                            <h6 className='banner_h text-2xl font-semibold m-auto'>
                                <p className='text-5xl text-white mb-4 text-center'>{title}</p>
                                <span className='mt-10'>
                                    <span className=' text-white'>{dir}</span>
                                    <span className='text-red-600'>{subdir}</span>
                                </span>
                            </h6>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default Banner;