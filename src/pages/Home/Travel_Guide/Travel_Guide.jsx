import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import moment from 'moment';
import { GoDotFill } from "react-icons/go";

const Travel_Guide = () => {
    const [tour_guides, setTour_guides] = useState([]);
    const [tourImages, setTourImages] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/travel_guides')
        .then(res => res.json())
        .then(data => setTour_guides(data))

        fetch('http://localhost:3000/travel_images')
        .then(res => res.json())
        .then(data => setTourImages(data))


    }, [])
    return (
        <div className='py-20 rounded-lg'>

            <div className='w-10/12 mx-auto text-center'>
                <SectionTitle heading="Updates" subheading = "Latest Travel Guide"></SectionTitle>
                <div className="grid md:grid-cols-2 grid-cols-1 mt-14 gap-4 mb-10">
                  {
                    tour_guides.map(guide => <div className="card card-side bg-base-100 shadow-sm" key={guide._id}>
                    <figure className='w-[200px]'><img src={guide.image} alt="Movie" className='h-[200px] w-[200px]'/></figure>
                    <div className="card-body">
                      <h2 className="md:flex items-center gap-2 text-slate-500">
                        <span>{moment(guide.date).format("MMMM D YYYY")}</span>
                        <p className='flex items-center mt-0'><GoDotFill /><span className='uppercase'>{guide.writer}</span></p>
                      </h2>
                      <h2 className="card-title text-left">{guide.title}</h2>
                    </div>
                  </div>)
                  }
                </div>
                <div className="divider"></div>
                <div className='grid grid-cols-2 md:grid-cols-5 gap-8'>
                    {
                        tourImages.map(tourImg => <div key={tourImg._id} className='h-[150px]'>
                            <img src={tourImg.image} alt="" className='h-full w-full' />
                        </div>)
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Travel_Guide;