import React, { useEffect, useState } from 'react'
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
  const [isLoading, setisLoading] = useState(false)
  let params = useParams()

  const getCourseDetails = async () => {
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
  }

  useEffect(() => {
    getCourseDetails()
    return () => {
      setCourseName('')
      setInstructorName('')
      setDescription('')
      setCourseId('')
      setisLoading(false)
    }
  }, [])

  return (
    <>
      <Loader active={isLoading} />
      <div className="flex min-h-screen" style={{ fontFamily: 'Nunito' }}>
        <div className="w-1/6 bg-white border-r border-gray-300">
          <Sidebar courseId={courseId} />
        </div>
        {!isLoading ? (
          <div className=" mt-20">
            <div className="w-4/5 mx-10 h-40 bg-veryLightBlue rounded-3xl shadow-xl p-10 flex flex-row">
              <div className="w-20 h-20 bg-slate-400 rounded-3xl"></div>
              <div className="font-regular text-2xl px-10 pt-5">
                {courseName}
              </div>
            </div>
            <div className=" mx-8 text-lg font-light text-gray-600 py-10 flex justify-center p-4">
              {description}
            </div>
            <div>
              <div className="grid sm:grid-cols-1 md:grid-cols-1 ml-36">
                <div style={{ width: '250px' }}>
                  <Card
                    imgUrl="https://www.linkpicture.com/q/Vector-2.svg"
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
