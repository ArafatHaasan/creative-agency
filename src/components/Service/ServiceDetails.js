import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Service from '../Service/Services'

const ServiceDetails = () => {
  const { serviceId } = useParams()
  console.log(serviceId)

  const [service, setService] = useState({})

  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data))
  }, [serviceId])

  return (
    <div>
      <div className="mx-auto h-screen flex justify-center items-center w-2/4">
        <div className="flex space-x-5 p-5 items-center">
          <div>
            <img src="" alt="" />
            <h1>title</h1>
          </div>

          <div>
            <p>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
              commodi, autem, quis pariatur corporis adipisci id repellat sunt
              ab totam provident dicta, impedit quidem molestias iusto assumenda
              inventore accusamus atque consequuntur voluptate consequatur
              tenetur at? Omnis nulla vero nostrum.{' '}
            </p>
            <div>
              <form action="mailto:someone@example.com">
                <button className="bg-slate-900 text-white w-[100px] me-auto py-1 px-2 rounded">
                  Lets chat
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetails
