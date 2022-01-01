import Courses from '../../components/Courses/Courses.jsx'
import Navbar from '../../components/Navbar/Navbar.jsx'
import CourseBanner from '../../components/CourseBanner/CourseBanner.jsx'
import WelcomeBanner from '../../components/WelcomeBanner/WelcomeBanner.jsx'
import CourseNavbar from '../../components/CourseNavbar/CourseNavbar.jsx'

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <WelcomeBanner />
      <CourseNavbar />
      <CourseBanner />
      <Courses />
    </div>
  )
}

export default Dashboard
