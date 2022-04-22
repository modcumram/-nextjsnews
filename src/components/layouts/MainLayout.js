//import React from 'react'
import Footer from "../shared/Footer"
import Navbar from "../shared/Navbar"
import Head  from "next/head"

const MainLayout = ({children, title=''}) => {
  return (
   <>
  <Head>
      <link rel="icon" href="/favicon/android-icon-96x96.png"/>
      <title>{title} | My project</title>
  </Head>

   <Navbar />
   <div style={{paddingTop:'63px'}}></div>
   {children}
   <Footer />
   
   </>
  )
}

export default MainLayout