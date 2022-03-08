import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const Social = ({ instaUrl, twitterUrl, fbUrl }) => {
  return (
    <div className="flex items-center ml-8 justify-center space-x-4">
      {fbUrl ? (
        <a href={fbUrl} rel="noreferrer" target="_blank">
          {/* <img
            className="px-5"
            src="https://www.linkpicture.com/q/Vector-1_1.svg"
            alt=""
            width="70px"
          /> */}
          <FaFacebook className='text-3xl text-blue-500 transform hover:scale-150 transition duration-500 ease-in-out' />
        </a>
      ) : null}
      {instaUrl ? (
        <a href={instaUrl} rel="noreferrer" target="_blank">
          {/* <img
            className="px-5"
            src="https://www.linkpicture.com/q/akar-icons_instagram-fill.svg"
            alt=""
            width="70px"
          /> */}
          <FaTwitter className='text-3xl text-sky-400 transform hover:scale-150 transition duration-500 ease-in-out' />
        </a>
      ) : null}
      {twitterUrl ? (
        <a href={twitterUrl} rel="noreferrer" target="_blank">
          {/* <img
            className="px-5 text-blue-500"
            src="https://www.linkpicture.com/q/akar-icons_twitter-fill.svg"
            alt=""
            width="70px"
          /> */}
          <img className='h-10 w-10 transform hover:scale-150 transition duration-500 ease-in-out rounded-full' src="https://img.icons8.com/fluency/48/000000/instagram-new.png"/>
        </a>
      ) : null}
    </div>
  )
}

export default Social
