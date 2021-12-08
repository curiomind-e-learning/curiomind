const Navbar = () => {
  const menuItems = ['Home', 'Services', 'About', 'Courses', 'Contact us']
  return (
    <div className="flex justify-between items-center text-secondary">
      <div
        className="leading-loose text-3xl px-8"
        style={{ fontFamily: 'Pacifico' }}
      >
        Curiomind
      </div>
      <div className="flex space-x-14">
        {menuItems.map((item) => (
          <div key={item} className="text-lg">
            {item}
          </div>
        ))}
      </div>
      <div className="px-8">
        <div className="rounded-full py-3 px-6 bg-purple-400 text-white">
          Login
        </div>
      </div>
    </div>
  )
}

export default Navbar
