import User from './User.svg'
import EditProfileIcon from './EditProfileIcon.svg'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Achievements from '../../components/Achievements/Achievements.jsx'

const Profile = () => {
  const [user, setUser] = useState({})
  const [edit, setEdit] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          `${process.env.REACT_APP_API}/user/profile`,
          {
            method: 'GET',

            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            },
          }
        )
        switch (result.status) {
          case 200:
            result.json().then((data) => {
              setUser(data)
            })
            break
          case 403:
            navigate('/signin')
            break
          default:
          // console.log('error')
        }
      } catch (error) {
        // console.log(error)
      }
    }
    fetchData()
    return () => {
      setUser({})
    }
  }, [navigate])
  return (
    <>
      <div className="grid grid-flow-row grid-cols-2">
        <div className="flex flex-row w-full py-8 items-center justify-center h-80">
          <img
            className="rounded-full"
            style={{ height: '150px', width: 'auto' }}
            src={User}
            alt=""
          />
          <div className="flex flex-col">
            <p
              className="text-3xl text-blue-600 px-6"
              style={{ fontFamily: 'Nunito' }}
            >
              {user.name}
            </p>

            <p
              className="text-xl py-2 text-blue-400 px-6"
              style={{ fontFamily: 'Nunito' }}
            >
              {user.role}
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="block ml-auto justify-between mr-20 mt-40 items-center">
            <button
              className="bg-middleBlueGreen flex items-center justify-evenly text-blackOlive
              font-semibold py-2 px-4 rounded-2xl drop-shadow-sm"
              onClick={(e) => {
                if (edit) {
                  fetch(`${process.env.REACT_APP_API}/user/${user._id}`, {
                    method: 'PUT',
                    headers: {
                      'Content-Type': 'application/json',
                      Authorization: `Bearer ${sessionStorage.getItem(
                        'token'
                      )}`,
                    },
                    body: JSON.stringify({
                      name: user.name,
                      email: user.email,
                      phone: user.phone,
                    }),
                  }).then(() => {
                    setEdit(!edit)
                  })
                }
                setEdit(!edit)
              }}
            >
              <img src={EditProfileIcon} style={{ height: '2rem' }} alt="" />
              {edit ? 'Done' : 'Edit Profile'}
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col">
          <div
            className="flex justify-left text-3xl px-8 py-4"
            style={{ fontFamily: 'Nunito' }}
          >
            Personal Details
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 p-8 gap-4">
          <div className="col-span-1">
            <label
              className="text-md text-gray-400 ml-5"
              style={{ fontFamily: 'Nunito' }}
            >
              Name
            </label>
            <input
              className="rounded-full appearance-none border w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Name"
              value={user.name}
              required
              disabled={!edit}
              onChange={(e) => {
                setUser({ ...user, name: e.target.value })
              }}
            />
          </div>
          <div className="col-span-1">
            <label
              className="text-md text-gray-400 ml-5"
              style={{ fontFamily: 'Nunito' }}
            >
              Email
            </label>
            <input
              className="rounded-full appearance-none border w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
              value={user.email}
              required
              disabled={!edit}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value })
              }}
            />
          </div>
          <div className="col-span-1">
            <label
              className="text-md text-gray-400 ml-5"
              style={{ fontFamily: 'Nunito' }}
            >
              Phone
            </label>
            <input
              className="rounded-full appearance-none border w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="tel"
              placeholder="Phone"
              value={user.phone}
              required
              disabled={!edit}
              onChange={(e) => {
                setUser({ ...user, phone: e.target.value })
              }}
            />
          </div>
          <div className="col-span-1">
            <label
              className="text-md text-gray-400 ml-5"
              style={{ fontFamily: 'Nunito' }}
            >
              Id
            </label>
            <input
              className="rounded-full appearance-none border w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Id"
              value={user._id}
              required
              disabled
            />
          </div>
        </div>
      </div>
      {user.role === 'student' ? <Achievements /> : <></>}
    </>
  )
}

export default Profile
