import React from 'react'
import {Link} from 'react-router-dom'
import Hero from '../components/Hero'

const About = () => {
  return (
    <div className="container">
      <Link to="/" className="py-24 is-block">Return to Home</Link>
      <Hero title="About Me" pp="%PUBLIC_URL%/bk-pp.png"/>
      <div className="is-flex">
        <div className="w-1/2">
          <p>
            My journey started by creating a classroom web page in middle school.
            I were a indie-hacker on summer holidays, designing and coding some projects for self-development.              
            Somewhere along my journey I realized that design is integral to all of the experiences while using the digital products and it was something I wanted to focus on. 
            I found myself at Bilkent University, Computer Science. Therefore, I'm a designer with an engineering background.
          </p>
          <p>
            I started working with Nokta during my summer internship. I started as a UI/UX Designer Intern and currently my job has evolved to a full-stack product person :) 
            I work as product manager in our adtech project Empower, where publishers can create contextual videos for their web sites and apps.
            I'm designing and developing web and mobile products in Entertainment, 
            Finance, Food & Drink categories. I designed products ranked Top50 and featured on the App Store and the Google Playstore.
            We have a data-driven team that combines the outputs and experiences with the gut-feeling :) 
          </p>
          <p>
            After my graduation, I co-founded a startup, Seyisco (backed with 2 VC's), 
            where we were creating monitoring and operational dashboards, task management 
            and data visualization tools for municipalities. I focused on designing 
            products and creating brand and marketing strategy for our startup.
          </p>
          <p>
            I love technology all by its meanings, always try to find a way to try new stuff. This is a great way for me to understand new experiences and adapt them to my life.
          </p> 
          <p>
            Feel free to contact me burakkantarci.08@gmail.com 
          </p> 
        </div>
        <div className="w-1/3">
          <small>Personal</small>
          <ul>
            <li><strong>BIRTH:</strong> 1994</li>
            <li><strong>HERITAGE:</strong> Turkish</li>
            <li><strong>EDUCATION:</strong> B.Sc. Bilkent University Computer Science</li>
            <li><strong>INTERESTS:</strong> Design, Sports (Football, Formula 1, Basketball), Minimal Interior Architecture, Books and Movies about future living</li>
          </ul>
          <small>Skills</small>

          <ul>
            <li><strong>UX:</strong> Competitive Analysis, Wireframes, Interactive Prototypes, Usability Testing, Surveying, Data Analysis, Heatmap Analysis</li>
            <li><strong>PROTOTYPING:</strong> Figma, Sketch, Framer, Principle, Balsamiq</li>
            <li><strong>VISUAL:</strong> Photoshop, InDesign, Illustrator</li>
            <li><strong>FRONTEND DEVELOPMENT:</strong> React, HTML / CSS, Javascript, SASS, Vue</li>
            <li><strong>MARKETING:</strong> Branding, Brand Story</li>
          </ul>
        </div>
      </div>
     
    </div>
  )
}

export default About
