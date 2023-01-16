import React from 'react'
import { reviewHeading } from '../../constants'
import './reviews.css';
import { peopleReviews } from '../../constants';
import { doublequotes } from '../../assets';

const Reviews = () => {
  return (
    <div className='work review'>
    <h1>Reviews</h1>
    <h4>{reviewHeading}</h4>
    <div className="reviewcards">


    {peopleReviews.map((review)=>(
        <div className="r_cards" key={review.id}>
        <div class="rc_1">
          <img src={doublequotes} alt=""/>
          {review.content}
        </div>
        <div class="rc_2">
          <img src={review.img} alt="" height="100%" width="100%" />
          {review.name}
        </div>
      </div>
    ))}

    
    </div>
    </div>
  )
}

export default Reviews