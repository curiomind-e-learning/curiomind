import { Link } from 'react-router-dom'
import { HiUserCircle } from 'react-icons/hi'

const Navbar = () => {
  const menuItems = ['Home', 'Services', 'Courses', 'Testimonial', 'Contact us']
  const token = sessionStorage.getItem('token')

  const getPath = (page) => {
    return `/#${page}`
  }

  return (
    <div className={`w-full fixed backdrop-blur-sm`} style={{ zIndex: '1' }}>
      <div className="flex justify-between items-center text-secondary overflow-hidden">
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
        <div className="flex space-x-3 p-3">
          {token ? (
            <Link to="/profile">
              <div className="">
                <HiUserCircle size={40} className="text-blue-400" />
              </div>
            </Link>
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
