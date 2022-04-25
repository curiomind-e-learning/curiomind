import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import CoursesCard from '../../components/CoursesCard/CoursesCard'
import Loader from '../../components/Loader/Loader'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const AllCourses = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(false)
  const fetchCourses = useCallback(async () => {
    setLoading(true)
    const res = await fetch(`${process.env.REACT_APP_API}/course/exploreall`)
    const data = await res.json()
    setCourses(data)
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchCourses()
    return () => {
      setCourses([])
    }
  }, [fetchCourses])

  return (
    <>
      <Loader active={loading} />
      <Navbar />
      <div className="flex justify-center items-center flex-col p-4 pt-20">
        <div className="leading-relaxed text-center text-3xl p-4">
          ALL COURSES
        </div>
        <hr className="w-1/4 border-b-2 border-gray-400"></hr>
      </div>
      <div
        id="Courses"
        className="flex justify-center items-center mx-auto my-4 flex-col p-10"
      >
        <div className="grid grid-flow-row gap-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8">
          {courses.map(({ imgUrl, name, category, _id }, index) => (
            <Link key={`${name}${index}`} to={`/course/${_id}`}>
              <CoursesCard
                imgUrl={imgUrl}
                courseName={name}
                courseDetail={category}
              />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AllCourses
