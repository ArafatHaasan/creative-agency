import React from 'react'

const EveryOrderedService = ({ Rservice }) => {
  const { email, name, service, state, details } = Rservice

  return (
    <div className="w-[430px] flex flex-col space-y-2 shadow-2xl m-4 p-3 rounded-xl">
      <div className="flex justify-between items-center">
        <img style={{ width: '30%' }} src={'kd'} alt="service photo" />
        <span className="bg-green-300 p-4 rounded-2xl font-semibold">
          {state}
        </span>
      </div>
      <h1 className="text-xl font-semibold">{service}</h1>
      <p>{details}</p>
    </div>
  )
}

export default EveryOrderedService
