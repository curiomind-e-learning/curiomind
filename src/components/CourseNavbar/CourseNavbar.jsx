import { useEffect, useState } from 'react'
import CourseBanner from '../CourseBanner/CourseBanner'
import Loader from '../Loader/Loader'

const CourseNavbar = () => {
  const menuItems = ['Home', 'Ongoing', 'Completed']
  const [toShow, setToShow] = useState('Home')
  const [course, setCourse] = useState([])
  const [isLoading, setIsLoading] = useState(false)

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
      <Loader active={isLoading} />
      <div className="flex justify-between items-center w-full border-b-4 border-cornflowerBlue">
        <div className="flex">
          {menuItems.map((item) => (
            <button
              key={item}
              className="text-xl font-medium rounded-md py-4 px-8 hover:bg-gray-100 transition-all duration-300 ease-out"
              onClick={() => setToShow(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <CourseBanner toShow={toShow} course={course} active={isLoading} />
    </>
  )
}

export default CourseNavbar
