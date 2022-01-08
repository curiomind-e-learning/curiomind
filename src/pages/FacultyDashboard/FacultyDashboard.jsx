import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FacultyCourse from '../../components/FacultyCourse/FacultyCourse'
import { MdEdit, MdPostAdd } from 'react-icons/md'

const FacultyDashboard = () => {
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

        <div className="flex flex-row justify-evenly space-x-2">
          <Link to="/course-upload">
            <button className=" flex items-center justify-evenly px-5 py-3 rounded-xl bg-white shadow-slate-500 shadow-lg ">
              <MdPostAdd size={25} />
              <span>Upload Course</span>
            </button>
          </Link>
          <Link to="#">
            <button className="flex items-center justify-evenly px-5 py-3 rounded-xl bg-white shadow-slate-500 shadow-lg ">
              <MdEdit size={25} />
              <span>Edit Course</span>
            </button>
          </Link>
        </div>
      </div>
      <FacultyCourse />
      <Footer />
    </>
  )
}

export default FacultyDashboard
