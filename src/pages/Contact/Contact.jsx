import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import Footer from '../../components/Footer/Footer.jsx'
import ContactImg from './contact.svg'
import FeedbackImg from './feedback.svg'

const Contact = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <>
      <Navbar />
      <section className="pt-24 px-28 container mx-auto text-blackOlive">
        <div className="divide-y-2">
          <h1 className="text-5xl font-nunito leading-loose">Contact Us</h1>
          <div className="w-full"></div>
        </div>
        <div className="flex w-full">
          <div className=" w-1/2 h-40">
            <div className="flex flex-col items-start p-3">
              <h3 className=" leading-loose text-2xl font-nunito">
                Location Information
              </h3>
              <div className="p-5">
                <p className="text-gray-700">
                  <span className="font-bold leading-loose text-lg">
                    Our Address:
                  </span>
                  <br />

                  <span className="font-normal">
                    121, Clear Water Bay Road <br />
                    Clear Water Bay, <br /> Kowloon HONG KONG
                  </span>
                </p>
              </div>

              <div className="px-5">
                <a href="tel:+852 1234 5678 910">
                  <div className="flex items-center text-gray-700">
                    <FaPhoneAlt />
                    &nbsp; +1 1234 5678 910
                  </div>
                </a>
                <a href="mailto:support@curiomind.com">
                  <div className="flex items-center text-gray-700">
                    <FaEnvelope />
                    &nbsp; support@curiomind.com
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full select-none p-5">
            <img src={ContactImg} alt="" />
          </div>
        </div>
      </section>

      <section className="pt-24 px-28 container mx-auto pb-20">
        <div className="divide-y-2">
          <h1 className="text-5xl font-nunito leading-loose">
            Send us your feedback
          </h1>
          <div className="w-full pb-5"></div>
        </div>
        <div className="flex w-full">
          <div className="w-1/2 h-full select-none p-5">
            <img src={FeedbackImg} width="500px" alt="" />
          </div>
          <div className=" w-1/2 h-40">
            <form className="w-full max-w-lg p-6 ml-20">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0">
                  <label
                    className=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="first-name"
                  >
                    First Name
                    <input
                      className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="first-name"
                      type="text"
                      placeholder="Jane"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </label>
                  <label
                    className=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="last-name"
                  >
                    Last Name
                    <input
                      className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="last-name"
                      type="text"
                      placeholder="Doe"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </label>
                  <label
                    className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                    <input
                      className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                    />
                  </label>
                  <label
                    className=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="feedback"
                  >
                    Feedback
                    <textarea
                      className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="feedback"
                      type="text"
                      placeholder="Your feedback here"
                      style={{ height: '10rem' }}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </label>
                </div>
              </div>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact
