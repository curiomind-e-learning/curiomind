// import CourseCard from '../../components/CourseCard/CourseCard.jsx'
import { IoMdCompass } from 'react-icons/io'
import { Link } from 'react-router-dom'
const WelcomeBanner = () => {
  return (
    <div
      className="flex flex-row justify-around items-center h-96 pt-64 pb-56"
      style={{ backgroundColor: '#C4D1EA' }}
    >
      <div className="flex flex-row items-center justify-center">
        <img
          width={'100px'}
          src="https://www.linkpicture.com/q/waving-hand.svg"
          alt="HeroImage"
        />
        <p className="font-nunito text-5xl p-3">Welcome Back!</p>
      </div>

      <div className="flex flex-col w-1/3 rounded-2xl items-center bg-white">
        <p className="w-full text-2xl p-6 border-b-4 border-blue-500">
          Set your learning paths
        </p>
        <div className="self-start flex items-center p-6">
          <IoMdCompass className="text-blue-500 text-3xl font-nunito" />
          <Link to="/courses">
            <p className="p-2 font-semibold">Explore Courses</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default WelcomeBanner
