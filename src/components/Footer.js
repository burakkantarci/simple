import React from 'react'

const Footer = () => {
  return (
    <div className="container mt-24 mb-24 text-light-gray">
      © 2020 - {process.env.REACT_APP_SITENAME}
      <a href={'https://twitter.com/' + process.env.REACT_APP_TWITTER_USERNAME} className="text-light-gray pl-24">Twitter</a>
    </div>
  )
}

export default Footer
