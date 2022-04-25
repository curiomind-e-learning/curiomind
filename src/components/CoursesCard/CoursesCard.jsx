const CoursesCard = ({ imgUrl, courseName, courseDetail }) => {
  return (
    <figure className="flex bg-whitish h-36 max-w-sm rounded-3xl items-center shadow-lg shadow-gray-400 font-nunito">
      <img className="h-full w-36 rounded-3xl p-4" src={imgUrl} alt="" />
      <div className="space-y-4 p-2">
        <blockquote>
          <p className="text-lg">{courseName}</p>
        </blockquote>
        <p className="text-base text-gray-dark">{courseDetail}</p>
      </div>
    </figure>
  )
}

export default CoursesCard
