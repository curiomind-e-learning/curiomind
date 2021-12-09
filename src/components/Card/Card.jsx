const Card = ({ imgUrl, text }) => {
    return (
        <figure className="rounded-3xl p-8 border-solid border-4 border-black">
            <img
                className="w-30 h-30 mx-auto"
                src={imgUrl}
                alt=""
                width="auto"
                height="auto"
            />
            <div className="pt-6 text-center space-y-4">
                <blockquote>
                    <p className="text-lg font-light">{text}</p>
                </blockquote>
            </div>
        </figure>
    )
}

export default Card
