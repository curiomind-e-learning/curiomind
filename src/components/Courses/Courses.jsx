import CoursesCard from '../CoursesCard/CoursesCard'
import Title from '../Title/Title'
import Loader from '../Loader/Loader'
import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'

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
      <div id="Courses">
        <Title
          title="Explore Courses"
          desc1="Build career-relevant skills"
          desc2="with courses from top industry experts"
        />

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 grid-flow-row px-20 py-10 place-items-center">
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
        <div className="flex justify-center">
          <Link
            to="/allcourses"
            className="text-xl text-primary opacity-80 hover:ml-2 transition-all ease-in-out duration-500 flex w-max active:scale-95"
          >
            View All
          </Link>
        </div>
      </div>
    </>
  )
}

export default Courses
