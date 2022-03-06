import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import AboutImg from './aboutimg.svg'
import TeamCard from '../../components/TeamCard/TeamCard'
import team from '../../components/Testimonials/Testimonials.json'
import './about.styles.css';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto pt-24 pb-12 flex justify-center">
        <div
          className="grid md:grid-cols-2 place-items-center text-center py-9 px-8 w-3/4"
          style={{ backgroundColor: 'rgba(121, 150, 208, 0.46)' }}
        >
          <div className="col-span-1 flex flex-col h-full justify-between">
            <div>
              <h1 className="text-5xl font-nunito" style={{ color: '#3F3D56' }}>
                About
              </h1>
              <div className="flex justify-center pt-2">
                <hr className="w-1/4 border-b-2 border-gray-400"></hr>
              </div>
            </div>
            <img src={AboutImg} alt="" style={{ height: '67vh' }} />
          </div>
          <div className="col-span-1 flex items-center bg-white p-14 ">
            <p
              className="text-lg text-left"
              style={{
                fontFamily: 'Pacifico',
                color: 'rgba(118, 118, 118, 1)',
              }}
            >
              Curiomind is your one stop destination for an ultimate online
              learning experience. We offer you with latest technological tools
              to make your learning process smooth and hassle free. Curiomind is
              a initiative to help students get back on track and catch up with
              their academic lives.
              <br />
              <br />
              We offer an array of features including a huge range of courses to
              choose from, each equipped with a series of lectures, assignments,
              and tests. On successful completion of a course, students will
              receive a badge, as a means of encouragement and to provide
              further inspiration.
              <br />
              <br />
              Say goodbye to unproductive days spent scrolling on your phone,
              with Curiomind it’s time for you to level up your skills and take
              a step towards bright career opportunities!
            </p>
          </div>
        </div>
      </div>
      <h1
        className="text-5xl font-nunito flex justify-center"
        style={{ color: '#3F3D56' }}
      >
        Team
      </h1>
      <div className="flex justify-center pb-6 pt-2">
        <hr className="w-1/12 border-b-2 border-gray-400"></hr>
      </div>
      <div className="team-card-div">
        {team.map(({ name, imgUrl }) => (
          <TeamCard name={name} imgUrl={imgUrl} />
        ))}
      </div>
      <Footer />
    </>
  )
}

export default About
