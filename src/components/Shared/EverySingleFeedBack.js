import React from 'react'
import picture from '../../assets/placeholder.jpg'
const EverySingleFeedBack = ({ feedback }) => {
  const { name, Message, designation } = feedback

  return (
    <div className="border p-4">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center">
          <img
            className="mr-5 rounded-full"
            src={picture}
            style={{ width: '20%' }}
            alt=""
          />
          <div>
            <h1 className="text-3xl font-bold">{name}</h1>
            <h2 className="text-md text-gray-400 font-semibold">
              {designation}
            </h2>
          </div>
        </div>

        <div>
          <p>{Message}</p>
        </div>
      </div>
    </div>
  )
}

export default EverySingleFeedBack
