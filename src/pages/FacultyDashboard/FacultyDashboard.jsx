import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FacultyCourse from '../../components/FacultyCourse/FacultyCourse'

const FacultyDashboard = () => {
  const [user, setUser] = useState([])
  const navigate = useNavigate()
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
    <>
      <Navbar />
      <div
        className="flex flex-row justify-around items-center h-96 "
        style={{ backgroundColor: '#C4D1EA' }}
      >
        <div className="flex flex-row items-center justify-center">
          <img
            width={'70px'}
            src="https://www.linkpicture.com/q/waving-hand.svg"
            alt="HeroImage"
          />
          <p className="font-nunito text-4xl p-3">Welcome Back {user.name} !</p>
        </div>

        <div className="flex flex-row">
          <button
            className="p-3 mx-2 mb-4 w-36 rounded-xl bg-white shadow-slate-500 shadow-lg "
            onClick={(e) => navigate('/course-upload')}
          >
            Upload Course
          </button>
          <button className="p-3 mb-4 mx-2 w-36 rounded-xl bg-white shadow-slate-500 shadow-lg ">
            Edit Course
          </button>
        </div>
      </div>
      <FacultyCourse />
      <Footer />
    </>
  )
}

export default FacultyDashboard
