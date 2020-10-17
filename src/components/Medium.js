import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import _ from 'lodash';
import Moment from 'react-moment';

console.log()


function Medium(props) {

  const [posts, setPosts] = useState({});

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {

    const fetchData = async () => {
      await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@' + process.env.REACT_APP_MEDIUM_USERNAME)
      .then(response => {
        setPosts(response.data.items);
      })
      .catch(err => {
        console.log(err);
      });
    };
 
    fetchData();
   
  });

  return (
    <div className="mt-16">
      <h3 className="left">Featured Case Studies and Posts</h3>
      <a className="right text-light-gray mt-16 m-btn" href={'https://medium.com/@' + process.env.REACT_APP_MEDIUM_USERNAME}>See All on Medium »</a>
      <div className="clear"></div>
      <div className="is-flex">
        {
          _.map(posts, (post,i) => {
            return <a href={post.link} className="w-1/3 shadow-lg border-radius-8 mb-24 transition-ease transition-scale" key={i}>
                    <div className="post-thumbnail">
                      <img src={post.thumbnail} alt={post.title} className="border-top-left-radius-8 border-top-right-radius-8" width="100%" />
                    </div>
                    <h3 className="px-16 text-gray">{post.title}</h3>
                    <small className="px-16 text-light-gray mb-24 is-block"><Moment format="MMMM DD YYYY" date={post.pubDate} /></small>
                  </a>
          })
        }
      </div>
    </div>
  );
}

export default Medium;