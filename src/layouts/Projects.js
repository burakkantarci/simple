import React from 'react'
import {Link} from 'react-router-dom'
import Hero from '../components/Hero'

const About = () => {
  return (
    <div className="container">
      <Link to="/" className="py-24 is-block">Return to Home</Link>
      <h1>Projects</h1>
      <h3>The list of everything I have started (also shut down...) apart from the professional career. Visit my <a href={'https://dribbble.com/' + process.env.REACT_APP_DRIBBBLE_USERNAME }>Dribbble</a> if you would like to see more of my designs or visit <a href={'https://medium.com/@' + process.env.REACT_APP_MEDIUM_USERNAME}>Medium</a> to see my design process.</h3>
      <div className="mt-24">
        <table className="w-full text-xs text-dark font-mono zebra hover-blue">
          <thead>
            <th className="text-gray border-bottom-1 border-gray text-left py-4 px-8">Project</th>
            <th className="text-gray border-bottom-1 border-gray py-4 px-8">Year</th>
            <th className="text-gray border-bottom-1 border-gray text-left py-4 px-8">Description</th>
            <th className="text-gray border-bottom-1 border-gray text-left py-4 px-8">What Happened</th>
          </thead>
          <tbody>
            <tr>
              <td className="font-semibold py-4 px-8">hepizle.net</td>
              <td className="py-4 px-8 text-center">2007</td>
              <td className="py-4 px-8">A video platform that included local Turkish TV shows</td>
              <td className="py-4 px-8">Shut it down</td>
            </tr>
            <tr>
              <td className="font-semibold py-4 px-8">uydursana.com</td>
              <td className="py-4 px-8 text-center">2008</td>
              <td className="py-4 px-8">A Turkish satirical news website.</td>
              <td className="py-4 px-8">Shut it down</td>
            </tr>
            <tr>
              <td className="font-semibold py-4 px-8">ilovewp.com</td>
              <td className="py-4 px-8 text-center">2010</td>
              <td className="py-4 px-8">A list of Wordpress resources</td>
              <td className="py-4 px-8">Shut it down</td>
            </tr>
            <tr>
              <td className="font-semibold py-4 px-8">SimpleStart Wordpress Theme</td>
              <td className="py-4 px-8 text-center">2010</td>
              <td className="py-4 px-8">A Free Wordpress blog theme</td>
              <td className="py-4 px-8">Downloaded 100+ times, stopped developing</td>
            </tr>
            <tr>
              <td className="font-semibold py-4 px-8">Univent</td>
              <td className="py-4 px-8 text-center">2013</td>
              <td className="py-4 px-8">An app for university students to follow events</td>
              <td className="py-4 px-8">Shut it down</td>
            </tr>
            <tr>
              <td className="font-semibold py-4 px-8"><a href="https://seyis.co">Seyisco <svg class="w-075 h-075" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a></td>
              <td className="py-4 px-8 text-center">2015</td>
              <td className="py-4 px-8">A smart city startup</td>
              <td className="py-4 px-8">Raised ~$40K seed investment</td>
            </tr>
            <tr>
              <td className="font-semibold py-4 px-8"><a href="https://open.spotify.com/show/2SNmqLUa3qBzJyX705EDeK">Nitelikli Boş <svg class="w-075 h-075" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a></td>
              <td className="py-4 px-8 text-center">2019</td>
              <td className="py-4 px-8">A podcast show about everything... literally everything</td>
              <td className="py-4 px-8">Active</td>
            </tr>
            <tr>
              <td className="font-semibold py-4 px-8"><a href="https://github.com/burakkantarci/simple">SimpleStart React Theme <svg class="w-075 h-075" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a></td>
              <td className="py-4 px-8 text-center">2020</td>
              <td className="py-4 px-8">A Free React app for Designers, Medium writers, Dribbblers... As myself. You are seeing SimpleStart React Theme..</td>
              <td className="py-4 px-8">Active</td>
            </tr>
          </tbody>
        </table>
        <span className="text-xs text-gray mt-24 is-block">List last updated on November 14, 2020</span>
        <span className="text-2xs text-light-gray mt-16 is-block">Thanks for <a href="https://joshpigford.com/">Josh Pigford</a> for the inspiration for this page!</span>
      </div>
     
    </div>
  )
}

export default About
