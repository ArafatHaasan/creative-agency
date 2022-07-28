import Footer from './components/Shared/Footer'
import Navbar from './components/Shared/Navbar'
import Home from './pages/Home/Home'
import Dashbord from './pages/Dashbord/Dasbord'
import { Routes, Route } from 'react-router-dom'
import Review from './pages/Dashbord/Review'
import OrderedService from './pages/Dashbord/OrderedService'
import MakeAdmin from './pages/Dashbord/admin/MakeAdmin'
import ServiceList from './pages/Dashbord/admin/ServiceList'
import AddService from './pages/Dashbord/admin/AddService'
import Regester from './pages/Regester'
import Login from './pages/Login'
import RequsetForService from './pages/Dashbord/RequsetForService'
import PrivateRoute from './Routes/PrivateRoute'
import ServiceDetails from './components/Service/ServiceDetails'
import AuthProvider, { Auth } from './Context/AuthProvider'
function App() {
  return (
    <AuthProvider>
      <Navbar></Navbar>
      <Routes>
        {/* <Route path=':serviceId'   element={ <PrivateRoute>  </PrivateRoute> } ></Route> */}
        <Route path="/" element={<Home />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="/home/:serviceId" element={<ServiceDetails />}></Route>

        <Route
          path="dashbord"
          element={
            <PrivateRoute>
              <Dashbord />
            </PrivateRoute>
          }
        >
          <Route path="/dashbord" element={<Review />}></Route>
          <Route path="Order" element={<Review />}></Route>
          <Route path="Addservice" element={<AddService />}></Route>
          <Route path="yourService" element={<OrderedService />}></Route>
          <Route path="makeAdmin" element={<MakeAdmin />}></Route>
          <Route
            path="RequestForservice"
            element={<RequsetForService />}
          ></Route>
          <Route path="servicelist" element={<ServiceList />}></Route>
        </Route>
        <Route path="regester" element={<Regester />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
      <Footer></Footer>
    </AuthProvider>
  )
}

export default App
