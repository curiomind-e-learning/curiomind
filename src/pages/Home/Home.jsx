import React from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Banner from '../../components/Banner/Banner.jsx'
import Badges from '../../components/Badges/Badges.jsx'
import Cards from '../../components/Cards/Cards.jsx'
import Courses from '../../components/Courses/Courses.jsx'
import Testimonials from '../../components/Testimonials/Testimonials.jsx'
import Footer from '../../components/Footer/Footer.jsx'

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Badges />
      <Cards />
      <Courses />
      <Testimonials />
      <Footer />
    </>
  )
}

export default Home
