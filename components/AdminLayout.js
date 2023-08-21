import React from 'react'
import Navigator from './Navigator'
import { HiOutlineBell } from 'react-icons/hi'

const AdminLayout = (props) => {
  return (
    <>
      <div className="w-full flex h-screen">
        <Navigator/> 
        <div className="w-4/5 bg-[#dbdbdb] flex flex-col">
          <div className="h-20 sticky top-0 z-10 flex gap-x-10 py-4 items-center justify-end px-8 bg-white w-full">
            <span className="text-2xl"><HiOutlineBell/></span>
            <div className="gap-x-3 flex items-center">
              <img className="rounded-md aspect-square h-12 w-12 object-cover" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRtGQW1-nD7k1QDw0zQKVDVn9GFYPBQj-eg7WluEUqVJpu4hhhk"/>
              <div className="flex flex-col">
                <p className="font-bold">Lucian Samosata</p>
                <p className="text-xs font-semibold text-gray-500">pilgrim@gmail.com</p>
              </div>
            </div>
          </div>
          {props.children}
        </div> 
      </div>
    </>
  )
}

export default AdminLayout