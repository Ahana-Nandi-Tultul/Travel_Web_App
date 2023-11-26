import React, { useEffect, useState } from 'react';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const DestinationSlider = ({destinations}) => {
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
        {destinations.map((destination, index) => (
          <SwiperSlide key={index}>

            <div className={`destination-card h-[500px] ${(index % 2) == 0 ? "" : "mt-10"}`}>
              <img src={destination['front-image']} alt={destination.name} className='h-[400px] w-full'/>
              <h3 className='font-bold text-lg mt-3 mx-5 text-black'>{destination.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
};

export default DestinationSlider;