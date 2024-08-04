'use client'
// import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import '';

// import required modules
import { Navigation } from 'swiper/modules';
import vase from '../vases';
import Image from 'next/image';

export default function ProductSwipe() {
  return (
    <>
      <Swiper
        modules={[Navigation]} 
        slidesPerView={5}
        spaceBetween={5}
        navigation={true} 
        // loop={true} 
        // effect="creative" 
        // creativeEffect={{
        //   prev: {
        //     // shadow: true,
        //     translate: [0, 0, -400],
        //   },
        //   next: {
        //     translate: ['100%', 0, 0],
        //   }}}
        className="mySwiper"
      >

        {
          vase.map((vase) => (
              <>
                <SwiperSlide key={vase.id} className="p-2 w-4">
                    <Image
                        src={vase.name}
                        alt={vase.alt}
                        height={420}
                        width={500}
                    />
                </SwiperSlide>
              </>
          ))
        }
      </Swiper>
    </>
  );
}
