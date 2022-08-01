import React, { useEffect, useState } from 'react'
import Service1 from '../../assets/icons/service1.png'





import EveryOrderedService from './EveryOrderedService'
const OrderedService = () => {
  const [Service, setService] = useState([])

  useEffect(() => {
    fetch('https://polar-waters-43259.herokuapp.com/order')
      .then((res) => res.json())
      .then((data) => setService(data))
  }, [])

  return (
    <div>
      <div className="flex flex-wrap">
        {Service.map((service) => (
          <EveryOrderedService key={service._id} Rservice={service} />
        ))}
      </div>
    </div>
  )
}

export default OrderedService
