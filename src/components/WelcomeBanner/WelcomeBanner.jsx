
import CourseCard from '../../components/CourseCard/CourseCard.jsx'
const WelcomeBanner = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 grid-flow-col h-96 py-24 bg-gray-light place-items-center px-2" style={{
        backgroundColor: "rgba(132,226,179,100)"}}>
            <div className="col-span-1">
            <div className="col-span-1 hidden md:inline">
                <img src="https://www.linkpicture.com/q/waving-hand.svg" width={120} heght={120} alt="HeroImage"></img>
                <p className="font-sans-serif-condensed text-5xl mx-auto py-6">
                     Welcome Back!</p>
            </div>
            </div>
            <div>
                    <CourseCard/>
                </div>
        </section>
  )
}

export default WelcomeBanner
