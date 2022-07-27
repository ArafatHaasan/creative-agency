import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import UseAuth from '../Context/UseAuth'

const DashbordManu = ({ Toogle, istrue }) => {
  return (
    <div>
      <div
        className={
          istrue
            ? 'bg-yellow-300 w-full h-screen block'
            : 'bg-yellow-300 w-[250px] h-screen hidden md:block'
        }
      >
        <div className="h-[74px] flex justify-between border-b-2 border-stone-800">
          <h1 className="py-4 px-2.5 text-2xl md:text-4xl font-bold">
            Dashbord
          </h1>
          <FaTimes
            onClick={Toogle}
            className="p-2 block md:hidden"
            size={40}
          ></FaTimes>
        </div>
        <div className="px-2">
          {/* user manu       */}
          <div>
            <ul className="list-none h-3/4 flex flex-col space-y-2">
              <li className="py-2 font-bold text-xl md:text-2xl bg-slate-900 text-slate-50 rounded-md my-2 px-2">
                Order
              </li>
              <li className="py-2 font-bold text-xl md:text-2xl bg-slate-900 text-slate-50 rounded-md my-2 px-2">
                Review
              </li>
              <li className="py-2 font-bold text-xl md:text-2xl bg-slate-900 text-slate-50 rounded-md my-2 px-2">
                Services
              </li>
            </ul>
          </div>

          {/* admin manu  */}

          <div>
            <ul className="list-none h-3/4 flex flex-col space-y-2">
              <li className="py-2 font-bold text-xl md:text-2xl bg-slate-900 text-slate-50 rounded-md my-2 px-2">
                Add services
              </li>
              <li className="py-2 font-bold text-xl md:text-2xl bg-slate-900 text-slate-50 rounded-md my-2 px-2">
                Make admin
              </li>
              <li className="py-2 font-bold text-xl md:text-2xl bg-slate-900 text-slate-50 rounded-md my-2 px-2">
                services
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashbordManu
