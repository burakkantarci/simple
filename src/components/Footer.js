import React from 'react'
import configData from "../config.json";

const Footer = () => {
  return (
    <div className="container mt-36 mb-24 text-light-gray">
      <span className="mr-24">© { new Date().getFullYear() } - {configData.SITENAME}</span>
      <a href={'https://twitter.com/' + configData.TWITTER_USERNAME} className="text-light-gray mr-24" target="_blank" rel="noopener noreferrer">Twitter</a>
      <a href={'https://medium.com/@' + configData.MEDIUM_USERNAME} className="text-light-gray mr-24" target="_blank" rel="noopener noreferrer">Medium</a>
      <a href={'https://linkedin.com/in/' + configData.LINKEDIN_USERNAME} className="text-light-gray mr-24" target="_blank" rel="noopener noreferrer">Linkedin</a>
      <a href={'https://dribbble.com/' + configData.DRIBBBLE_USERNAME} className="text-light-gray mr-24" target="_blank" rel="noopener noreferrer">Dribbble</a>
    </div>
  )
}

export default Footer
