import Courses from '../../components/Courses/Courses.jsx'
import Navbar from '../../components/Navbar/Navbar.jsx'
import WelcomeBanner from '../../components/WelcomeBanner/WelcomeBanner.jsx'
import CourseNavbar from '../../components/CourseNavbar/CourseNavbar.jsx'
import Footer from '../../components/Footer/Footer.jsx'

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <WelcomeBanner />
      <CourseNavbar />
      <Courses />
      <Footer />
    </div>
  )
}

export default Dashboard
