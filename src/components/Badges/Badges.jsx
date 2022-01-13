import badges from './Badges.json'
const Badges = () => {
  return (
    <section className="select-none container mx-auto py-8">
      <div className="flex flex-col md:flex-row justify-around items-center">
        {badges.map(({ imgUrl, text }) => (
          <div
            className="flex flex-col justify-around items-center p-3 text-blackOlive font-nunito"
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
