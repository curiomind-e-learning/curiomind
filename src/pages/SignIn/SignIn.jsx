import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
import { GrClose } from 'react-icons/gr'
import Swal from 'sweetalert2'
import "./Signin.css"
import {BsFillEyeFill,BsFillEyeSlashFill} from "react-icons/bs"

const SignUp = () => {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false)
  const [visible,setVisible] = useState(false);

  const {email, password} = inputValues;

  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    fetch(`${process.env.REACT_APP_API}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          sessionStorage.setItem('token', data.token)
        })
        Swal.fire({
          title: 'Successful',
          text: 'You will be logged in few seconds',
          icon: 'success',
          confirmButtonText: 'OK',
        }).then(() =>
          setTimeout(() => {
            navigate('/dashboard')
          }, 500)
        )
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Invalid username or password',
          icon: 'error',
          confirmButtonText: 'Try again',
        }).then(() => setLoading(false))
      }
    })
  }

  const handleInputChange = (e) => {
    const {name, value} = e.target;

    setInputValues({
      ...inputValues,
      [name]: value
    });
  }

  function togglePasswordVisibility(){
    setVisible(!visible);
  }

  return (
    <section className="overflow-hidden max-h-screen">
      <Loader active={loading} />
      <div className="flex h-screen font-nunito">
        <div className="m-auto grid grid-cols-1 md:grid-cols-2 gap-0 w-2/3 h-3/4">
          <div className="rounded-l-2xl from-gradientBlue to-gradientGreen bg-gradient-to-t shadow-2xl">
            <div className="flex flex-col justify-center items-center h-full">
              <h1 className="text-center text-white text-3xl font-bold">
                Hello, There!
              </h1>
              <p className="text-center text-white text-xl">
                Start your learning journey with us
              </p>
              <Link
                to="/signup"
                className="ring-2 ring-white text-white rounded-full
              mt-5 py-2 px-4 bg-transparent"
              >
                {' '}
                Register
              </Link>
            </div>
          </div>
          <div className="rounded-r-2xl bg-slate-100 shadow-2xl">
            <div className="flex justify-end transform -translate-x-5 translate-y-5">
              <GrClose
                size={20}
                className="cursor-pointer"
                onClick={(e) => navigate('/')}
              />
            </div>
            <div className="flex flex-col justify-center items-center h-full">
              <h1 className="text-center font-nunito font-bold text-3xl">
                Login
              </h1>
              <form className="mt-4 p-6 w-3/4">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                  <div className="col-span-1">
                    <input
                      name="email"
                      className="rounded-full appearance-none border w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="email"
                      placeholder="Email"
                      value={inputValues.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-span-1 password">
                    <input
                      name="password"
                      className=" appearance-none meinput w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type={!visible?"password":"text"}
                      placeholder="Password"
                      value={inputValues.password}
                      onChange={handleInputChange}
                      required
                    />
                    <button onClick={togglePasswordVisibility} className="togglebtn appearance-none leading-tight focus:outline-none focus:shadow-outline">
                        {!visible ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                    </button>
                  </div>
                </div>

                <div className="text-center mt-9">
                  {loading ? (
                    <button
                      className="animate-pulse bg-green-500 hover:bg-green-700 text-white rounded-full font-bold py-2 px-5 focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Sign In
                    </button>
                  ) : (
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white rounded-full font-bold py-2 px-5 focus:outline-none focus:shadow-outline"
                      type="submit"
                      onClick={(e) => {
                        handleSubmit(e)
                      }}
                    >
                      Sign In
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignUp
