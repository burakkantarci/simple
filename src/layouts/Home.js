import React from 'react'
import { Link } from "react-router-dom";

import Hero from '../components/Hero'

const Home = () => {
  return (
    <div className="container">
      <Hero 
            ctaLinkedIn="See my LinkedIn"    
            ctaCV="See my Resume"    
            ctaProjects="Projects"    
      />
      <div className="mt-36 border-bottom-dash pb-24 ">
        <h2 className="pt-24">What am I working on?</h2>
        <p>My current goal at <a href="https://thundra.io">Thundra</a> as Product Manager is to ease developers’ daily life and make their workflows more errorless and enjoyable.</p>
        <a className="is-inline mt-8" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=9LoTA0xd-m0">TestJS Summit 2021 - Lightning Talk</a>
        <a className="is-inline mt-8" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=u82DRPbhPYc">Watch me introducing Thundra Sidekick to ProductHunters.</a>
        <a className="is-inline mt-8" target="_blank" rel="noopener noreferrer" href="https://youtu.be/d_GJVcLGA_U?t=1072">Webinar: The Non-Intrusive Debugging on Modern Architectures</a>
      </div>
      <div className="mt-36 border-bottom-dash pb-24">
        <h2>Past Projects</h2>
        <p>I have 5+ years of experience in shipping digital products. <Link to="/projects">See the list of the things I've ever made and contributed.</Link></p>
      </div>
      <div className="mt-36">
        <h2>Get in Touch</h2>
        <p>Best ways to get in touch are on Twitter at <a href="https://twitter.com/kantarci" target="_blank" rel="noopener noreferrer">@Kantarci</a> or via email at <a href="mailto:burakkantarci.08@gmail.com">burakkantarci.08@gmail.com</a>.</p>
      </div>
    </div>
  )
}

export default Home
