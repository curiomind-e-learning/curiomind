import React from 'react'
import Medal from './Medal.svg'

const Card = ({ courseName, category }) => {
  return (
    <figure className="flex items-center justify-left drop-shadow-lg p-5 w-4/5 rounded-3xl bg-white">
      <img className="rounded-full" src={Medal} alt="" />
      <div className="px-6">
        <blockquote>
          <p className="text-blackOlive font-semibold">{courseName}</p>
        </blockquote>
        <p className="text-xs text-gray-600">{category}</p>
      </div>
    </figure>
  )
}

export default Card
