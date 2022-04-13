import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import Footer from '../../components/Footer/Footer.jsx'
import ContactImg from './contact.svg'
import FeedbackImg from './feedback.svg'
import Swal from 'sweetalert2'

const Contact = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const sendFeedback = () => {
    if (firstName === '' || lastName === '' || email === '' || message === '') {
      Swal.fire({
        title: 'Oops...',
        text: 'Please fill in all the fields',
        icon: 'error',
        confirmButtonText: 'Ok',
      })
    } else {
      fetch(`${process.env.REACT_APP_API_URL}/feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${firstName.trim()} ${lastName.trim()}`,
          email,
          message,
        }),
      }).then(() => {
        fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            service_id: process.env.REACT_APP_EMAILJS_SERVICE_ID,
            template_id: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            user_id: process.env.REACT_APP_EMAILJS_USER_ID,
            template_params: {
              name: firstName.trim() + ' ' + lastName.trim(),
              email: email,
              message: message,
            },
          }),
        }).then(
          () => {
            Swal.fire({
              title: 'Thank you!',
              text: 'Your message has been sent',
              icon: 'success',
              confirmButtonText: 'Ok',
            })
            setFirstName('')
            setLastName('')
            setEmail('')
            setMessage('')
          },
          (err) => {
            Swal.fire({
              title: 'Oops...',
              text: 'Something went wrong!',
              icon: 'error',
              confirmButtonText: 'Ok',
            })
          }
        )
      })
    }
  }

  return (
    <>
      <Navbar />
      <section className="pt-24 text-blackOlive md:px-28">
        <div>
          <h1 className='text-5xl font-nunito leading-loose px-5 leading-normal'> Contact Us </h1>
          <hr />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
          <div>
            <div className="flex flex-col items-start md:p-0 p-5">
              <h3 className=" leading-loose text-2xl font-nunito md:pl-5">
                Location Information
              </h3>
              <div className="sm:p-5 p-0">
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

              <div className="sm:px-5 p-0">
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
          <div className="select-none p-5">
            <img src={ContactImg} alt="" />
          </div>
        </div>
      </section>

      <section className="pt-24 md:px-28 text-blackOlive pb-20">
        <div>
          <h1 className="text-5xl font-nunito leading-loose px-5 leading-normal">
            Send us your feedback
          </h1>
          <hr />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center w-full gap-4">
          <div className="select-none p-5">
            <img src={FeedbackImg} width="500px" alt="" />
          </div>
          <div>
            <form className="w-full max-w-lg p-6">
              <div className="flex flex-wrap -mx-3 md:mb-6">
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
                    className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="last-name"
                  >
                    Last Name
                    <input
                      className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 mb-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                      className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 mb-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
              <button
                className="bg-green-500 w-full hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={(e) => {
                  e.preventDefault()
                  sendFeedback()
                }}
              >
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
