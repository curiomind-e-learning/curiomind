import React from 'react'

const Loader = ({ active }) => {
  return active ? (
    <div className="flex fixed top-0 w-screen h-1 animate-pulse delay-150 bg-primary z-10" />
  ) : (
    <></>
  )
}

export default Loader
