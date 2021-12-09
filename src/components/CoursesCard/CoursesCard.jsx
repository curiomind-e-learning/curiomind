const CoursesCard = ({imgUrl, courseName, couseDetail}) => {
  return (
    <figure style={{backgroundColor:"#F7F7F7"}} className="shadow-lg rounded-3xl p-8 shadow-xl w-100 h-30">
      <img
        className="rounded-full mx-auto"
        src={imgUrl}
        alt=""
        width="auto"
        height="512"
      />
      <div className="pt-6  text-center space-y-4">
        <blockquote>
          <p className="text-lg font-semibold">{courseName}</p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-gray-dark">{couseDetail}</div>
        </figcaption>
      </div>
    </figure>
  )
}

export default CoursesCard
