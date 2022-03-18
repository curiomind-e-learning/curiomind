const NotFound = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-nunito text-7xl text-gray-500 text-center mt-10 z-10">
          404
        </h1>
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="..."
          className="sm:-mt-20"
        ></img>
        <div className="-mt-10 sm:-mt-20 md:-mt-36 mb-5">
          <h2 className="font-nunito text-3xl text-center">
            Look like you're lost
          </h2>
          <p className="font-nunito text-lg text-center text-gray-500">
            the page you are looking for not avaible!
          </p>
        </div>
        <a href="/" className="cursor-pointer">
          <button className="bg-green-500 hover:bg-green-600 text-white font-nunito w-32 h-90 p-3">
            Go to Home
          </button>
        </a>
      </div>
    </div>
  )
}

export default NotFound
