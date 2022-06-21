const Card = ({ imgUrl, text, color, imgRadius, quotes }) => {
  // Adding buffer text so that Tailwind add classes during build time, Tailwind is not capable of picking classes from string concatenation
  // You can pass values as 'bg-red-900' but that will consume more space as well as time
  
  // let bufferText =
  //   'text-emerald-900 border-emerald-900 bg-emerald-200 text-rose-900 border-rose-900 bg-rose-200 text-fuchsia-900 border-fuchsia-900 bg-fuchsia-200 text-zinc-900 border-zinc-900 bg-zinc-200'
  
  return (
    <figure
      className={`rounded-3xl p-8 border-solid border-4 font-nunito text-${color}-900 border-${color}-900 bg-${color}-200`}
    >
      <img
        className={`w-30 h-30 mx-auto ${imgRadius}`}
        src={imgUrl}
        alt=""
        width="auto"
        height="auto"
      />
      <div className="pt-6 text-center space-y-4">
        <blockquote>
          <p className="text-lg font-light antialiased">
            {quotes ? (
              <>
                <span className="text-5xl">“</span>
                {text}
                <span className="text-5xl inline-block w-full justify-end text-right">
                  ”
                </span>
              </>
            ) : (
              text
            )}
          </p>
        </blockquote>
      </div>
    </figure>
  )
}

export default Card
