import axios from 'axios'
import React, { useState } from 'react'
import swal from 'sweetalert'

const RequsetForService = () => {
  const [query, setquery] = useState({
    name: '',
    email: '',
    service: '',
    details: '',
    state: 'requested',
  })

  const ValueChanger = (e) => {
    const name = e.target.name
    const value = e.target.value
    setquery({ ...query, [name]: value })
  }

  const Submitform = (e) => {
    e.preventDefault()

    axios.post('http://localhost:5000/order', query).then((res) => {
      if (res.data.acknowledged) {
        swal({
          title: 'Good job!',
          text: 'You clicked the button!',
          icon: 'success',
          button: 'Aww yiss!',
        })
        setquery({
          name: '',
          email: '',
          service: '',
          details: '',
          state: '',
        })
      }
    })
  }

  return (
    <div>
      <div className="p-6 max-w-[500px]">
        <form onSubmit={Submitform}>
          <input
            value={query.name}
            className="my-2 p-2 block border-2 w-full  rounded"
            type="text"
            name="name"
            placeholder="Your Name / Company's Name "
            onChange={ValueChanger}
          />
          <input
            value={query.email}
            className="my-2 block w-full p-2 border-2  rounded"
            type="email"
            placeholder="Your email address"
            onChange={ValueChanger}
            name="email"
          />
          <input
            className="my-2 block w-full p-2 border-2  rounded"
            type="Text"
            name="service"
            value={query.service}
            placeholder="Graphic Design"
            onChange={ValueChanger}
          />
          <textarea
            className="my-2 w-full p-2 block border-2  rounded"
            name="details"
            value={query.details}
            id=""
            cols="50"
            rows="10"
            placeholder="Project Details"
            onChange={ValueChanger}
          ></textarea>
          <input
            className="bg-slate-900 cursor-pointer text-white px-5 py-2 rounded-md"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  )
}

export default RequsetForService
