import badges from './Badges.json'
const Badges = () => {
  return (
    <>
    <div className="flex justify-around items-center text-secondary" >
        {badges.map(({imgUrl,text}) =>(
            <div key={text}>
                <img src={imgUrl} alt="badge"></img>
                <br/>
                    {text}
            </div>
        ))}
    </div>
    </>
  )
}

export default Badges
