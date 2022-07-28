import React, { useEffect } from 'react'
import { useState } from 'react'
import costomer1 from '../assets/customer-1.png'
import EverySingleFeedBack from './Shared/EverySingleFeedBack'

const Feedback = () => {
  const [feedBack, setfeedBack] = useState([])

  useEffect(() => {
    fetch('https://polar-waters-43259.herokuapp.com/review')
      .then((res) => res.json())
      .then((data) => setfeedBack(data))
  }, [])

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="container mx-auto">
        <div>
          <h2 className="text-center py-4 mb-20 text-3xl font-bold ">
            Our clients <span className="text-green-500">feedback</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {feedBack?.map((feedback) => (
            <EverySingleFeedBack key={feedback._id} feedback={feedback} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Feedback
