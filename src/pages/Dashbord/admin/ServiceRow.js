import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import swal from 'sweetalert'

const ServiceRow = ({ Rservice }) => {
  // const [st, setSt] = useState('')
  // const [id, setId] = useState(null)

  const ValueSetter = (e) => {
    const value = e.target?.value
    const id = e.target?.id

    // useEffect(() => {
    axios
      .put(
        `https://polar-waters-43259.herokuapp.com/order?state=${value}&id=${id}`,
      )
      .then((res) => {
        if (res.data.acknowledged) {
          swal({
            title: 'Great admin!',
            text: 'peacfully change state!',
            icon: 'success',
            button: 'hm.',
          })
        }
      })
    // }, [value, id])
  }

  const { email, name, service, state, details, _id } = Rservice

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{service}</td>
      <td>{details}</td>
      <td>
        {' '}
        <select onChange={ValueSetter} name="state" id={_id}>
          <option value={state}>{state}</option>
          <option value="Pending">Pending</option>
          <option value="Done">Done</option>
        </select>{' '}
      </td>
    </tr>
  )
}

export default ServiceRow
