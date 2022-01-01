import CoursesCard from '../CoursesCard/CoursesCard'
import Title from '../Title/Title'
import courses from './Courses.json'

const Courses = () => {
  return (
    <div id="Courses">
      <Title
        title="Explore Courses"
        desc1="Build career-relevant skills"
        desc2="with courses from top industry experts"
      />
      {/* <div className="flex justify-center font-extralight text-center text-gray-500 text-xl px-8 py-5">
            We offer a wide range of opportunity for you. See <br/> what you’ll get and your benefits
        </div> */}
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 grid-flow-row px-8 py-10 place-items-center">
        {courses.map(({ imgUrl, courseName, courseDetail }, index) => (
          <div style={{ width: '270px' }} key={`${courseName}${index}`}>
            <CoursesCard
              imgUrl={imgUrl}
              courseName={courseName}
              courseDetail={courseDetail}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Courses
