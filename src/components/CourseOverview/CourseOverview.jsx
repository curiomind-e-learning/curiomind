import React from 'react'
import { useState } from 'react'
import Card from '../Card/Card'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import CourseNavbar from '../CourseNavbar/CourseNavbar'

const CourseOverview = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sideNavItems = [
    { name: 'About' },
    {
      name: 'Overview',
      items: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
    },
    { name: 'Assignment' },
    { name: 'Exam' },
    { name: 'Grades' },
  ]
  return (
    <>
      <div className="flex min-h-screen" style={{ fontFamily: 'Nunito' }}>
        <div className="w-2/5 bg-white border-r border-gray-300">
          <Navbar />
          <div className="py-24">
            {sideNavItems.map(({ name, items }) =>
              name === 'Overview' ? (
                <div>
                  <div className="px-10 py-4 w-full text-gray-600 text-xl rounded-3xl font-regular hover:text-blue-400 hover:bg-blue-100 transition-all duration-500 ease-in-out">
                    <div>
                      <button onClick={(e) => setIsVisible(!isVisible)}>
                        {name}
                      </button>
                    </div>
                  </div>
                  {items.map((item) => (
                    <button
                      className={
                        isVisible
                          ? 'flex justify-start px-12 py-2 text-slate-400 transition-all duration-500 ease-in-out'
                          : 'hidden text-slate-400'
                      }
                    >
                      {item}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="flex py-2">
                  <Link
                    to="/course"
                    className="px-10 py-4 w-full text-gray-600 text-xl font-regular hover:text-blue-400 rounded-3xl hover:bg-blue-100 transition-all duration-500 ease-in-out"
                  >
                    <div>{name}</div>
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
        <div className=" mt-20">
          <div className="w-4/5 mx-10 h-40 bg-veryLightBlue rounded-3xl shadow-xl p-10 flex flex-row">
            <div className="w-20 h-20 bg-slate-400 rounded-3xl"></div>
            <div className="font-regular text-2xl px-10 pt-5">Course Name</div>
          </div>
          <div className=" mx-8 text-lg font-light text-gray-600 py-10 flex justify-center p-4">
            A course description is. a short, pithy statement which informs a
            student about the subject matter, approach, breadth, and
            applicability of the course. It focuses on the content. We are
            looking for a list of topics. about 80 words maximum. The course
            description orients students by outlining the rationale for the
            course subject or theme, framing a brief overview of the key
            content, knowledge and skills to be learned and stating the major
            learning strategies and activities that students will experience.
          </div>
          <div>
            <div className="grid sm:grid-cols-1 md:grid-cols-1 ml-36">
              <div style={{ width: '250px' }}>
                <Card
                  imgUrl="https://www.linkpicture.com/q/Vector-2.svg"
                  text="Professor Name Professor Position University Of Something"
                  color="#E7EAC4"
                />
              </div>
            </div>
          </div>
          <div className="py-20">
            <CourseNavbar />
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseOverview
