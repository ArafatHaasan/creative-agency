import React, { useState } from 'react'
import { useEffect } from 'react'
import SingleServices from './SingleServices'

const Services = () => {
  const [Services, setServices] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then((res) => res.json())
      .then((data) => setServices(data))
  }, [])

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="container mx-auto px-3 md:px-0">
        <h1 className="text-center text-4xl font-bold  mb-8">
          We provide best <span className="text-green-500">services</span>{' '}
        </h1>
        <div className="grid items md:grid-cols-3 gap-4 ">
          {Services?.map((service) => (
            <SingleServices EveryService={service} key={service?._id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
