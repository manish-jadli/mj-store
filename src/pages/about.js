import * as React from "react"
import { Link } from 'gatsby'
import Constant from '../constant/constant'



// markup
const About = () => {
  return (
    <main>
      <title>About Page</title>
      <h1 style={Constant.primaryBackgrond}>Welcome to About us screen!</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <p style={Constant.primaryColor}>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  )
}

export default About
