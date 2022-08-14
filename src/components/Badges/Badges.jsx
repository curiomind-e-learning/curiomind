import badges from './Badges.json'
const Badges = () => {
  return (
    <section className="select-none md:px-20 mx-auto py-8 dark:bg-[#001E3C]">
      <div className="flex flex-col w-full md:flex-row justify-around items-center">
        {badges.map(({ imgUrl, text }) => (
          <div
            className="flex flex-col justify-around items-center p-3 text-blackOlive font-nunito dark:text-whitish"
            key={text}
            style={{ lineHeight: '3' }}
          >
            <img src={imgUrl} alt="badge"></img>
            <br />
            {text}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Badges
