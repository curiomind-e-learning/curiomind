import CoursesCard from '../CoursesCard/CoursesCard'
import Title from '../Title/Title'
import Loader from '../Loader/Loader'
import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'

const Courses = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchCourses = useCallback(async () => {
    setLoading(true)
    const res = await fetch(`${process.env.REACT_APP_API}/course/explore`)
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
      <div
        id="Courses"
        className="flex justify-center items-center mx-auto flex-col sm:p-10 p-5 dark:bg-[#001E3C]"
      >
        <Title
          title="Explore Courses"
          desc1="Build career-relevant skills"
          desc2="with courses from top industry experts"
        />
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8">
          {courses.map(({ imgUrl, name, category, _id }, index) => (
            <CoursesCard
              key={`${name}${index}`}
              imgUrl={imgUrl}
              courseName={name}
              courseDetail={category}
              courseId={_id}
            />
          ))}
        </div>
        <Link
          to="/allcourses"
          className="flex flex-row items-center justify-center mt-4 rounded bg-[#E5E7EB] cursor-pointer dark:text-white dark:bg-[#007FFF] "
        >
          <div
            to="/allcourses"
            className="text-xl text-primary pl-5 pr-3 py-3 "
            style={{ fontFamily: 'Nunito' }}
          >
            View All
          </div>
          <div>
            <FaAngleRight size="1.5rem" className="mr-2" />
          </div>
        </Link>
      </div>
    </>
  )
}

export default Courses
