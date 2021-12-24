import { Link } from 'react-router-dom'

const Navbar = () => {
  const menuItems = ['Home', 'Services', 'Courses', 'Testimonial', 'Contact us']

  const getPath = (page) => {
      return `/#${page}`;
  };
  return (
    <div className={`w-full fixed`} style={{ zIndex: "1" }}>
    <div className="flex justify-between items-center text-secondary overflow-hidden">
      <div
        className="leading-loose text-3xl px-8"
        style={{ fontFamily: 'Pacifico' }}
      >
        Curiomind
      </div>
      <div className="flex space-x-14">
        {menuItems.map((item) => (
          <div key={item} className="text-xl font-light">
            <a href={getPath(item)}>{item}</a>
          </div>
        ))}
      </div>
      <div className="flex space-x-3 p-3">
        <Link to="signin">
          <div className="rounded-full py-3 px-6 bg-purple-400 text-white shadow-sm hover:shadow-md">
            Login
          </div>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default Navbar
