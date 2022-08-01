import React, { useState } from 'react'
import { useEffect } from 'react'
import SingleServices from './SingleServices'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const [Services, setServices] = useState([])

  useEffect(() => {
    fetch('https://polar-waters-43259.herokuapp.com/services')
      .then((res) => res.json())
      .then((data) => setServices(data))
  }, [])

  return (
    <div className=" flex h-screen justify-center items-center py-4">
      <div className="container mx-auto px-3 md:px-0">
        <h1 className="text-center text-4xl font-bold  mb-8">
          We provide best <span className="text-green-500">services</span>{' '}
        </h1>

        <div className="p-4">
          <Slider {...settings}>
            {Services?.map((service) => (
              <SingleServices EveryService={service} key={service?._id} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Services
