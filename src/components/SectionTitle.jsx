import React from 'react';

const SectionTitle = ({heading, subheading}) => {
    return (
        <div>
            <p className='banner_h text-xl font-semibold text-blue-800'>{heading} </p>
            <h2 className='font-bold text-4xl mb-2'>{subheading}</h2>
        </div>
    );
};

export default SectionTitle;