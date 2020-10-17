import React from 'react'

import Hero from '../components/Hero'
import Medium from '../components/Medium'
import Dribbble from '../components/Dribbble'

const Home = () => {
  return (
    <div className="container">
      <Hero title={process.env.REACT_APP_HERO_TITLE}
            subtitle={process.env.REACT_APP_HERO_DESC}
            ctaAbout="More About Me"
            ctaLinkedIn="See my LinkedIn"    
      />
      <Medium></Medium>
      <Dribbble></Dribbble>
    </div>
  )
}

export default Home
