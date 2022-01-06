import React from 'react'
import { useState } from 'react'
import Card from '../Card/Card'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer.jsx'

const CourseOverview = ({ courseName, instructorName, description, id }) => {
  const [isVisible, setIsVisible] = useState(false)
  const sideNavItems = [
    { name: 'About' },
    {
      name: 'Overview',
      week: ['1', '2', '3', '4', '5', '6'],
    },
    { name: 'Assignment' },
    { name: 'Exam' },
    { name: 'Grades' },
  ]
  return (
    <>
      <div className="flex min-h-screen" style={{ fontFamily: 'Nunito' }}>
        <div className="w-1/4 bg-white border-r border-gray-300">
          <div className="py-24">
            {sideNavItems.map(({ name, week }) =>
              name === 'Overview' ? (
                <div>
                  <div className="px-10 py-4 w-full text-gray-600 text-xl rounded-3xl font-regular hover:text-blue-400 hover:bg-blue-100 transition-all duration-500 ease-in-out">
                    <div>
                      <button onClick={(e) => setIsVisible(!isVisible)}>
                        {name}
                      </button>
                    </div>
                  </div>
                  {week.map((no) => (
                    <Link
                      className={
                        isVisible
                          ? 'flex justify-start px-12 py-2 text-slate-400 transition-all duration-500 ease-in-out'
                          : 'hidden text-slate-400'
                      }
                      to={`/course/${id}/week/${no}`}
                    >
                      Week {no}
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="flex py-2">
                  <Link
                    to={`/course/${id}`}
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
            <div className="font-regular text-2xl px-10 pt-5">{courseName}</div>
          </div>
          <div className=" mx-8 text-lg font-light text-gray-600 py-10 flex justify-center p-4">
            {description}
          </div>
          <div>
            <div className="grid sm:grid-cols-1 md:grid-cols-1 ml-36">
              <div style={{ width: '250px' }}>
                <Card
                  imgUrl="https://www.linkpicture.com/q/Vector-2.svg"
                  text={instructorName[0].name}
                  color="#E7EAC4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CourseOverview
