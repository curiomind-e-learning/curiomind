import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    fetch(`${process.env.REACT_APP_API}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        email,
        password,
        name,
        role: 'student',
      }),
    }).then((res) => {
      navigate('/signin')
    })
  }

  return (
    <div class="flex h-screen font-nunito">
      <div class="m-auto grid grid-cols-1 md:grid-cols-2 gap-0 w-2/3 h-3/4">
        <div className="order-last rounded-r-2xl from-blue-700 to-blue-400 bg-gradient-to-tr shadow-2xl">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-center text-white text-3xl font-bold">
              Already a customer?
            </h1>
            <p className="text-center text-white text-xl"> Sign in here</p>
            <Link
              to="/signin"
              className="ring-2 ring-whitecolor text-white rounded-full
              mt-5 py-2 px-4 bg-blue-500 hover:bg-blue-700"
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
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                <div className="col-span-1">
                  <input
                    className="rounded-full appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required="true"
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
                <div className="col-span-1">
                  <input
                    className="appearance-none border rounded-full w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="text-center mt-9">
                {loading ? (
                  <button
                    className="animate-pulse bg-blue-500 hover:bg-blue-700 text-white rounded-full font-bold py-3 px-5 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Register
                  </button>
                ) : (
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white rounded-full font-bold py-3 px-5 focus:outline-none focus:shadow-outline"
                    type="submit"
                    onClick={(e) => {
                      handleSubmit(e)
                    }}
                  >
                    Register
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
