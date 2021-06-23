import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
  return (
    <main>
      <title>{pageTitle}</title>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      {/* <h1>{pageTitle}</h1> */}
      <div className="container form-group">{children}</div>
      <footer>
          <h3>Footer code here</h3>
      </footer>
    </main>
  )
}

export default Layout