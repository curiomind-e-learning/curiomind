import React from 'react'

const Title = ({ title, desc1, desc2 }) => {
  return (
    <div className="flex justify-center items-center flex-col p-4 text-blackOlive">
      <hr className="w-1/4 border-b-2 border-gray-400"></hr>
      <div className="leading-relaxed text-center text-3xl p-8">{title}</div>
      <div className="leading-tight font-extralight text-center text-gray-500 text-xl">
        {desc1}
        <br />
        {desc2}
      </div>
    </div>
  )
}

export default Title
