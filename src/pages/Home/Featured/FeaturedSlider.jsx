import React, { useEffect, useState } from 'react';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaRegClock, FaRegStar, FaStar } from "react-icons/fa6";

import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Rating from 'react-rating';
import moment from 'moment/moment';
const FeaturedSlider = ({tours}) => {
    const [slidesPerView, setSlidesPerView] = useState(4);
    useEffect(() => {
      const updateSlidesPerView = () => {
        if (window.innerWidth <= 600) {
          setSlidesPerView(1);
        } 
        else if(window.innerWidth <= 800)
        {
          setSlidesPerView(2); 
        }
        else {
          setSlidesPerView(4);
        }
      };
  
      updateSlidesPerView();
      window.addEventListener('resize', updateSlidesPerView);
      return () => {
        window.removeEventListener('resize', updateSlidesPerView);
      };
    }, []);
      return (
          <Swiper
          style={{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }}
          spaceBetween={10}
          slidesPerView={slidesPerView}
          loop = {true}
          navigation={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {tours.map((tour, index) => (
            <SwiperSlide key={index}>
  
              <div className={`destination-card h-[630px] bg-white`}>
                <img src={tour['image']} alt={tour.title} className='h-[400px] w-full'/>
                <h3 className='font-bold text-lg mt-3 mx-5 text-slate-400'>{tour.destination}</h3>
                <h3 className='font-bold text-lg mt-1 mx-5 text-black'>{tour.title}</h3>
                <div className='mx-5 grid grid-cols-2 justify-evenly'>
                  <div className='flex items-center gap-2'>
                    <Rating
                        placeholderRating={Math.round(tour.rating)}
                        emptySymbol={<FaRegStar />}
                        placeholderSymbol={<FaStar/>}
                        fullSymbol={<FaStar/>}
                      />
                      <span>{tour.rating}</span>
                  </div >
                  <div className='flex items-center gap-2'>
                    <FaRegClock />
                    <span>{moment(tour.dueDate).toNow()}</span>
                  </div>
                </div>
                <div className="divider"></div>
                <div className='flex items-center justify-between mx-5'>
                    <span className='text-slate-400'>Starting From</span>
                    <span className='banner_h text-black text-xl font-semibold'>${tour.price}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      );
};

export default FeaturedSlider;