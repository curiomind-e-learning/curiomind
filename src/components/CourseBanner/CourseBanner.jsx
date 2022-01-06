import Card from './Card/Card'

const CourseBanner = ({ toShow, course }) => {
  const getCards = () => {
    switch (toShow) {
      case 'Home':
        return course.slice(0, 1)
      case 'Ongoing':
        return course
      case 'Completed':
        return course
      default:
        return []
    }
  }

  return (
    <section className="bg-gray-light flex flex-col items-center justify-center p-8 space-y-4">
      {course && course.length > 0 ? (
        getCards().map((card) => (
          <Card title={card.course.name} key={card._id} />
        ))
      ) : (
        <div className="text-3xl font-nunito leading-relaxed text-gray-700">
          No enrolled courses
        </div>
      )}
    </section>
  )
}

export default CourseBanner
