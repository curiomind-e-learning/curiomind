import { Link } from 'react-router-dom'
import Card from './Card/Card'

const CourseBanner = ({ toShow, course, active }) => {
  const getCards = () => {
    switch (toShow) {
      case 'Home':
        return course.slice(0, 1)
      case 'Ongoing':
        return course.filter((item) => item.isCompleted === false)
      case 'Completed':
        return course.filter((item) => item.isCompleted === true)
      default:
        return []
    }
  }

  return (
    <section className="bg-gray-light flex flex-col items-center justify-center p-8 space-y-4">
      {course && course.length > 0 ? (
        getCards().map((card) => (
          <Link
            key={card._id}
            to={`/course/${card.course._id}`}
            className="w-full"
          >
            <Card title={card.course.name} courseId={card.course._id} />
          </Link>
        ))
      ) : (
        <>
          {active ? (
            <div className="text-3xl font-nunito leading-relaxed text-gray-700">
              Loading...
            </div>
          ) : (
            <div className="text-3xl font-nunito leading-relaxed text-gray-700">
              No enrolled courses
            </div>
          )}
        </>
      )}
    </section>
  )
}

export default CourseBanner
