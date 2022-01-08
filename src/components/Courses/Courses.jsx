import CoursesCard from '../CoursesCard/CoursesCard'
import Title from '../Title/Title'
import Loader from '../Loader/Loader'
import { useState, useEffect, useCallback } from 'react'

const Courses = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchCourses = useCallback(async () => {
    setLoading(true)
    const res = await fetch(`${process.env.REACT_APP_API}/course/explore`)
    const data = await res.json()
    console.log(data)
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

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 grid-flow-row px-8 py-10 place-items-center">
          {courses.map(({ imgUrl, name, category }, index) => (
            <div key={`${name}${index}`}>
              <CoursesCard
                imgUrl={imgUrl}
                courseName={name}
                courseDetail={category}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Courses
