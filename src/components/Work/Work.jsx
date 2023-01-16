import React from 'react'
import './work.css'
import { workHeading} from '../../constants'
import Swipercard from './Swiper'

const Work = () => {
  return (
    <div className='work' id='work'>
    <h1>Our Work</h1>
    <h4>{workHeading}</h4>
    <div className="workCards">
      <Swipercard/>
    </div>
    </div>
  )
}

export default Work