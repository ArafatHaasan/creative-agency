import React from 'react'
import { HiMenu } from 'react-icons/hi'

import user from '../assets/customer-2.png'
const DashbordField = ({ Toogle, istrue }) => {
  return (
    <div>
      <div className="h-[74px] w-full flex items-center justify-between border-b-2 border-gray-900  bg-yellow-300">
        <div className="flex justify-between w-full container items-center">
          <div className="flex px-2 items-center justify-evenly">
            {!istrue && (
              <HiMenu
                onClick={Toogle}
                className="block md:hidden"
                size={25}
              ></HiMenu>
            )}

            <h1 className="ml-5 text-xl font-semibold">Title</h1>
          </div>

          <div className="flex justify-end items-center">
            <h1 className="text-xl font-semibold">Name</h1>
            <img
              style={{ width: '20%', marginLeft: '10px' }}
              src={user}
              className="rounded-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashbordField
