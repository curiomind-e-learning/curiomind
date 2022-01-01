
const CourseBanner = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 grid-flow-col py-24 bg-gray-light place-items-center" style={{
        backgroundColor: 'pink'}}>
            <div className="col-span-1">
            <img src="https://www.linkpicture.com/q/book-_1.svg" width={200} height={400} alt=""></img>
            </div>
            <div className="col-span-1 hidden md:inline">
            <div>
                    <p className="font-extralight text-black-500 text-3xl mx-auto ">
                        Database Management System <br/>
                        Period: 12 Weeks
                        </p>
                </div>
             
            </div>
        </section>
  )
}

export default CourseBanner

