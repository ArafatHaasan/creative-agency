import axios from 'axios'
import React, { useState } from 'react'
import swal from 'sweetalert'

const MakeAdmin = () => {
  const [Query, setQuery] = useState({ email: '' })

  const valueSeter = (e) => {
    const name = e.target.name
    const value = e.target.value
    setQuery({ ...Query, [name]: value })
  }

  const formSubmit = (e) => {
    e.preventDefault()

    axios
      .put('https://polar-waters-43259.herokuapp.com/users', Query)
      .then((res) => {
        res.data.acknowledged &&
          swal({
            title: 'Good!',
            text: 'You successfully made an admin!',
            icon: 'success',
            button: 'hm.',
          })

        setQuery({ email: '' })
      })
  }

  return (
    <div className="p-3">
      <div className="max-w-[95%] mx-auto">
        <div className="grid grid-cols-2 mb-2  shadow-md rounded-2xl p-5 bg-white gap-12">
          <form onSubmit={formSubmit}>
            <label className="text-xl font-semibold" htmlFor="email">
              Email
            </label>
            <input
              value={Query.email}
              name="email"
              onChange={valueSeter}
              className="my-2 p-2 block border-2 w-full  rounded"
              type="email"
              placeholder="Email"
            />

            <button
              type="submit"
              className="px-5 py-1 block ml-auto font-semibold bg-green-800 text-white rounded-md"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default MakeAdmin
