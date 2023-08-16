import React from 'react'
import Link from 'next/link'

const SignInOption = ({ setModal }) => {
  return (
    <div className="fixed top-0 left-0 z-30 flex h-screen w-screen items-center justify-center bg-black/50 bg-white">
      <div className="w-1/2 flex rounded-md bg-transparent p-4 justify-end">
        {/* CUSTOMER */}
        <div className="bg-white px-16 gap-y-6 w-1/2 py-8 flex flex-col items-center justify-center">
          <p className="text-center mt-4 font-bold text-2xl">I would like to buy a product</p>
          <p className="text-center font-semibold">Unlock exclusive deals and personalized recommendations by signing in to explore our exceptional product range.</p>
          <button className="bg-violet-600 w-full py-3 text-sm rounded-lg border-none font-semibold text-white">Sign up</button>
          <hr className="w-5/6 h-[0.1rem] bg-gray-400"/>
          <div className="flex flex-col">
            <p>Already have an account ?</p>
            <button className="font-bold underline underline-offset-4">Sign in</button>
          </div>    
        </div>
        {/* ADMIN */}
        <div className="flex flex-col w-1/2 bg-gray-100">
          <button className="text-sm self-end p-3 border-none" onClick={() => setModal(false)}>Close</button>
          <div className="h-full px-16 gap-y-6 w-full pb-8 flex flex-col items-center justify-between">
            <p className="text-center font-bold text-2xl">I am an <br/>Administrator</p>
            <div className="flex w-full gap-y-2 items-center flex-col">
              <hr className="w-5/6 h-[0.1rem] bg-gray-400"/>
              <Link href={"../../../login"}>
                <button className="bg-violet-600 w-full py-3 text-sm rounded-lg border-none font-semibold text-white">Login</button>
              </Link>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default SignInOption
