import React from 'react'
import ReactPlayer from 'react-player'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
// import { useLocation } from 'react-router-dom'

const Week = () => {
  //   const location = useLocation()
  //   const { videos } = location.state
  return (
    <>
      <Navbar />
      <div
        className="flex min-h-screen justify-center"
        style={{ fontFamily: 'Nunito' }}
      >
        <div className="w-1/6 bg-white border-r border-gray-300">
          <Sidebar />
        </div>
        <div
          style={{
            width: '55rem',
            heigth: '55rem',
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
      </div>
      <Footer />
    </>
  )
}

export default Week
