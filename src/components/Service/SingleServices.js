import React from 'react'
import { Link } from 'react-router-dom'
import services1 from '../../assets/icons/service1.png'

const SingleServices = ({ EveryService }) => {
  const { picture, Desc, title, _id } = EveryService

  return (
    <div className="text-center shadow-2xl p-4 rounded-md cursor-pointer ">
      <div className="flex flex-col space-y-4 ">
        <img
          style={{ width: '20%', margin: 'auto' }}
          src={`data:image/jpeg;base64,${picture}`}
          alt="services"
        />
        <h2 className="text-2xl font-bold ">{title}</h2>
        <p>{Desc}</p>
        <button className="px-4 py-2 w-42 m-auto bg-slate-700 font-semibold text-white rounded">
          <Link to={`home/${_id}`}> Explore More </Link>
        </button>
      </div>
    </div>
  )
}

export default SingleServices
