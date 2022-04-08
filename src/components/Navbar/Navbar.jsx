import { Link, useNavigate } from 'react-router-dom'
import { HiUserCircle } from 'react-icons/hi'
import { Fragment,useEffect,useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import './nav-style.css'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const menuItems = [
    'Home',
    'Services',
    'Courses',
    'Testimonial',
    'About',
    'Contact Us',
  ]
  const [navbar, setNavbar] = useState(false)
  const navigate = useNavigate()
  let token = sessionStorage.getItem('token')
  const page = (item) => {
    if (item === 'Contact Us') navigate('/contact')
    else if (item === 'About') navigate('/about-us')
  }
  
  
  //navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true)
    } 
    else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })

  
 
  return (

    
    <div
      className={`${navbar ? 'navbar active ' : 'navbar'} w-full fixed bg-gray-100 backdrop-blur-sm`}
      
      style={{ zIndex: '1' }}
    >
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-start md:items-center text-blackOlive ">
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
            <div key={item} className="text-xl font-medium p-3 md:p-0 nav-btn">
              {item === 'Contact Us' || item === 'About' ? (
                <button onClick={() => page(item)}>{item}</button>
              ) : (
                <a href={`/#${item}`}>{item}</a>
              )}
            </div>
          ))}
        </div>
        <div className="flex p-2">
          {token ? (
            <Menu as="div" className="relative text-blackOlive">
              <Menu.Button>
                <HiUserCircle size={40} className="text-primary" />
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
                <Menu.Items className="origin-top-right absolute right-2 mt-2 w-32  rounded-xl shadow-lg shadow-blackOlive py-2 bg-white">
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
                        <Link
                          to="/dashboard"
                          className={classNames(
                            active ? 'bg-gray-100' : ' ',
                            'px-5 tracking-widest block py-2 text-sm text-gray-900'
                          )}
                        >
                          Dashboard
                        </Link>
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div>
                        <Link
                          onClick={() => {
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
              <div className="login active rounded-full py-3 px-6 bg-cornflowerBlue text-white shadow-sm hover:shadow-md">
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
