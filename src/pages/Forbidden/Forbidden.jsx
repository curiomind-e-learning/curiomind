import React from 'react'
import gif from './403.gif'

const Forbidden = () => {
  return (
    <div>
      <img className="h-screen w-full" src={gif} alt=".."></img>
      <a
        href="/"
        className="cursor-pointer flex justify-center absolute right-0.5 left-0.5 bottom-32"
      >
        <button className="bg-dirtyGreen shadow-xl rounded-2xl text-white font-nunito w-32 h-90 p-4">
          Go to Home
        </button>
      </a>
    </div>
  )
}

export default Forbidden
