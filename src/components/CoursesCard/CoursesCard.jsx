import styles from './asset/Courses.module.css'

const CoursesCard = ({imgUrl, courseName, courseDetail}) => {
  return (
    <figure className={styles.CoursesBox}>
      <img
        className={styles.CourseImg}
        src={imgUrl}
        alt=""
        width="auto"
        height="512"
      />
      <div className="pt-6 space-y-4">
        <blockquote>
          <p className="text-m font-semibold">{courseName}</p>
        </blockquote>
        <p className="font-medium text-gray-dark">
          {courseDetail}
        </p>
      </div>
    </figure>
  )
}

export default CoursesCard
