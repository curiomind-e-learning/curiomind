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
import FacultyDashboard from './pages/FacultyDashboard/FacultyDashboard'
import CourseUploadForm from './components/CourseUploadForm/CourseUploadForm'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/course/:id" element={<Course />} />
          <Route path="/course/:id/week/:no" element={<Week />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/course-upload" element={<CourseUploadForm />} />
          <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
