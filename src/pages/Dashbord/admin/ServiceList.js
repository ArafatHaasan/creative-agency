import React, { useEffect } from 'react'
import { useState } from 'react'
import ServiceRow from './ServiceRow'

const ServiceList = () => {
  const [Service, setService] = useState([])

  useEffect(() => {
    fetch('https://polar-waters-43259.herokuapp.com/order')
      .then((res) => res.json())
      .then((data) => setService(data))
  }, [])

  return (
    <div className="p-3">
      <div className="w-[95%] mx-auto p-5  bg-white rounded-xl shadow-lg ">
        <table className="w-full  border-2 p-4  mx-auto table-auto   text-center">
          <thead className="bg-slate-200">
            <tr className="">
              <th>Name</th>
              <th>EmailID</th>
              <th>Service</th>
              <th>Details</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="text-[10px] md:text-[16px] font-semibold ">
            {Service.map((service) => (
              <ServiceRow Rservice={service} key={service._id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ServiceList
