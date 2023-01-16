import React from 'react'
import { ServiceCards } from '../../constants'
import './servicecards.css'

const ServiceCard = () => (
  <section className='servicecardsection'>
    {ServiceCards.map((service)=>(
        <div key={service.id} className="servicecards" >
          {/* <img src={service.img} alt="" /> */}
            <p>{service.title}</p>
        </div>
    ))}
  </section>
)

export default ServiceCard