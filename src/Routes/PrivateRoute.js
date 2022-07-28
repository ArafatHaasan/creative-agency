import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import Loading from '../components/Shared/Loading'
import UseAuth from '../Context/UseAuth'

const PrivateRoute = ({ children }) => {
  const location = useLocation()
  //   const user = { email: null }
  const { user, loading } = UseAuth()

  if (loading) {
    return <Loading></Loading>
  }
  return (
    <>
      {user?.email ? (
        children
      ) : (
        <Navigate to={'/login'} state={{ from: location }}></Navigate>
      )}
    </>
  )
}

export default PrivateRoute
