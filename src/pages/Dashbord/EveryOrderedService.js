import React from 'react'

const EveryOrderedService = ({ Rservice }) => {
  const { email, name, service, image, state, details } = Rservice
  console.log(image)
  console.log(Rservice)

  return (
    <div className="w-[430px] flex flex-col space-y-2 shadow-2xl m-4 p-3 rounded-xl">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold">{service}</h1>
          <p>{details}</p>
        </div>
        <span className="bg-green-300 p-3 rounded font-semibold">{state}</span>
      </div>
    </div>
  )
}

export default EveryOrderedService
