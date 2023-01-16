import React from 'react'
import './index.css'
import {Navbar,Hero,Services,Work,Reviews,Contact, Footer} from './components/Index.js';

const App = () => {
  return (
    <div className='main'>
      <Navbar />
      <Hero />
      <Services />
      <Work/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </div>
   
  )
}

export default App