import React from 'react'
import Link from 'next/link'

const CommissionMe = ({ setModal }) => {
  return (
    <div className="fixed top-0 left-0 z-30 flex h-screen w-screen items-center justify-center bg-black/50">
      <div className="w-1/2 p-7 shrink-1 flex flex-col rounded-md bg-white justify-end">
        <div className="flex lg:flex-row flex-col w-full">
          <div className="lg:w-1/2 w-full flex flex-col">
            <div className="w-full flex gap-x-6">
              <div className="w-1/2 aspect-square  bg-gray-300 "></div>
              <div className="w-1/2 flex-col">
                <p className="font-bold text-gray-500 text-xl">Artwork Style</p>
                <p className="font-bold text-gray-500 text-xl">Name by</p>
                <p className="font-bold text-gray-500 text-xl">Artist Name</p>
                <hr className="w-1/3 bg-violet-400 h-[0.3rem]"/>
                <p>PRICE / head</p>
              </div>
            </div>
            
            <p className="mt-4 font-semibold">How many people will be in this commission</p>
            <select className="bg-[#4a348d] rounded-full px-2 py-1 text-white w-3/4" name="Select an option..." id="itemA">
              <option className="bg-[#f9f4fd] text-black font-semibold text-sm" value="">Select an option</option>
              <option className="bg-[#f9f4fd] text-black font-semibold text-sm" value="item b">Item</option>
              <option className="bg-[#f9f4fd] text-black font-semibold text-sm" value="item c">Item</option>
            </select>
            <p className="mt-4 font-semibold">What is the</p>
            <select className="bg-[#4a348d] rounded-full px-2 py-1 text-white w-3/4" name="Select an option..." id="itemA">
              <option className="bg-[#f9f4fd] text-black font-semibold text-sm" value="">Select an option</option>
              <option className="bg-[#f9f4fd] text-black font-semibold text-sm" value="item b">Item</option>
              <option className="bg-[#f9f4fd] text-black font-semibold text-sm" value="item c">Item</option>
            </select>
            <p className="mt-4 font-semibold">What background would you like ?</p>
            <select className="bg-[#4a348d] rounded-full px-2 py-1 text-white w-3/4" name="Select an option..." id="itemA">
              <option className="bg-[#f9f4fd] text-black font-semibold text-sm" value="">Select an option</option>
              <option className="bg-[#f9f4fd] text-black font-semibold text-sm" value="item b">Item</option>
              <option className="bg-[#f9f4fd] text-black font-semibold text-sm" value="item c">Item</option>
            </select>
            <p className="mt-4 font-semibold">Do you need special licensing for this piece ?</p>
            <select className="bg-[#4a348d] rounded-full px-2 py-1 text-white w-3/4" name="Select an option..." id="itemA">
              <option className="bg-[#f9f4fd] text-black font-semibold text-sm" value="">Select an option</option>
              <option className="bg-[#f9f4fd] text-black font-semibold text-sm" value="item b">Item</option>
              <option className="bg-[#f9f4fd] text-black font-semibold text-sm" value="item c">Item</option>
            </select>
          </div>
          <div className="lg:w-1/2 w-full flex gap-y-4 flex-col">
            <p className="font-bold">ARTIST T&C HERE</p>
            <div className="p-6 bg-[#c6bce0] rounded-lg flex flex-col">
                <p className="text-2xl font-bold">Do's</p>
                <ol className="text-lg list-disc ml-6 gap-x-10">
                    <li>Fanart</li>
                    <li>Portrait</li>
                    <li>Your OC's</li>
                    <li>NSFW</li>
                </ol>
            </div>
            <div className="p-6 bg-[#c6bce0] rounded-lg flex flex-col">
                <p className="text-2xl font-bold">Dont's</p>
                <ol className="text-lg list-disc ml-6 gap-x-10">
                    <li>Gore</li>
                    <li>Mecha</li>
                    <li>Furry</li>
                    <li>Super NSFW</li>
                    <li>Detailed Backgrounds</li>
                </ol>
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-x-2 justify-end items-center">
          <button className="font-semibold bg-gray-600 text-white px-6 py-2 rounded-md text-sm " onClick={() => setModal(false)}>CANCEL</button>
          <button className="bg-[#764fcc] font-semibold text-white px-6 py-2 rounded-md text-sm" onClick={() => setModal(false)}>SEND COMMISSION REQUEST</button> 
        </div>
        
        
      </div>
    </div>
  )
}

export default CommissionMe
