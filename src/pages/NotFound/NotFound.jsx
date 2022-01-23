const NotFound = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-nunito text-7xl text-gray-500 text-center mt-10 absolute right-0.5 left-0.5 top-3.5">
          404
        </h1>
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="..."
        ></img>
        <h2 className="font-nunito text-3xl text-center absolute right-0.5 left-0.5 bottom-60">
          Look like you're lost
        </h2>
        <p className="font-nunito text-lg text-center absolute right-0.5 left-0.5 bottom-48 text-gray-500">
          the page you are looking for not avaible!
        </p>
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
