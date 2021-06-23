import * as React from "react"
import Constant from '../constant/constant'
import Layout from './layout'



// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="MJ - Store">
    <main>
      <h1 style={Constant.primaryBackgrond}>Welcome to my Gatsby site!</h1>
      <p style={Constant.primaryColor}>I'm making this by following the Gatsby Tutorial.</p>
    </main>
    </Layout>
  )
}

export default IndexPage
