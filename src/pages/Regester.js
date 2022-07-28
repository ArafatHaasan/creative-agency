import React from 'react'
import logo from '../assets/logos/logo.png'
import Google from '../assets/google.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Usefirebase from '../hooks/Usefirebase'
import UseAuth from '../Context/UseAuth'

const Regester = () => {
  const location = useLocation()
  const prevLocation = location?.state?.from || '/'
  console.log(prevLocation)
  const navigate = useNavigate()

  const { newUserlogin, GoogleSign, setUser, setError, updateUser } = UseAuth()

  const [query, setquery] = useState({
    displayName: '',
    email: '',
    password: '',
  })

  const LoginWithGoogle = () => {
    GoogleSign()
      .then((result) => {
        const user = result.user
        console.log(user)
        updateUser(user.displayName)
        navigate(prevLocation)
      })
      .catch((error) => {
        const errorMessage = error.message
        setError(errorMessage)
      })
  }

  const setValue = (e) => {
    const name = e.target?.name
    const value = e.target?.value

    setquery({ ...query, [name]: value })
  }

  // loginmethod
  const SubmitForm = (e) => {
    e.preventDefault()

    const { email, password, displayName } = query
    console.log(email, password, displayName)
    newUserlogin(email, password)
      .then((result) => {
        // setUser(result)
        updateUser(displayName)

        setquery({ displayName: '', email: '', password: '' })
        navigate(prevLocation)
      })

      .catch((error) => {
        const errorMessage = error.message
        setError(errorMessage)
      })
  }

  return (
    <div className="h-screen w-full flex justify-center items-center ">
      <div className="flex flex-col space-y-8">
        {/* logo  */}
        <div>
          <img style={{ width: '40%', margin: 'auto' }} src={logo} alt="logo" />
        </div>

        <div className="rounded mx-2 md:mx-0 border-2 py-5 md:w-[700px] ">
          <h1 className="text-center  text-xl md:text-4xl py-3 font-bold">
            Regester with
          </h1>
          <input
            className="block my-2 p-2 border-2 rounded w-5/6 mx-auto"
            type="text"
            placeholder="Your Name"
            onChange={setValue}
            name="displayName"
            value={query?.displayName}
          />
          <input
            className="block my-2 p-2 rounded border-2 w-5/6 mx-auto"
            type="text"
            placeholder="Your Email"
            name="email"
            value={query.email}
            onChange={setValue}
          />
          <input
            className="block my-2 p-2 rounded border-2 w-5/6 mx-auto"
            type="password"
            placeholder="Password"
            name="password"
            value={query.password}
            onChange={setValue}
          />
          <div className="w-5/6 mx-auto text-center">
            <button
              className="bg-gray-900 text-white py-2 px-2 font-semibold rounded"
              onClick={SubmitForm}
            >
              Regester
            </button>
          </div>

          <p className="text-center text-2xl">or</p>
          <div
            onClick={LoginWithGoogle}
            className="border-2 rounded-full cursor-pointer  w-5/6 mx-auto flex items-center "
          >
            <img style={{ width: '10%' }} src={Google} alt="google logo" />
            <input
              className="w-full cursor-pointer  font-semibold"
              type="submit"
              value="Continue with google"
            />
          </div>
          <div className="w-5/6 mx-auto text-center">
            <h1 className="font-semibold py-1">
              Dont't have account?{' '}
              <Link className=" cursor-pointer" to={'/login'}>
                {' '}
                Please login
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Regester
