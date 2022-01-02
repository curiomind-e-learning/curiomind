import React from 'react'
import { BiBookContent } from 'react-icons/bi'

const Card = ({ title }) => {
  return (
    <div
      className="flex items-center p-10 w-full rounded-2xl bg-white drop-shadow-sm"
      style={{
        backgroundColor: '#E7EAC4',
      }}
    >
      <div>
        <BiBookContent className="p-2 text-lime-900" size={50} />
      </div>
      <p className="text-2xl font-nunito text-lime-900">{title}</p>
    </div>
  )
}

export default Card
