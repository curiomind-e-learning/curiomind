import { Link, useNavigate } from 'react-router-dom'
import { HiUserCircle } from 'react-icons/hi'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const menuItems = ['Home', 'Services', 'Courses', 'Testimonial', 'Contact us']
  const navigate = useNavigate()
  let token = sessionStorage.getItem('token')

  const getPath = (page) => {
    return `/#${page}`
  }

  return (
    <div
      className={`w-full fixed bg-white backdrop-blur-sm`}
      style={{ zIndex: '1' }}
    >
      <div className="flex justify-between items-center text-secondary ">
        <Link to="/">
          <div
            className="leading-loose text-3xl px-8"
            style={{ fontFamily: 'Pacifico' }}
          >
            Curiomind
          </div>
        </Link>
        <div className="flex space-x-14">
          {menuItems.map((item) => (
            <div key={item} className="text-xl font-medium">
              <a href={getPath(item)}>{item}</a>
            </div>
          ))}
        </div>
        <div className="flex p-2">
          {token ? (
            <Menu as="div" className="relative">
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
                <Menu.Items className="origin-top-right absolute right-2 mt-2 w-32  rounded-xl shadow-lg shadow-gray-300 py-2">
                  <Menu.Item>
                    {({ active }) => (
                      <div>
                        <Link
                          to="/profile"
                          className={classNames(
                            active ? 'bg-gray-100' : ' ',
                            'text-center tracking-widest block py-2 text-sm text-gray-900'
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
                        <Link
                          onClick={(e) => {
                            sessionStorage.removeItem('token')
                            navigate('/')
                          }}
                          to="/signin"
                          className={classNames(
                            active ? 'bg-gray-100' : ' ',
                            'text-center tracking-widest block py-2 text-sm text-gray-900'
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
