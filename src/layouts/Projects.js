import React from 'react'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div className="container">
      <Link to="/" className="mt-24 is-inline">Return to Home</Link>
      <h1 className="hero-title">Projects</h1>
      <h3 className="hero-subtitle">The list of everything I have started, contributed, worked (also failed & shut down...) including my professional career. </h3>
      <div className="mt-24">
        <table className="w-full text-xs text-dark font-mono zebra hover-blue">
          <thead>
            <th className="text-gray border-bottom-1 border-gray text-left py-8 px-8">Project</th>
            <th className="text-gray border-bottom-1 border-gray py-8 px-8">Starting Year</th>
            <th className="text-gray border-bottom-1 border-gray py-8 px-8">Type</th>
            <th className="text-gray border-bottom-1 border-gray text-left py-8 px-8">Description</th>
            <th className="text-gray border-bottom-1 border-gray text-left py-8 px-8">Key Moments</th>
          </thead>
          <tbody>
            <tr>
              <td className="font-semibold py-8 px-8">hepizle.net</td>
              <td className="py-8 px-8 text-center">'07</td>
              <td className="py-8 px-8">Indie</td>
              <td className="py-8 px-8">A video platform that included local Turkish TV shows</td>
              <td className="py-8 px-8">Shut down</td>
            </tr>
            <tr>
              <td className="font-semibold py-8 px-8">uydursana.com</td>
              <td className="py-8 px-8 text-center">'08</td>
              <td className="py-8 px-8">Indie</td>
              <td className="py-8 px-8">A Turkish satirical news website.</td>
              <td className="py-8 px-8">Shut down</td>
            </tr>
            <tr>
              <td className="font-semibold py-8 px-8">SimpleStart Wordpress Theme</td>
              <td className="py-8 px-8 text-center">'10</td>
              <td className="py-8 px-8">Indie</td>
              <td className="py-8 px-8">A Free Wordpress blog theme</td>
              <td className="py-8 px-8">Downloaded 100+ times, stopped developing</td>
            </tr>
            <tr>
              <td className="font-semibold py-8 px-8">Univent</td>
              <td className="py-8 px-8 text-center">'13</td>
              <td className="py-8 px-8">Indie</td>
              <td className="py-8 px-8">An app for university students to follow events</td>
              <td className="py-8 px-8">Shut down</td>
            </tr>
            <tr>
              <td className="font-semibold py-8 px-8">Nokta - Izlesene</td>
              <td className="py-8 px-8 text-center">'16</td>
              <td className="py-8 px-8">Product Designer</td>
              <td className="py-8 px-8">Built the Turkey's leading video platform as responsive.</td>
              <td className="py-8 px-8">20M+ video streams in a month - Active</td>
            </tr>
            <tr>
              <td className="font-semibold py-8 px-8">Nokta - Community Apps</td>
              <td className="py-8 px-8 text-center">'16</td>
              <td className="py-8 px-8">Product Designer</td>
              <td className="py-8 px-8">Built a product that allows influencers to create their own community apps on mobile platforms.</td>
              <td className="py-8 px-8">3M downloads in less than a year</td>
            </tr>
            <tr>
              <td className="font-semibold py-8 px-8">Nokta - Yemek Tarifleri</td>
              <td className="py-8 px-8 text-center">'17</td>
              <td className="py-8 px-8">Product Designer</td>
              <td className="py-8 px-8">A mobile app for recipes and social platform among food enthusiasts</td>
              <td className="py-8 px-8">Shut down</td>
            </tr>
            <tr>
              <td className="font-semibold py-8 px-8">Seyisco</td>
              <td className="py-8 px-8 text-center">'17</td>
              <td className="py-8 px-8">Co-Founder</td>
              <td className="py-8 px-8">Built 3 different web and mobile applications to fill the gap between the field workers and the back-office of the municipalities</td>
              <td className="py-8 px-8">Raised ~$40K seed investment, shut down</td>
            </tr>
            <tr>
              <td className="font-semibold py-8 px-8">Nokta - Doviz</td>
              <td className="py-8 px-8 text-center">'18</td>
              <td className="py-8 px-8">Product Designer</td>
              <td className="py-8 px-8">Designed mobile & web platform, that allows people to manage their portfolio and watch international market data.</td>
              <td className="py-8 px-8">Featured 4 times on AppStore</td>
            </tr>
            <tr>
              <td className="font-semibold py-8 px-8">Nokta - Sinemalar</td>
              <td className="py-8 px-8 text-center">'18</td>
              <td className="py-8 px-8">Product Designer</td>
              <td className="py-8 px-8">Created mobile & web platform that allows people to explore movies and TV series.</td>
              <td className="py-8 px-8">2M+ Monthly Active Users</td>
            </tr>
            <tr>
              <td className="font-semibold py-8 px-8">Nitelikli Boş</td>
              <td className="py-8 px-8 text-center">'19</td>
              <td className="py-8 px-8">Indie</td>
              <td className="py-8 px-8">A podcast show about everything... literally everything</td>
              <td className="py-8 px-8">Active</td>
            </tr>
            <tr>
              <td className="font-semibold py-8 px-8">SimpleStart React Theme</td>
              <td className="py-8 px-8 text-center">'20</td>
              <td className="py-8 px-8">Indie</td>
              <td className="py-8 px-8">A Free React app for Designers, Medium writers, Dribbblers... As myself. You are seeing SimpleStart React Theme..</td>
              <td className="py-8 px-8">Active</td>
            </tr>
            <tr>
              <td className="font-semibold py-8 px-8">Thundra Sidekick</td>
              <td className="py-8 px-8 text-center">'21</td>
              <td className="py-8 px-8">Product Manager</td>
              <td className="py-8 px-8">Building Thundra Sidekick a cloud debugger connects to repositories and lets developers debug and trace microservices without stopping them. </td>
              <td className="py-8 px-8">Featured on ProductHunt, TheNextWeb - Active</td>
            </tr>
            <tr>
              <td className="font-semibold py-8 px-8">Thundra Foresight</td>
              <td className="py-8 px-8 text-center">'21</td>
              <td className="py-8 px-8">Product Manager</td>
              <td className="py-8 px-8">Building Thundra Foresight, a tool for troubleshooting test failures and optimizing build duration and performance in the CI pipeline.</td>
              <td className="py-8 px-8">Active</td>
            </tr>
          </tbody>
        </table>
        <span className="text-xs text-gray mt-24 is-block">List last updated on July 25, 2021</span>
        <span className="text-2xs text-light-gray mt-16 is-block">Thanks for <a href="https://joshpigford.com/">Josh Pigford</a> for the inspiration for this page!</span>
      </div>
     
    </div>
  )
}

export default About
