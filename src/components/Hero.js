import React from 'react';
import { Link } from "react-router-dom";


function Hero(props) {
  return (
    <>
      {props.pp ? <img src={props.pp} className="mt-24 mr-24 left" width="128" alt="pp" /> : null}
      <h1 className="hero-title">{props.title}</h1>
      {props.subtitle ? <h2 className="hero-subtitle">{props.subtitle}</h2> : null}
      <div className="mt-16">
        <Link to="/about" className="btn-lg pr-24 mr-8" href="#">{props.ctaAbout ? props.ctaAbout + "»" : null}</Link>
        <a className="btn-lg px-24 mr-8" href={'https://linkedin.com/in/' + process.env.REACT_APP_LINKEDIN_USERNAME}>{props.ctaLinkedIn ? props.ctaLinkedIn + "»" : null}</a>
        <Link to="/projects" className="btn-lg px-24 mr-8" href="#">{props.ctaProjects ? props.ctaProjects + "»" : null}</Link>
      </div>
      <div className="clear"></div>
    </>
  );
}

export default Hero;