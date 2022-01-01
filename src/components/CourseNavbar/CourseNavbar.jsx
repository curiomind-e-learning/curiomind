
const CourseNavbar = () => {
    const menuItems = ['Home', 'Ongoing', 'Completed']
  return (
    <div className="flex justify-between items-center text-secondary overflow-hidden">
      
      <div className="flex space-x-20" px-40 py-40>
        {menuItems.map((item) => (
          <div key={item} className="text-2xl font-light py-12 px-6">
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseNavbar
