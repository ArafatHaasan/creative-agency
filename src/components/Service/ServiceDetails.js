import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import servicepic from '../../assets/carousel-5.png'

const ServiceDetails = () => {
  const { serviceId } = useParams()
  console.log(serviceId)
  const [service, setService] = useState({})

  useEffect(() => {
    fetch(`https://polar-waters-43259.herokuapp.com/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data))
  }, [serviceId])

  return (
    <div className="py-4">
      <div className="mx-auto h-screen shadow-lg flex flex-col  px-2   w-2/4">
        <div className="flex flex-col ">
          <div>
            <img src={servicepic} alt="service" />
            <h1 className="text-xl py-3 font-semibold text-gray-500">
              {service?.title}
            </h1>

            <p className="pb-2">{service.Desc}</p>

            <p className="pb-4">
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              odit minima voluptatibus, eligendi molestiae quasi libero maiores
              possimus tempora dicta quia molestias veniam atque magnam ullam,
              quod ratione corporis reiciendis praesentium repellendus provident
              ea voluptate! Vitae animi sit magni nulla? Reiciendis, excepturi
              consectetur et laboriosam delectus voluptas alias corrupti
              perspiciatis.{' '}
            </p>
            <div>
              <form action="mailto:someone@example.com">
                <button className="bg-slate-900 text-white w-[100px] me-auto py-1 px-2 rounded">
                  Lets chat
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetails
