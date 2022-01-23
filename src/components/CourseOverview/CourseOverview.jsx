import React, { useEffect, useState, useCallback } from 'react'
import Card from '../Card/Card'
import Footer from '../Footer/Footer.jsx'
import Sidebar from '../Sidebar/Sidebar'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'
import Swal from 'sweetalert2'

const CourseOverview = () => {
  const [courseName, setCourseName] = useState('')
  const [instructorName, setInstructorName] = useState('')
  const [description, setDescription] = useState('')
  const [courseId, setCourseId] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [enrolled, setEnrolled] = useState(false)
  const [isLoading, setisLoading] = useState(false)
  const [user, setUser] = useState([])
  const [isCompleted, setIsCompleted] = useState(false)

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
    }).then((res) => {
      setisLoading(false)
      switch (res.status) {
        case 201:
          Swal.fire({
            title: 'Success',
            text: 'You have successfully enrolled in this course',
            icon: 'success',
            confirmButtonText: 'Ok',
          })
          break

        case 409:
          Swal.fire({
            title: 'Error',
            text: 'You are already enrolled in this course',
            icon: 'error',
            confirmButtonText: 'Ok',
          })
          break

        default:
          Swal.fire({
            title: 'Error',
            text: 'Something went wrong',
            icon: 'error',
            confirmButtonText: 'Ok',
          })
      }
      setEnrolled(true)
    })
  }

  const unenrollCourse = () => {
    if (isCompleted) {
      Swal.fire({
        title: 'Error',
        text: 'You have already completed this course',
        icon: 'error',
        confirmButtonText: 'Ok',
      })
      return
    }
    setisLoading(true)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.value) {
        fetch(`${process.env.REACT_APP_API}/course/unenroll/${params.id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        }).then((res) => {
          setisLoading(false)
          switch (res.status) {
            case 200:
              Swal.fire({
                title: 'Success',
                text: 'You have successfully unenrolled from the course',
                icon: 'success',
                confirmButtonText: 'Ok',
              }).then(() => {
                fetchCourses()
              })
              break

            case 400:
              Swal.fire({
                title: 'Error',
                text: 'You are not enrolled in this course',
                icon: 'error',
                confirmButtonText: 'Ok',
              })
              break

            default:
              Swal.fire({
                title: 'Error',
                text: 'Something went wrong',
                icon: 'error',
                confirmButtonText: 'Ok',
              })
          }
        })
      }
      fetchCourses()
      getCourseDetails()
    })
  }

  const fetchCourses = useCallback(() => {
    fetch(`${process.env.REACT_APP_API}/course/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
    }).then((res) => {
      res.json().then((data) => {
        const course = data.find((course) => course.course._id === params.id)
        if (course) {
          setEnrolled(true)
          course.isCompleted ? setIsCompleted(true) : setIsCompleted(false)
        } else {
          setEnrolled(false)
        }
      })
    })
  }, [params.id])

  const getName = async () => {
    const res = await fetch(`${process.env.REACT_APP_API}/user/profile/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
    })
    const data = await res.json()
    setUser(data)
  }

  useEffect(() => {
    getName()
    return () => {
      setUser({})
    }
  }, [])

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
            <div
              className="mx-10 h-40 bg-lightCyan shadow-xl rounded-3xl pr-8 flex flex-row items-center justify-between"
              style={{ width: '70vw' }}
            >
              <img
                className="rounded-l-3xl h-full"
                src={`${imgUrl}`}
                alt="..."
              ></img>
              <div className="font-regular text-2xl">{courseName}</div>
              {user.role === 'faculty' ? (
                <></>
              ) : (
                <>
                  {!enrolled ? (
                    <button
                      className="bg-cornflowerBlue -hue-rotate-30 drop-shadow-md text-white font-bold py-4 px-8 justify-self-start rounded-lg"
                      onClick={enrollCourse}
                    >
                      Enroll
                    </button>
                  ) : (
                    <button
                      className="bg-red-400 shadow-lg text-white font-bold py-4 px-8 justify-self-start rounded-lg"
                      onClick={unenrollCourse}
                    >
                      Unenroll
                    </button>
                  )}
                </>
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
