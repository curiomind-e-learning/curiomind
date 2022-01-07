import React, { useEffect, useState, useCallback } from 'react'
import ReactPlayer from 'react-player'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import { useParams } from 'react-router-dom'

const Week = () => {
  const [videos, setVideos] = useState('')
  let params = useParams()
  const getVideoDetails = useCallback(async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API}/course/${params.id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      }
    )
    const data = await response.json()
    setVideos(data.videos)
  }, [params.id])

  useEffect(() => {
    getVideoDetails()
    return () => {
      setVideos('')
    }
  }, [getVideoDetails])
  return (
    <>
      <Navbar />
      <div
        className="flex min-h-screen justify-center"
        style={{ fontFamily: 'Nunito' }}
      >
        <div className="w-1/6 bg-white border-r border-gray-300">
          <Sidebar courseId={params.id} />
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
            url={`${videos[params.no - 1]}`}
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
