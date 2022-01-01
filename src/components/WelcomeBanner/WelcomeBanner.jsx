
import CourseCard from '../../components/CourseCard/CourseCard.jsx'
const WelcomeBanner = () => {
  return (
    <div
      className="flex flex-row justify-around py-20"
      style={{
        backgroundColor: 'rgba(132,226,179,100)',
      }}
    >
      <div>
        <img
          src="https://www.linkpicture.com/q/waving-hand.svg"
          width={120}
          height={120}
          alt="HeroImage"
        ></img>
        <p className="font-sans-serif-condensed text-5xl py-6">Welcome Back!</p>
      </div>
      <div>
        <CourseCard />
      </div>
    </div>
  )
}

export default WelcomeBanner
