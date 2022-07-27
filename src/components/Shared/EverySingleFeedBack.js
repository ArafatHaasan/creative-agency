import React from 'react'

const EverySingleFeedBack = () => {
  return (
    <div className="border p-4">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center">
          <img className="mr-5" style={{ width: '20%' }} alt="" />
          <div>
            <h1 className="text-3xl font-bold">name</h1>
            <h2 className="text-2xl font-semibold">Disignation</h2>
          </div>
        </div>

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae magni
            rem cupiditate, eum blanditiis voluptatum adipisci molestias,
            tenetur inventore quos sint quasi veritatis culpa ullam soluta
            necessitatibus laudantium? Molestias, facere!
          </p>
        </div>
      </div>
    </div>
  )
}

export default EverySingleFeedBack
