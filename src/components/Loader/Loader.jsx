import React from 'react'

const Loader = ({ active }) => {
  return active ? (
    <div className="flex fixed top-0 w-screen h-1.5 animate-pulse bg-blue-700 delay-150 z-10" />
  ) : (
    <></>
  )
}

export default Loader
