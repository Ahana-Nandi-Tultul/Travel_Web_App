import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import OneCate from './OneCate';

const Category = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <div className='bg-slate-100 py-20 rounded-lg'>

            <div className='w-10/12 mx-auto text-center'>
                <SectionTitle heading="Browse By Category" subheading = "Pick A Tour Type"></SectionTitle>
                <div className="grid md:grid-cols-6 grid-cols-2 mt-10 gap-4">
                    {
                        categories.map(category => <OneCate key = {category._id} 
                            category ={category}></OneCate>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Category;