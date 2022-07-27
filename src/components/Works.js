import React from 'react'
import works1 from '../assets/carousel-1.png'
import works2 from '../assets/carousel-2.png'
import works3 from '../assets/carousel-5.png'

const Works = () => {
  return (
    <div className="bg-slate-900 h-4/5 py-4 md:py-[100px] flex justify-center items-center">
      <div className="container mx-auto px-3 md:px-0">
        <h1 className="text-2xl text-center mb-8 font-bold text-slate-50">
          Here are some of our <span className="text-green-500">Works</span>
        </h1>

        <div className="grid md:grid-cols-3 gap-3">
          <div className="">
            <div className="shadow-md">
              <img src={works1} alt="works" />
            </div>
          </div>
          <div className="">
            <div className="shadow-md">
              <img src={works2} alt="works" />
            </div>
          </div>
          <div className="">
            <div className="shadow-md">
              <img src={works3} alt="works" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works
