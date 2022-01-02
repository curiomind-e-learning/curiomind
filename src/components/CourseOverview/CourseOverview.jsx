import React from 'react'
import { useState } from 'react'
import Card from '../Card/Card'
import Navbar from '../Navbar/Navbar'
import styles from './asset/CourseOverview.module.css'
import profileImg from './asset/profile.svg'

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
  const menuItems = ['Home', 'Services', 'Courses', 'Testimonial', 'Contact us']
  const getPath = (page) => {
    return `/#${page}`
  }
  return (
    <>
      <div className="flex min-h-screen" style={{ fontFamily: 'Nunito' }}>
        <div className="w-64 bg-white border-r border-gray-300">
          <Navbar />
          <div className="flex flex-col py-16 justify-center">
            {sideNavItems.map(({ name, items }) =>
              name === 'Overview' ? (
                <div className=" flex flex-col">
                  <div
                    className="px-6 py-4 w-full text-gray-600 text-xl font-regular hover:text-blue-400 hover:bg-blue-100 transition-all duration-500 ease-in-out"
                    id={styles.navItem}
                  >
                    <button onClick={(e) => setIsVisible(!isVisible)}>
                      {name}
                    </button>
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
                <div className="flex ">
                  <div
                    className="px-6 py-4 w-full text-gray-600 text-xl font-regular hover:text-blue-400 hover:bg-blue-100 transition-all duration-500 ease-in-out"
                    id={styles.navItem}
                  >
                    <a href="/course">{name}</a>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-around mt-4">
            {menuItems.map((item) => (
              <div key={item} className="text-xl font-light">
                <a href={getPath({ item })}>{item}</a>
              </div>
            ))}
            <div className="text-xl text-blue-500 flex flex-row">
              <img
                src={profileImg}
                id={styles.profilePic}
                alt=".."
                width={45}
              ></img>
              <p id={styles.profileName}>John Doe</p>
            </div>
          </div>
          <div id={styles.containerCourse}>
            <div
              className="w-4/5 bg-white rounded-full mx-20"
              style={{ position: 'relative', top: '7.5rem' }}
            >
              <div
                className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-l-full"
                style={{ width: '65%' }}
              >
                {' '}
                65%
              </div>
            </div>
          </div>
          <div className="w-4/5 ml-20 mt-12 text-l font-light text-gray-600">
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
            <div className="grid sm:grid-cols-1 md:grid-cols-1 pl-40 py-6 place-items-left">
              <div style={{ width: '280px' }}>
                <Card
                  imgUrl="https://www.linkpicture.com/q/Vector-2.svg"
                  text="Professor Name Professor Position University Of Something"
                  color="#E7EAC4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseOverview
