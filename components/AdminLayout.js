import React from 'react'
import Navigator from './Navigator'

const AdminLayout = (props) => {
  return (
    <>
      <div className="w-full flex h-screen">
        <Navigator/>  
        {props.children}
      </div>
    </>
  )
}

export default AdminLayout