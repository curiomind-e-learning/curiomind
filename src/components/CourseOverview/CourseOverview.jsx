import React, { useEffect, useState, useCallback } from 'react'
import Card from '../Card/Card'
import Footer from '../Footer/Footer.jsx'
import Sidebar from '../Sidebar/Sidebar'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'

const CourseOverview = () => {
  const [courseName, setCourseName] = useState('')
  const [instructorName, setInstructorName] = useState('')
  const [description, setDescription] = useState('')
  const [courseId, setCourseId] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [enrolled, setEnrolled] = useState(true)
  const [isLoading, setisLoading] = useState(false)
  let params = useParams()

  const enrollCourse = () => {
    setisLoading(true)
    fetch(`${process.env.REACT_APP_API}/course/enroll/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        course: params.id,
      }),
    }).then(() => {
      setisLoading(false)
    })
  }

  const fetchCourses = useCallback(() => {
    fetch(`${process.env.REACT_APP_API}/course/explore`).then((res) => {
      res.json().then((data) => {
        const course = data.find((course) => course.id === params.id)
        if (course) {
          setEnrolled(true)
        } else {
          setEnrolled(false)
        }
      })
    })
  }, [params.id])

  const getCourseDetails = useCallback(async () => {
    setisLoading(true)
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
    setCourseName(data.name)
    setInstructorName(data.instructors[0].name)
    setDescription(data.description)
    setCourseId(data._id)
    setisLoading(false)
    setImgUrl(data.imgUrl)
  }, [params.id])

  useEffect(() => {
    fetchCourses()
    getCourseDetails()
    return () => {
      setCourseName('')
      setInstructorName('')
      setDescription('')
      setCourseId('')
      setisLoading(false)
    }
  }, [getCourseDetails, fetchCourses])

  return (
    <>
      <Loader active={isLoading} />
      <div className="flex min-h-screen" style={{ fontFamily: 'Nunito' }}>
        <div className="w-1/6 bg-white border-r border-gray-300">
          <Sidebar courseId={courseId} />
        </div>
        {!isLoading ? (
          <div className=" my-20">
            <div className="w-4/5 mx-10 h-40 bg-lightCyan shadow-xl rounded-3xl pr-8 flex flex-row items-center justify-between">
              <img
                className="rounded-l-3xl h-full"
                src={`${imgUrl}`}
                alt="..."
              ></img>
              <div className="font-regular text-2xl">{courseName}</div>
              {!enrolled ? (
                <button
                  className="bg-cornflowerBlue -hue-rotate-30 drop-shadow-md text-white font-bold py-4 px-8 justify-self-start rounded-lg"
                  onClick={enrollCourse}
                >
                  Enroll
                </button>
              ) : (
                <button
                  className="bg-blue-300 shadow-lg text-white font-bold py-4 px-8 justify-self-start rounded-lg"
                  disabled
                >
                  Already Enrolled
                </button>
              )}
            </div>
            <div className=" mx-8 text-lg font-light text-gray-600 py-10 flex justify-center p-4">
              {description}
            </div>
            <div>
              <div className="grid sm:grid-cols-1 md:grid-cols-1 ml-36">
                <div style={{ width: '250px' }}>
                  <Card
                    imgUrl="https://www.linkpicture.com/q/Vector-3.svg"
                    text={instructorName}
                    color="#E7EAC4"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <Footer />
    </>
  )
}

export default CourseOverview
