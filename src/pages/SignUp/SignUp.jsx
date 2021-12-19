import './asset/SignUp.css'
import './asset/SignUp.js'
const SignUp = () => {
  return (
    <div className='mainContainer'>
        <div className='container' id='container'>
            <div className='formContainer signupContainer'>
                <form action='#'>
                    <h1 className='font-light text-gray-900 text-3xl pb-5'>Register</h1>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Register</button>
                    <div className='socials'>
                        <img src="https://www.linkpicture.com/q/entypo-social_facebook-with-circle_1.svg" width={40}  alt=".."></img>
                        <img src="https://www.linkpicture.com/q/flat-color-icons_google_1.svg" width={40} alt=".."></img>
                        <img src="https://www.linkpicture.com/q/ant-design_twitter-circle-filled_1.svg" width={40} alt=".."></img>
                    </div>
                </form>
            </div>
            <div className='formContainer signinContainer'>
                <form>
                    <h1 className='font-light text-gray-900 text-3xl pb-5'>Login</h1>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Login</button>
                    <div className='socials'>
                        <img src="https://www.linkpicture.com/q/entypo-social_facebook-with-circle_1.svg" width={40} alt=".."></img>
                        <img src="https://www.linkpicture.com/q/flat-color-icons_google_1.svg" width={40} alt=".."></img>
                        <img src="https://www.linkpicture.com/q/ant-design_twitter-circle-filled_1.svg" width={40} alt=".."></img>
                    </div>
                </form>
            </div>
            <div className='overlayContainer'>
                <div className='overlay'>
                    <div className='overlayPanel overlayLeft'>
                        <h1 className='text-3xl pb-7'>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="ghost" id="signIn">Login</button>
                        </div>
                    <div className='overlayPanel overlayRight'>
                        <h1 className='text-3xl pb-7'>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button className="ghost" id="signUp">Register</button>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default SignUp
