import React from 'react'
import CoursesCard from '../../components/CoursesCard/CoursesCard'
import Title from '../Title/Title'
import Loader from '../Loader/Loader'
import { useState, useEffect } from 'react'

const FacultyCourse = () => {
  const [course, setCourse] = useState([])
  const [loading, setIsLoading] = useState(false)
  const getCourses = async () => {
    setIsLoading(true)
    const res = await fetch(`${process.env.REACT_APP_API}/course/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
    })
    const data = await res.json()
    setCourse(data)
    setIsLoading(false)
  }

  useEffect(() => {
    getCourses()
    return () => {
      setCourse({})
      setIsLoading(false)
    }
  }, [])
  return (
    <>
      <Loader active={loading} />
      <div id="editcourses">
        <Title
          title="Uploaded Courses"
          desc1="Browse the courses you have uploaded"
          desc2="the courses can be edited anytime"
        />

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 grid-flow-row px-8 py-10 place-items-center">
          {course.map(({ imgUrl, name, category, _id }, index) => (
            <CoursesCard
              key={`${name}${index}`}
              imgUrl={imgUrl}
              courseName={name}
              courseDetail={category}
              edit={true}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default FacultyCourse
