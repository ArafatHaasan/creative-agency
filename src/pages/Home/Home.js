import React from 'react'
import Banner from '../../components/Banner'
import CompanyLogo from '../../components/CompanyLogo'
import Contact from '../../components/Contact'
import Feedback from '../../components/Feedback'
import Services from '../../components/Service/Services'
import Works from '../../components/Works'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CompanyLogo></CompanyLogo>
      <Services></Services>
      <Works></Works>
      <Feedback></Feedback>
    </div>
  )
}

export default Home
