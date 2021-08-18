import * as React from 'react'
import { Link } from 'gatsby'
import Constant from '../constant/constant'

const Layout = ({ pageTitle, children }) => {
  return (
    <main>
      <title>{pageTitle}</title>
    
    {/* navbar code */}
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <Link className="navbar-brand">MJ-Store</Link>
  <ul class="navbar-nav">
    <li className="nav-item">
      <Link  to="/"><a className="nav-link" href="/">Home</a></Link>
    </li>
    <li className="nav-item">
      <Link to="/about"><a className="nav-link" href="/about">About</a></Link>
    </li>
    <li className="nav-item">
      <Link to="/contact"><a className="nav-link" href="/contact">Contact</a></Link>
    </li>
  </ul>
</nav>
<br/>
 {/* end */}
      {/* <h1>{pageTitle}</h1> */}
      <div className="container form-group">{children}</div>

    {/* footer cdoe */}
      <footer style={{...Constant.footerBackground, ...Constant.p30}}>
        <div className="row">
          <div className="col-sm-4">
            <h3>Home</h3>
          </div>
          <div className="col-sm-4">
            <h3>Contact Us</h3>
          </div>
          <div className="col-sm-4">
            <h3>Social Links</h3>
          </div>
          </div>
      </footer>
    {/* end */}
    </main>
  )
}

export default Layout