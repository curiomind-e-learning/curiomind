import { Link, useNavigate } from 'react-router-dom'
import { HiUserCircle } from 'react-icons/hi'
import { Fragment, useState, useEffect } from 'react'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const menuItems = ['Home', 'Services', 'Courses', 'Testimonial', 'Contact Us']
  const navigate = useNavigate()

  const getPath = (page) => {
    return `/#${page}`
  }

  let token = sessionStorage.getItem('token')
  const [user, setUser] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`${process.env.REACT_APP_API}/user/profile`, {
        method: 'GET',

        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      })
      result.json().then((data) => {
        setUser(data)
      })
    }
    fetchData()
    return () => {
      setUser({})
    }
  }, [])
  console.log(user.role)
  return (
    <div
      className={`w-full fixed bg-gray-100 backdrop-blur-sm`}
      style={{ zIndex: '1' }}
    >
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-start md:items-center text-secondary">
        <Link to="/">
          <div
            className="leading-loose text-3xl p-3 md:px-8 md:py-0"
            style={{ fontFamily: 'Pacifico' }}
          >
            Curiomind
          </div>
        </Link>
        <div className="flex flex-col md:flex-row md:space-x-14">
          {menuItems.map((item) => (
            <div key={item} className="text-xl font-medium p-3 md:p-0">
              {item === 'Contact Us' ? (
                <button onClick={() => navigate('/contact')}>{item}</button>
              ) : (
                <a href={getPath(item)}>{item}</a>
              )}
            </div>
          ))}
        </div>
        <div className="flex p-2">
          {token ? (
            <Menu as="div" className="relative ">
              <Menu.Button>
                <HiUserCircle size={40} className="text-blue-400" />
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-2 mt-2 w-32  rounded-xl shadow-lg shadow-gray-300 py-2 bg-white">
                  <Menu.Item>
                    {({ active }) => (
                      <div>
                        <Link
                          to="/profile"
                          className={classNames(
                            active ? 'bg-gray-100' : ' ',
                            'px-5 tracking-widest block py-2 text-sm text-gray-900'
                          )}
                        >
                          Profile
                        </Link>
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div>
                        {user.role === 'faculty' ? (
                          <Link
                            to="/faculty-dashboard"
                            className={classNames(
                              active ? 'bg-gray-100' : ' ',
                              'px-5 tracking-widest block py-2 text-sm text-gray-900'
                            )}
                          >
                            Dashboard
                          </Link>
                        ) : (
                          <Link
                            to="/dashboard"
                            className={classNames(
                              active ? 'bg-gray-100' : ' ',
                              'px-5 tracking-widest block py-2 text-sm text-gray-900'
                            )}
                          >
                            Dashboard
                          </Link>
                        )}
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div>
                        <Link
                          onClick={(e) => {
                            sessionStorage.removeItem('token')
                            navigate('/')
                          }}
                          to="/"
                          className={classNames(
                            active ? 'bg-gray-100' : ' ',
                            'px-5 tracking-widest block py-2 text-sm text-gray-900'
                          )}
                        >
                          Logout
                        </Link>
                      </div>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          ) : (
            <Link to="/signin">
              <div className="rounded-full py-3 px-6 bg-purple-400 text-white shadow-sm hover:shadow-md">
                Login
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
