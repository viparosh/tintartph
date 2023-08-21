import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import SignInOption from './modals/signInOption'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { FaUserAlt } from 'react-icons/fa'

const Header = () => {

  const [modal,setModal] = useState(false)

  return (
    <>
      <Head>
        <title>TintArt</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap"
        />
      </Head>
      
      {(modal) ? <SignInOption setModal={setModal}/> : <></>}

      <div className="flex items-center justify-between w-full px-20 py-10 bg-[#8d78c1] h-10 sticky top-0 z-10">
        <p className="text-white font-bold text-2xl">TintArt</p>
        <ol className="font-semibold lg:flex gap-x-10 lg:flex-row hidden text-lg flex-row text-white cursor-default">
            <Link href={"/home"}>
                <li className="hover:text-indigo-800">Home</li>
            </Link>
            <Link href={"/partnerships"}>
                <li className="hover:text-indigo-800">Partnerships</li>
            </Link>
            <Link href={"/gallery"}>
                <li className="hover:text-indigo-800">Gallery</li>
            </Link>
            <Link href={"/shopcustomization"}>
                <li className="hover:text-indigo-800">Shop & Customization</li>
            </Link>
            <Link href={"/about"}>
                <li className="hover:text-indigo-800">About Us</li>
            </Link>
            <Link href={"/faq"}>
                <li className="hover:text-indigo-800">FAQ</li>
            </Link>
        </ol>

        <div className="flex gap-x-4 items-center">  
          <Link href={"/mycart"}>
              <button className="hover:text-indigo-800 text-white text-2xl"><HiOutlineShoppingBag/></button>
          </Link>
          <button onClick={() =>  setModal(true)} className="hover:text-indigo-800 text-white text-xl"><FaUserAlt/></button>
        </div>
 
      </div>
    </>
  )
}

export default Header
