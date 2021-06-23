import * as React from "react"
import Constant from '../constant/constant'
import Layout from "./layout"


// markup
const Contact = () => {
  return (
      <Layout pageTitle="MJ - Store | Contact">
    <main>
      <h1 style={Constant.primaryBackgrond}>Welcome to Contact us screen!</h1>
      <p style={Constant.primaryColor}>I'm making this by following the Gatsby Tutorial.</p>
    </main>
    </Layout>
  )
}

export default Contact
