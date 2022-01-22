import { IoMdCompass } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { MdEdit, MdPostAdd } from 'react-icons/md'
import CourseNavbar from '../CourseNavbar/CourseNavbar'

const WelcomeBanner = () => {
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
      <div className="flex flex-row justify-around items-center h-96 bg-middleBlueGreen text-black">
        <div className="flex flex-row items-center justify-center">
          <img
            width={'70px'}
            src="https://www.linkpicture.com/q/waving-hand.svg"
            alt="HeroImage"
          />
          <p className="font-nunito text-4xl p-3">Welcome Back {user.name} !</p>
        </div>

        {user.role === 'faculty' ? (
          <div className="flex flex-row justify-evenly space-x-2">
            <Link to="/course-upload">
              <button className=" flex items-center justify-evenly px-5 py-3 rounded-xl bg-white shadow-slate-500 shadow-lg ">
                <MdPostAdd size={25} />
                <span>Upload Course</span>
              </button>
            </Link>
            <a href={'#editcourses'}>
              <button className="flex items-center justify-evenly px-5 py-3 rounded-xl bg-white shadow-slate-500 shadow-lg ">
                <MdEdit size={25} />
                <span>Edit Courses</span>
              </button>
            </a>
          </div>
        ) : (
          <div className="flex flex-col w-1/3 rounded-2xl items-center bg-white">
            <p className="w-full text-2xl p-6 border-b-4 border-cornflowerBlue text-blackOlive">
              Set your learning paths
            </p>
            <div className="self-start flex items-center p-6">
              <IoMdCompass className="text-cornflowerBlue text-3xl font-nunito" />
              <Link to="/allcourses">
                <p className="p-2 font-semibold text-cornflowerBlue">
                  Explore Courses
                </p>
              </Link>
            </div>
          </div>
        )}
      </div>
      {user.role === 'faculty' ? <></> : <CourseNavbar />}
    </>
  )
}

export default WelcomeBanner
