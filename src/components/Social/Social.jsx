import { FaFacebook, FaTwitter } from 'react-icons/fa'

const Social = ({ instaUrl, twitterUrl, fbUrl }) => {
  return (
    <div className="flex items-center ml-8 justify-center space-x-4">
      {fbUrl ? (
        <a href={fbUrl} rel="noreferrer" target="_blank">
          <FaFacebook className='text-3xl text-blue-500 transform hover:animate-bounce transition duration-500 ease-in-out' />
        </a>
      ) : null}
      {instaUrl ? (
        <a href={instaUrl} rel="noreferrer" target="_blank">
          <FaTwitter className='text-3xl text-sky-400 transform hover:animate-bounce transition duration-500 ease-in-out' />
        </a>
      ) : null}
      {twitterUrl ? (
        <a href={twitterUrl} rel="noreferrer" target="_blank">
          <img className='h-10 w-10 transform hover:animate-bounce transition duration-500 ease-in-out rounded-full' src="https://img.icons8.com/fluency/48/000000/instagram-new.png" alt='' />
        </a>
      ) : null}
    </div>
  )
}

export default Social
