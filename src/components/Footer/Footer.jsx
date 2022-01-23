import Social from '../Social/Social.jsx'
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {
  const menuItems = ['Services', 'About', 'Courses', 'Contact Us']
  const navigate = useNavigate()
  const page = (item) => {
    if (item === 'Contact Us') navigate('/contact')
    else if (item === 'About') navigate('/about-us')
  }
  const socialUrls = {
    instaUrl: 'https://github.com/curiomind-e-learning',
    fbUrl: 'https://github.com/curiomind-e-learning',
    twitterUrl: 'https://github.com/curiomind-e-learning',
  }
  return (
    <div className="w-full bottom-0 flex items-center justify-center bg-gray-200 text-cornflowerBlue">
      <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
        <div className="flex flex-col">
          <div className="flex mt-24 mb-12 flex-row justify-between items-center">
            <Link
              to="/"
              className="text-4xl text-cornflowerBlue"
              style={{ fontFamily: 'Pacifico' }}
            >
              Curiomind
            </Link>

            {menuItems.map((item) => (
              <div className="hidden md:block cursor-pointer text-cornflowerBlue hover:opacity-80">
                {item === 'Contact Us' || item === 'About' ? (
                  <button onClick={() => page(item)}>{item}</button>
                ) : (
                  <a href={`/#${item}`}>{item}</a>
                )}
              </div>
            ))}

            <div className="flex flex-row space-x-8 items-center justify-between">
              <Social {...socialUrls} />
            </div>
          </div>
          <hr className="border-cornflowerBlue leading-loose text-cornflowerBlue" />
          <p className="w-full text-center my-12 text-cornflowerBlue">
            Copyright © 2021 Curiomind. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
