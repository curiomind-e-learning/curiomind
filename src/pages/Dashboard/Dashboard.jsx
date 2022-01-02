import Courses from '../../components/Courses/Courses.jsx'
import Navbar from '../../components/Navbar/Navbar.jsx'
import WelcomeBanner from '../../components/WelcomeBanner/WelcomeBanner.jsx'
import CourseNavbar from '../../components/CourseNavbar/CourseNavbar.jsx'

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <WelcomeBanner />
      <CourseNavbar />
      <Courses />
    </div>
  )
}

export default Dashboard
