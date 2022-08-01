import React from 'react'
import works1 from '../assets/carousel-1.png'
import works2 from '../assets/carousel-2.png'
import works3 from '../assets/carousel-3.png'
import works4 from '../assets/carousel-4.png'
import works5 from '../assets/carousel-5.png'
import '../index.css'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

const Works = () => {
  return (
    <div className="workBg  py-4 md:py-[100px] flex justify-center  items-center">
      <div className="container mx-auto px-3 md:px-0">
        <h1 className="text-2xl text-center mb-8 font-bold text-slate-50">
          Here are some of our <span className="text-green-500">Works</span>
        </h1>

        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <div className="grid grid-cols-3 gap-4">
              <div className="shadow-md">
                <img src={works1} alt="works" />
              </div>
              <div className="shadow-md">
                <img src={works2} alt="works" />
              </div>
              <div className="shadow-md">
                <img src={works5} alt="works" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="grid grid-cols-3 gap-4">
            <div className="shadow-md">
              <img src={works4} alt="works" />
            </div>
            <div className="shadow-md">
              <img src={works5} alt="works" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* <div className="">
        
      </div>
      <div className="">
        <div className="shadow-md">
          <img src={works3} alt="works" />
        </div>
      </div> */}
    </div>
  )
}

export default Works
