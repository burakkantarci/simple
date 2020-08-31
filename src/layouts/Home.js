import React from 'react'

import Hero from '../components/Hero'
import Medium from '../components/Medium'
import Dribbble from '../components/Dribbble'

const Home = () => {
  return (
    <div className="container">
      <Hero title="Hi, I'm Burak!"
            subtitle="I’m a maker–of–software living in Ankara with a passion for design, technology and sports. This is a wiki of my professional life."
            ctaAbout="More About Me"
            ctaLinkedIn="See my LinkedIn"    
      />
      <Medium></Medium>
      <Dribbble></Dribbble>
    </div>
  )
}

export default Home
