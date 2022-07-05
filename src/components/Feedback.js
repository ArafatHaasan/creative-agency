import React from 'react'
import costomer1 from '../assets/customer-1.png'

const Feedback = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="container mx-auto">
        <div>
          <h2 className="text-center py-4 mb-20 text-3xl font-bold ">
            Our clients <span className="text-green-500">feedback</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="border p-4">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <img
                  className="mr-5"
                  style={{ width: '20%' }}
                  src={costomer1}
                  alt=""
                />
                <div>
                  <h1 className="text-3xl font-bold">name</h1>
                  <h2 className="text-2xl font-semibold">Disignation</h2>
                </div>
              </div>

              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
                  magni rem cupiditate, eum blanditiis voluptatum adipisci
                  molestias, tenetur inventore quos sint quasi veritatis culpa
                  ullam soluta necessitatibus laudantium? Molestias, facere!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback
