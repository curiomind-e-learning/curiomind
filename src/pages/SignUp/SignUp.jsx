import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
import { GrClose } from 'react-icons/gr'
import Swal from 'sweetalert2'
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setconfirmPassword] = useState('')
  const [role, setRole] = useState('student')
  const [loading, setLoading] = useState(false)
  const [visiblePassword, setVisiblePassword] = useState(false)
  const [visibleconfirmPassword, setVisibleconfirmPassword] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmpassword) {
      Swal.fire({
        title: 'Error!',
        text: 'Password and Confirm Password do not match',
        icon: 'error',
        confirmButtonText: 'Try again',
      }).then(() => setLoading(false))
      setLoading(true)
      fetch(`${process.env.REACT_APP_API}/user/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          role,
        }),
      }).then((response) => {
        setLoading(false)
        if (response.status === 200) {
          navigate('/signin')
        }
      })
    } else {
      alert('Invalid Email !')
    }
  }

  function togglePasswordVisibility() {
    setVisiblePassword(!visiblePassword)
  }
  function toggleconfirmPasswordVisibility() {
    setVisibleconfirmPassword(!visibleconfirmPassword)
  }

  return (
    <section className="overflow-hidden max-h-screen">
      <Loader active={loading} />
      <div className="flex h-screen font-nunito">
        <div className="m-auto grid grid-cols-1 md:grid-cols-2 gap-0 w-2/3 h-3/4">
          <div className="order-last rounded-r-2xl from-gradientBlue to-gradientGreen bg-gradient-to-t shadow-2xl">
            <div className="flex justify-end transform -translate-x-5 translate-y-5">
              <GrClose
                size={20}
                className="cursor-pointer"
                onClick={() => navigate('/')}
              />
            </div>
            <div
              className="flex flex-col justify-center items-center h-full"
              style={{ minHeight: '160px' }}
            >
              <h1 className="text-center text-white text-3xl font-bold">
                Already a User?
              </h1>
              <p className="text-center text-white text-xl"> Sign in here</p>
              <Link
                to="/signin"
                className="ring-2 ring-white text-white rounded-full
              mt-5 py-2 px-4 bg-transparent"
              >
                {' '}
                Sign In
              </Link>
            </div>
          </div>
          <div className="rounded-l-2xl bg-slate-100 shadow-2xl">
            <div className="flex flex-col justify-center items-center h-full">
              <h1 className="text-center font-nunito font-bold text-3xl">
                Register
              </h1>
              <form className="mt-4 p-6 w-3/4">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-3">
                  <div className="col-span-1">
                    <input
                      className="rounded-full appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required={true}
                    />
                  </div>

                  <div className="col-span-1">
                    <input
                      className="rounded-full appearance-none border w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-span-1 password">
                    <input
                      className="appearance-none meinput w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type={!visiblePassword ? 'password' : 'text'}
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <div
                      onClick={togglePasswordVisibility}
                      className="togglebtn"
                    >
                      {!visiblePassword ? (
                        <BsFillEyeSlashFill />
                      ) : (
                        <BsFillEyeFill />
                      )}
                    </div>
                  </div>
                  <div className="col-span-1 password">
                    <input
                      className="appearance-none meinput w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type={!visibleconfirmPassword ? 'password' : 'text'}
                      placeholder="Confirm Password"
                      value={confirmpassword}
                      onChange={(e) => setconfirmPassword(e.target.value)}
                      required
                    />
                    <div
                      onClick={toggleconfirmPasswordVisibility}
                      className="togglebtn"
                    >
                      {!visibleconfirmPassword ? (
                        <BsFillEyeSlashFill />
                      ) : (
                        <BsFillEyeFill />
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="w-full py-3 px-3">
                      <span className="text-gray-600 text-lg">
                        Select Your Role
                      </span>
                      <div className="mt-2">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            className="form-radio"
                            name="Type"
                            value="student"
                            defaultChecked
                            onChange={(e) => setRole(e.target.value)}
                          />
                          <span className="ml-2">Student</span>
                        </label>
                        <label className="inline-flex items-center ml-6">
                          <input
                            type="radio"
                            className="form-radio"
                            name="Type"
                            value="faculty"
                            onChange={(e) => setRole(e.target.value)}
                          />
                          <span className="ml-2">Faculty</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-9">
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white rounded-full font-bold py-2 px-5 focus:outline-none focus:shadow-outline"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Register
                  </button>
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
