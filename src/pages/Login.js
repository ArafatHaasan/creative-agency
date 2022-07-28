import React from 'react'
import logo from '../assets/logos/logo.png'
import Google from '../assets/google.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Usefirebase from '../hooks/Usefirebase'
import { useState } from 'react'
import UseAuth from '../Context/UseAuth'

const Login = () => {
  const location = useLocation()
  const prevLocation = location?.state?.from || '/'

  const navigate = useNavigate()

  const { GoogleSign, updateUser, setError, OldUser } = UseAuth()

  const [query, setquery] = useState({ email: '', password: '' })

  const setValue = (e) => {
    const name = e.target?.name
    const value = e.target?.value
    setquery({ ...query, [name]: value })
  }

  const Submitform = (e) => {
    e.preventDefault()
    const { email, password } = query
    OldUser(email, password)
      .then((res) => {
        const user = res.user
       
        updateUser(user.displayName)
        setquery({
          email: '',
          password: '',
        })
        navigate(prevLocation)
      })
      .catch((error) => {
        const errorMessage = error.message
        setError(errorMessage)
      })
  }

  const LoginWithGoogle = () => {
    GoogleSign()
      .then((result) => {
        const user = result.user
        updateUser(user.displayName)
        navigate(prevLocation)
        setError('')
      })
      .catch((error) => {
        const errorMessage = error.message
        setError(errorMessage)
      })
  }

  return (
    <div>
      <div className="h-screen w-full flex justify-center items-center ">
        <div className="flex flex-col space-y-8">
          {/* logo  */}
          <div>
            <img
              style={{ width: '40%', margin: 'auto' }}
              src={logo}
              alt="logo"
            />
          </div>

          <div className="rounded py-5 mx-2 md:mx-0 border-2 shadow  md:w-[700px]">
            <h1 className="text-center text-xl md:text-4xl py-3 font-bold">
              Login with
            </h1>
            <input
              className="block my-2 p-2 rounded border-2 border-slate-900 w-5/6 mx-auto"
              type="email"
              placeholder="Your Email"
              name="email"
              value={query.email}
              onChange={setValue}
            />
            <input
              className="block my-2 p-2 rounded border-2 border-slate-900 w-5/6 mx-auto"
              type="password"
              placeholder="Your Password"
              name="password"
              value={query?.password}
              onChange={setValue}
            />
            <div className="w-5/6 mx-auto text-center">
              <button
                type="submit"
                className="bg-gray-900 font-semibold text-white px-3 py-2 rounded"
                onClick={Submitform}
              >
                Login
              </button>
            </div>

            <p className="text-center text-2xl">or</p>
            <div className="border-2 border-slate-900 rounded-full cursor-pointer    w-5/6 mx-auto flex items-center ">
              <img style={{ width: '' }} src={Google} alt="google logo" />
              <input
                className="w-full cursor-pointer  font-semibold"
                type="submit"
                value="Continue with google"
                onClick={LoginWithGoogle}
              />
            </div>
            <div className="w-5/6 mx-auto text-center">
              <h1 className="font-semibold py-1">
                Already have account? <Link to={'/regester'}> Regester </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
