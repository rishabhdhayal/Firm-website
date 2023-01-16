import React from 'react'
import './Services.sass'
import { serviceHeading } from '../../constants'
import Servicecard from '../ServiceCard/Servicecard'

const Services = () => {

  return (
    <div className='services' id='services'>
      <h1>Our Services</h1>
      <h4>{serviceHeading}</h4>
      <Servicecard className="mainservice"/>
    </div>
  )
}

export default Services