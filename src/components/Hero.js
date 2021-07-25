import React from 'react';
import { Link } from "react-router-dom";
import configData from "../config.json";


function Hero(props) {
  return (
    <>
      {props.pp ? <img src={props.pp} className="mt-24 mr-24 left" width="128" alt="pp" /> : null}
      <h1 className="hero-title">{configData.TITLE}</h1>
      {configData.SUBTITLE ? <h2 className="hero-subtitle">{configData.SUBTITLE}</h2> : null}
      <div className="mt-24">
        <a className="mr-24" target="_blank" rel="noopener noreferrer" href={'https://linkedin.com/in/' + configData.LINKEDIN_USERNAME}>{props.ctaLinkedIn ? props.ctaLinkedIn + " »" : null}</a>
        <a className="mr-24" target="_blank" rel="noopener noreferrer" href={configData.CV_URL}>{props.ctaCV ? props.ctaCV + " »" : null}</a>
        <Link to="/projects" className="mr-24" href="#">{props.ctaProjects ? props.ctaProjects + " »" : null}</Link>
      </div>
      <div className="clear"></div>
    </>
  );
}

export default Hero;