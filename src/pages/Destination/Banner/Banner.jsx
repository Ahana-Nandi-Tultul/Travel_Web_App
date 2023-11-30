import React from 'react';
import { Parallax } from 'react-parallax';

const Banner = ({image, dir, subdir}) => {
    return (
        <div>

            <Parallax bgImage={image} strength={400}>
                <div className='bg-black bg-opacity-70 md:h-[300px]'>
                    <div className='w-10/12 mx-auto flex items-center h-full'>
                            <p className='banner_h text-2xl font-semibold m-auto'>
                                <span className=' text-white'>{dir}</span>
                                <span className='text-red-600'>{subdir}</span>
                            </p>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default Banner;