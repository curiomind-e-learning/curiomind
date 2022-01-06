import React from 'react'
import ReactPlayer from 'react-player'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
// import { useLocation } from 'react-router-dom'

const Week = () => {
  //   const location = useLocation()
  //   const { videos } = location.state
  return (
    <>
      <Navbar />
      <div
        style={{
          width: '60rem',
          heigth: '60rem',
          margin: 'auto',
          paddingTop: '7rem',
          paddingBottom: '5rem',
        }}
      >
        <ReactPlayer
          className="react-player fixed-bottom"
          url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          width="100%"
          height="100%"
          playing
          controls={true}
        />
      </div>
      <Footer />
    </>
  )
}

export default Week
