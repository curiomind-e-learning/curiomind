import { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({ courseId }) => {
  const [isVisible, setIsVisible] = useState(false)
  const sideNavItems = [
    { name: 'About' },
    {
      name: 'Overview',
      week: ['1', '2', '3', '4', '5'],
    },
    { name: 'Assignment' },
    { name: 'Exam' },
    { name: 'Grades' },
  ]
  return (
    <div className="py-24">
      {sideNavItems.map(({ name, week }) =>
        name === 'Overview' ? (
          <div key={name}>
            <div className="px-10 py-4 w-full text-gray-600 text-xl rounded-3xl font-regular hover:text-blue-400 hover:bg-blue-100 transition-all duration-500 ease-in-out">
              <div>
                <button onClick={() => setIsVisible(!isVisible)}>{name}</button>
              </div>
            </div>
            {week.map((no) => (
              <Link
                className={
                  isVisible
                    ? 'flex justify-start px-12 py-2 text-slate-400 transition-all duration-500 ease-in-out'
                    : 'hidden text-slate-400'
                }
                to={`/course/${courseId}/week/${no}`}
                key={no}
              >
                Week {no}
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex py-2" key={name}>
            {name === 'About' ? (
              <Link
                to={`/course/${courseId}`}
                className="px-10 py-4 w-full text-gray-600 text-xl font-regular hover:text-blue-400 rounded-3xl hover:bg-blue-100 transition-all duration-500 ease-in-out"
              >
                <div>{name}</div>
              </Link>
            ) : (
              <Link
                to={`/course/${courseId}/${name}`}
                className="px-10 py-4 w-full text-gray-600 text-xl font-regular hover:text-blue-400 rounded-3xl hover:bg-blue-100 transition-all duration-500 ease-in-out"
              >
                <div>{name}</div>
              </Link>
            )}
          </div>
        )
      )}
    </div>
  )
}

export default Sidebar
