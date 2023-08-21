import React from 'react'
import { Header , Footer } from '../components'

const Layout = (props) => {
  return (
    <>
      <div className="w-full flex flex-col items-center h-full">
        <Header/>  
        {props.children}
        <Footer/>
      </div>
    </>
  )
}

export default Layout