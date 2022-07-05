import React from 'react'
import works from '../assets/carousel-1.png'

const Works = () => {
  return (
    <div className="bg-slate-900 h-4/5 py-4 md:py-[100px] flex justify-center items-center">
      <div className="container mx-auto px-3 md:px-0">
        <h1 className="text-2xl text-center mb-8 font-bold text-slate-50">
          Here are some of our <span className="text-green-500">Works</span>
        </h1>
        <div className="grid md:grid-cols-3 gap-3">
          <div className="shadow-md">
            <img src={works} alt="works" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works
