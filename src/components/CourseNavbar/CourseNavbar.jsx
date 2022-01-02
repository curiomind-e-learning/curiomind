import { useState } from 'react'
import CourseBanner from '../CourseBanner/CourseBanner'
const CourseNavbar = () => {
  const menuItems = ['Home', 'Ongoing', 'Completed']
  const [toShow, setToShow] = useState('Home')

  return (
    <>
      <div className="flex justify-between items-center text-secondary w-full border-b-4 border-blue-400">
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
      <CourseBanner toShow={toShow} />
    </>
  )
}

export default CourseNavbar
