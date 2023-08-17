import React from 'react'
import Link from 'next/link'

const CommissionMe = ({ setModal }) => {
  return (
    <div className="fixed top-0 left-0 z-30 flex h-screen w-screen items-center justify-center bg-black/50">
      <div className="w-1/2 flex rounded-md bg-white p-4 justify-end">
        <button className="text-sm self-end p-3 border-none" onClick={() => setModal(false)}>Close</button>
        <p>TEST</p>
      </div>
    </div>
  )
}

export default CommissionMe
