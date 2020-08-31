import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import _ from 'lodash';
import Moment from 'react-moment';


function Dribbble(props) {

  const [shots, setShots] = useState([]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {

    const fetchData = async () => {
      await axios.get(
        'https://api.dribbble.com/v2/user/shots?access_token=f0341f09921dcbf35e3f5b50faacd3fe01c9052fb1396e6037dd49df0f0fde59',
      )
      .then(response => {
        setShots(response.data);
        console.log(response.data)
      })
      .catch(err => {
        console.log(err);
      });
    };
 
    fetchData();
   
  }, []);

  return (
    <div className="mt-16">
      <h3 className="left">Featured Dribbble Shots</h3>
      <a className="right text-light-gray mt-16 m-btn" href="https://dribbble.com/burak kantarci">See All on Dribbble »</a>
      <div className="clear"></div>
      <div className="is-flex">
        {
          _.map(shots, (shot,i) => {
            return <a href={shot.html_url} className="w-1/3 shadow-lg border-radius-8 mb-24 transition-ease transition-scale" key={i}>
                    <div className="shot-thumbnail">
                      <img src={shot.images.normal} alt={shot.title} className="border-top-left-radius-8 border-top-right-radius-8" width="100%" />
                    </div>
                    <h3 className="px-16 text-gray">{shot.title}</h3>
                    <small className="px-16 text-light-gray mb-24 is-block"><Moment format="MMMM DD YYYY" date={shot.published_at} /></small>
                  </a>
          })
        }
      </div>
    </div>
  );
}

export default Dribbble;