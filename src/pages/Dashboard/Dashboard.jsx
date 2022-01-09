import Courses from '../../components/Courses/Courses.jsx'
import Navbar from '../../components/Navbar/Navbar.jsx'
import WelcomeBanner from '../../components/WelcomeBanner/WelcomeBanner.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import { useEffect, useState } from 'react'
import FacultyCourse from '../../components/FacultyCourse/FacultyCourse.jsx'

const Dashboard = () => {
  const [user, setUser] = useState([])
  const getName = async () => {
    const res = await fetch(`${process.env.REACT_APP_API}/user/profile/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
    })
    const data = await res.json()
    setUser(data)
  }

  useEffect(() => {
    getName()
    return () => {
      setUser({})
    }
  }, [])
  return (
    <div>
      <Navbar />
      <WelcomeBanner />
      {user.role === 'faculty' ? <FacultyCourse /> : <Courses />}

      <Footer />
    </div>
  )
}

export default Dashboard
