import * as React from "react"
import { Link } from 'gatsby'
import Constant from '../constant/constant'



// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1 style={Constant.primaryBackgrond}>Welcome to my Gatsby site!</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <p style={Constant.primaryColor}>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  )
}

export default IndexPage
