import React from 'react'
import services1 from '../../assets/icons/service1.png'

const Services = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="container mx-auto px-3 md:px-0">
        <h1 className="text-center text-4xl font-bold  mb-8">
          We provide best <span className="text-green-500">services</span>{' '}
        </h1>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center shadow-2xl p-4 ">
            <img
              style={{ width: '20%', margin: 'auto' }}
              src={services1}
              alt="services"
            />
            <h2 className="text-2xl font-bold ">Header</h2>
            <p>
              {' '}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
              iusto qui labore. Repellendus quos libero qui ducimus ut!
              Suscipit, nemo exercitationem. Possimus est odio, dolorum omnis
              nam repellat perspiciatis voluptatibus.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
