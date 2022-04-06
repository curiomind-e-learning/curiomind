import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import Dashboard from './pages/Dashboard/Dashboard'
import SignUp from './pages/SignUp/SignUp'
import SignIn from './pages/SignIn/SignIn'
import Profile from './pages/Profile/Profile'
import Course from './pages/Course/Course'
import Contact from './pages/Contact/Contact'
import Week from './components/Week/Week'
import CourseUploadForm from './components/CourseUploadForm/CourseUploadForm'
import AllCourses from './pages/AllCourses/AllCourses'
import CourseDetails from './pages/CourseDetails/CourseDetails'
import CourseAssignment from './pages/CourseAssignment/CourseAssignment'
import CourseExam from './pages/CourseExam/CourseExam'
import Grades from './pages/Grades/Grades'
import Forbidden from './pages/Forbidden/Forbidden'
import About from './pages/About/About'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/403" element={<Forbidden />} />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/course/:id" element={<Course />} />
          <Route path="/course/:id/assignment" element={<CourseAssignment />} />
          <Route path="/course/:id/Exam" element={<CourseExam />} />
          <Route path="/course/:id/Grades" element={<Grades />} />
          <Route path="/course/:id/week/:no" element={<Week />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/course-upload" element={<CourseUploadForm />} />
          <Route path="/allcourses" element={<AllCourses />} />
          <Route path="/edit/course/:id" element={<CourseDetails />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
