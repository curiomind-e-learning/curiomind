import Image from './asset/Image.svg'

const Banner = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 grid-flow-col py-24 bg-gray-light place-items-center">
            <div className="col-span-1">
                <div>
                    <p className="font-semibold text-5xl mx-auto py-6">
                        An excellence<br />centre for education</p>
                    <p className="font-extralight text-gray-500 text-2xl mx-auto">
                        Curiomind is the online learning platform that offers <br />
                        various courses for your development</p>
                </div>
            </div>
            <div className="col-span-1 hidden md:inline">
                <img src={Image} alt="HeroImage"></img>
            </div>
        </section>
    )
}

export default Banner