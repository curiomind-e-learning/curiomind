import React from 'react'
import CourseOverview from '../../components/CourseOverview/CourseOverview.jsx'
import { useLocation } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar.jsx'

const Course = () => {
  const location = useLocation()
  const { name, instructorName, description, videos, id } = location.state
  return (
    <>
      <Navbar />

      <CourseOverview
        courseName={name}
        instructorName={instructorName}
        description={description}
        videos={videos}
        id={id}
      />
    </>
  )
}

export default Course
