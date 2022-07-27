import { useState, useEffect } from 'react'
import firebaseinit from '../firebase/firebaseInit'
import axios from 'axios'

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  updateProfile,
  signInWithPopup,
} from 'firebase/auth'

firebaseinit()

const Usefirebase = () => {
  const [user, setUser] = useState({})
  const [error, setError] = useState('')
  const Googleprovider = new GoogleAuthProvider()
  const [loading, setLoading] = useState(true)
  const auth = getAuth()
  const [isAdmin, setIsAdmin] = useState(null)

  // create account
  const newUserlogin = (email, password) => {
    // setLoading(false)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // signin func
  const OldUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  // update user info
  const updateUser = (name) => {
    setLoading(true)
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        setUser(auth.currentUser)
        setLoading(false)
        saveUser(auth.currentUser?.displayName, auth.currentUser?.email)
      })
      .catch((error) => {
        setError(error.message)
      })
  }

  // googleSign

  const GoogleSign = () => {
    return signInWithPopup(auth, Googleprovider)
  }

  //  ---Observer----
  useEffect(() => {
    setLoading(true)
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        setLoading(false)
      } else {
        setUser({})
        setLoading(false)
      }
    })
  }, [auth])

  // save user in database
  const saveUser = (name, email) => {
    const user = { name, email }
    axios
      .post('http://localhost:5000/users', user)
      .then((res) => console.log(res.data))
      .catch((error) => setError(error.message))
  }

  //  admin cheacker

  useEffect(() => {
    axios.get(`http://localhost:5000/users/${user?.email}`).then((res) => {
      if (res?.data?.role === 'admin') {
        setIsAdmin(true)
      }
    })
  }, [user])

  // logOut func
  const Logout = () => {
    signOut(auth)
      .then(() => {
        setUser({})
        setError('')
      })
      .catch((error) => {
        setError(error.message)
      })
  }

  return {
    Logout,
    updateUser,
    error,
    OldUser,
    user,
    setUser,
    setError,
    GoogleSign,
    newUserlogin,
    isAdmin,
    setLoading,
    loading,
  }
}

export default Usefirebase
