import axios from 'axios'
import React, { useState } from 'react'
import swal from 'sweetalert'

const AddService = () => {
  const [Title, setTitle] = useState('')
  const [Description, setDescription] = useState('')
  const [Images, setImages] = useState(null)

  const Formdate = new FormData()

  Formdate.append('title', Title)
  Formdate.append('Desc', Description)
  Formdate.append('images', Images)

  const formSubmit = (e) => {
    e.preventDefault()

    axios
      .post('https://polar-waters-43259.herokuapp.com/services', Formdate)
      .then((res) => {
        if (res.data.acknowledged) {
          swal({
            title: 'Good job!',
            text: 'You clicked the button!',
            icon: 'success',
            button: 'Aww yiss!',
          })
        }
      })

    document.getElementById('titleInput').value = ''
    document.getElementById('Descinput').value = ''
    document.getElementById('fileinput').value = ''
  }

  return (
    <div className="p-3">
      <div className="max-w-[95%] mx-auto ">
        <div className="grid grid-cols-2 mb-2  shadow-md rounded-2xl p-5 bg-white gap-12">
          <div>
            <label className="text-xl font-semibold" htmlFor="title">
              Title
            </label>
            <input
              id="titleInput"
              className="my-2 p-2 block border-2 w-full  rounded"
              type="text"
              placeholder="Product Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <label className="text-xl font-semibold " htmlFor="desc">
              Description
            </label>
            <textarea
              id="Descinput"
              className="my-2 p-2 block border-2 w-full  rounded"
              type="text"
              placeholder="Your Name"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <label className="text-xl font-semibold" htmlFor="icon">
              Icon
            </label>
            <input
              className="my-2 px-2 py-1 block  bg-green-50 border-2 w-fit  rounded"
              type="file"
              name="file"
              id="fileinput"
              placeholder="Your Name"
              onChange={(e) => setImages(e.target.files[0])}
            />
          </div>
        </div>
        <div className="">
          <button
            onClick={formSubmit}
            className="px-5 py-1 block ml-auto font-semibold bg-green-800 text-white rounded-md"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddService
