import { Link } from 'react-router-dom'
// import logo from './asset/logo.png'
const Navbar = () => {
  const menuItems = ['Home', 'Services', 'About', 'Courses', 'Contact us']
  return (
    <div className="flex justify-between items-center text-secondary overflow-hidden">
      <div
        className="leading-loose text-3xl px-8"
        style={{ fontFamily: 'Pacifico' }}
      >
        Curiomind
      </div>
      {/* <div>
        <img src={logo} width={100} alt="logoImage"></img>
      </div> */}
      <div className="flex space-x-14">
        {menuItems.map((item) => (
          <div key={item} className="text-xl font-light">
            {item}
          </div>
        ))}
      </div>
      <div className="flex space-x-3 p-3">
        <Link to="signin">
          <div className="rounded-full py-3 px-6 bg-purple-400 text-white">
            Login
          </div>
        </Link>
        {/* <div className="rounded-full py-3 px-6 bg-purple-400 text-white">
          Sign Up
        </div> */}
      </div>
    </div>
  )
}

export default Navbar
