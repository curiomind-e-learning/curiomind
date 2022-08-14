import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const CoursesCard = ({
  imgUrl,
  courseName,
  courseDetail,
  courseId,
  edit = false,
}) => {
  return (
    <figure className="max-w-sm shadow-md h-full rounded-md flex flex-col justify-between font-nunito dark:border-[#5090D3] border-2">
      <img
        src={imgUrl}
        className="h-36 object-cover rounded-md"
        alt={courseName}
      />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {courseName}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {courseDetail}
        </p>
        <Link
          to={!edit ? `/course/${courseId}` : `/edit/course/${courseId}`}
          className="inline-flex items-center py-2 px-3 text-sm font-medium rounded-md text-center text-black border-2 border-gray-600 dark:border-[#5090D3] dark:text-[#5090D3] transition-all duration-200 ease-in-out"
        >
          {!edit ? 'Read more' : 'Edit'}
          &nbsp;
          <FaArrowRight />
        </Link>
      </div>
    </figure>
  )
}

export default CoursesCard
