import React from 'react'
import Logo1 from '../assets/logos/google.png'
import Logo2 from '../assets/logos/airbnb.png'
import Logo3 from '../assets/logos/netflix.png'
import Logo4 from '../assets/logos/slack.png'
import Logo5 from '../assets/logos/uber.png'
const CompanyLogo = () => {
  return (
    <div>
      <div className="container mx-auto py-5 px-4 md:px-0">
        <div className="grid grid-cols-5 gap-2">
          <div>
            <img style={{ width: '50%' }} src={Logo1} alt="logo" />
          </div>
          <div>
            <img style={{ width: '50%' }} src={Logo2} alt="logo" />
          </div>
          <div>
            <img style={{ width: '50%' }} src={Logo3} alt="logo" />
          </div>
          <div>
            <img style={{ width: '50%' }} src={Logo4} alt="logo" />
          </div>
          <div>
            <img style={{ width: '50%' }} src={Logo5} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyLogo
