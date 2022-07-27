import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link, Outlet } from 'react-router-dom'
import DashbordField from '../../components/DashbordField'
import DashbordManu from '../../components/DashbordManu'
import UseAuth from '../../Context/UseAuth'

const Dasbord = () => {
  const [dashbordToogle, setdashbordToogle] = useState(false)

  const Toogle = () => {
    setdashbordToogle(!dashbordToogle)
    console.log(dashbordToogle)
  }

  const { user, isAdmin } = UseAuth()

  return (
    <div className="absolute top-0 w-full h-screen overflow-hidden">
      <div className="grid grid-cols-6">
        <div>
          <div
            className={
              dashbordToogle
                ? 'bg-yellow-300 w-full h-screen block'
                : 'bg-yellow-300  h-screen hidden md:block'
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
              {/* { user manu      } */}

              <div>
                <ul className="list-none h-3/4 flex flex-col space-y-2">
                  <Link to={'Order'}>
                    <li className="font-semibold py-1 hover:border-red-800 hover:border-2  bg-slate-900 text-slate-50 rounded-2xl my-2 px-2">
                      Review
                    </li>
                  </Link>
                  <Link to={'RequestForservice'}>
                    <li className="font-semibold py-1 hover:border-red-800 hover:border-2  bg-slate-900 text-slate-50 rounded-2xl my-2 px-2">
                      Request For Service
                    </li>
                  </Link>
                  <Link to={'yourService'}>
                    <li className="font-semibold py-1 bg-slate-900 text-slate-50 rounded-2xl my-2 px-2">
                      Your Services
                    </li>
                  </Link>
                </ul>
              </div>

              {isAdmin && (
                <div>
                  <ul className="list-none h-3/4 flex flex-col space-y-2">
                    <Link to={'Addservice'}>
                      <li className=" font-semibold py-1 bg-slate-900 text-slate-50 rounded-2xl my-2 px-2">
                        Add New Services
                      </li>
                    </Link>

                    <Link to={'makeAdmin'}>
                      <li className="font-semibold py-1 bg-slate-900 text-slate-50 rounded-2xl my-2 px-2">
                        Make An Admin
                      </li>
                    </Link>

                    <Link to={'ServiceList'}>
                      <li className="font-semibold py-1 bg-slate-900 text-slate-50 rounded-2xl my-2 px-2">
                        Service List
                      </li>
                    </Link>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="col-start-2 col-end-7">
          <DashbordField
            Toogle={Toogle}
            istrue={dashbordToogle}
          ></DashbordField>
          <div className="w-full bg-slate-100 h-screen">
            <Outlet className=""></Outlet>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dasbord
