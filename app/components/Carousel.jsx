'use client';

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
import reviews from '../reviews';
import Image from 'next/image';

export default function App() {
  return (
    <>
      <Swiper 
        navigation={true} 
        loop={true} 
        modules={[Autoplay, Navigation, EffectCreative]} 
        effect="creative" 
        creativeEffect={{
          prev: {
            // shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper">
        {
          reviews.map((item) => (
            <>
              <SwiperSlide key={item.id} className="">
                <div className="">
                  <div className="w-full h-full grid justify-center content-center space-y-2 text-center justify-items-center">
                  <Image
                    src={"/google.png"}
                    alt="Google"
                    width={50}
                    height={50}
                    className="w-20 md:w-auto"
                  />
                  <p className="text-xs md:text-[.7rem] font-medium">REVIEWS</p>
                  <h3 className="text-2xl md:text-3xl font-semibold">Our Clients Say</h3>
                  <p className="font-black md:text-xl w-3/4">{item.reviews}</p>
                  <p className="text-[.8rem]">- &nbsp;{item.name}</p>
                  </div>

                  <button className="border border-black px-5 py-3 text-xs mt-10">READ REVIEWS</button>
                </div>
              </SwiperSlide>
            </>
          ))
        }
      </Swiper>
    </>
  );
}
