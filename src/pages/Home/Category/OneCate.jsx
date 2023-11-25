import React from 'react';
import { BsBuildings } from 'react-icons/bs';
import { TbBeach, TbSailboat, TbEyeSearch, TbMountain } from 'react-icons/tb';
import { CiForkAndKnife } from 'react-icons/ci';
import { motion } from "framer-motion";

const OneCate = ({category}) => {
    //console.log(category);
    const {image, name, duration} = category;
    return (
        <motion.div
        className='px-4 py-10 bg-white'
        whileHover={{ scale: [null, 1.3, 1.2] }}
        transition={{ duration: 0.3 }}
      >
        <div className='flex justify-center items-center'>
          <div className='w-10 h-10 bg-yellow-300 flex justify-center items-center rounded-full'>
            {image === 'BsBuildings' ? (
              <BsBuildings className='w-6 h-6' />
            ) : image === 'TbBeach' ? (
              <TbBeach className='w-6 h-6' />
            ) : image === 'TbSailboat' ? (
              <TbSailboat className='w-6 h-6' />
            ) : image === 'TbEyeSearch' ? (
              <TbEyeSearch className='w-6 h-6' />
            ) : image === 'CiForkAndKnife' ? (
              <CiForkAndKnife className='w-6 h-6' />
            ) : image === 'TbMountain' ? (
              <TbMountain className='w-6 h-6' />
            ) : (
              <TbEyeSearch className='w-6 h-6' />
            )}
          </div>
        </div>
        <h4 className='text-lg font-extrabold mt-2'>{name}</h4>
        <p>{duration} hour</p>
      </motion.div>
    );
};

export default OneCate;