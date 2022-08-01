import axios from 'axios'
import React, { useState } from 'react'
import swal from 'sweetalert'

const RequsetForService = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [service, setService] = useState('')
  const [details, setDetails] = useState('')
  const [state, setState] = useState('requested')
  const [image, setImage] = useState(null)

  // const [query, setquery] = useState({
  //   name: '',
  //   email: '',
  //   service: '',
  //   details: '',
  //   state: 'requested',
  // })

  const formData = new FormData()
  formData.append('name', name)
  formData.append('email', email)
  formData.append('service', service)
  formData.append('details', details)
  formData.append('state', state)
  formData.append('image', image)

  // const ValueChanger = (e) => {
  //   const name = e.target.name
  //   const value = e.target.value
  //   setquery({ ...query, [name]: value })
  // }

  const Submitform = (e) => {
    e.preventDefault()
    console.log(formData)
    axios
      .post('https://polar-waters-43259.herokuapp.com/order', formData)
      .then((res) => {
        if (res.data.acknowledged) {
          swal({
            title: 'Good job!',
            text: 'You clicked the button!',
            icon: 'success',
            button: 'Aww yiss!',
          })

          document.getElementById('image').value = ''
          document.getElementById('name').value = ''
          document.getElementById('email').value = ''
          document.getElementById('details').value = ''
          document.getElementById('service').value = ''
        }
      })
  }

  return (
    <div>
      <div className="p-6 max-w-[500px]">
        <form onSubmit={Submitform}>
          <input
            id="name"
            className="my-2 p-2 block border-2 w-full  rounded"
            type="text"
            name="name"
            placeholder="Your Name / Company's Name "
            onChange={(e) => setName(e.target.value)}
          />
          <input
            id="email"
            className="my-2 block w-full p-2 border-2  rounded"
            type="email"
            placeholder="Your email address"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
          <input
            id="service"
            className="my-2 block w-full p-2 border-2  rounded"
            type="Text"
            name="service"
            placeholder="Graphic Design"
            onChange={(e) => setService(e.target.value)}
          />
          <textarea
            className="my-2 w-full p-2 block border-2  rounded"
            name="details"
            id="details"
            cols="50"
            rows="10"
            placeholder="Project Details"
            onChange={(e) => setDetails(e.target.value)}
          ></textarea>

          <input
            id="image"
            className="my-2 w-full p-2 block border-2 bg-white rounded"
            type="file"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
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
