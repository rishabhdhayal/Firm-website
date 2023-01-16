import React from 'react'
import './contact.css'
import { contactimg } from '../../assets'

const Contact = () => {
    return (
        <div className="fifth_page" id='contact'>
            <div className=" work">
                <h1>CONTACT US</h1>
                <h4>We love to work with you for that contact us.</h4>
            </div>
            <div className='fp_contact'>
                <div className='fp_1'>
                    <div className="fp_img"><img src={contactimg} alt="" /></div>
                </div >
                <div className='fp_2'>
                    <form action="">
                        <input type="text" placeholder="Name" required/>
                        <input type="email" name="" id="" placeholder="Email" required/>
                        <input type="text" placeholder="Budget Size" required/>
                        <textarea name="" id="" cols="30" rows="7" placeholder="Description of project" required></textarea>
                        <button type="submit">Submit</button>
                    </form></div>
            </div>
        </div>
    )
}

export default Contact