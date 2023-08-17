import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import SignInOption from './modals/signInOption'

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

      <div className="justify-between items-center w-full p-10 flex bg-[#8d78c1] h-10">
        <p className="text-white">TintArt</p>
        <ol className="lg:flex gap-x-10 lg:flex-row hidden text-lg flex-row text-white cursor-pointer">
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
            <Link href={"/mycart"}>
                <li className="hover:text-indigo-800">My Cart</li>
            </Link>
        </ol>
        <button onClick={() =>  setModal(true)} className="text-white">Sign In</button>
      </div>
    </>
  )
}

export default Header
