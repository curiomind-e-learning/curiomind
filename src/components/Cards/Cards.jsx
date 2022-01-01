import Card from '../Card/Card'
import CardContent from './Cards.json'
import Title from '../Title/Title'
const Cards = () => {
  return (
    <section>
      <Title
        title="Why choose Curiomind?"
        desc1="We offer a wide range of opportunity for you."
        desc2="See what you’ll get and your benefits"
      />
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-0 grid-flow-row place-items-center p-8">
        {CardContent.map(({ imgUrl, text, color }) => (
          <div className="p-2" style={{ width: '20rem' }} key={text}>
            <Card imgUrl={imgUrl} text={text} color={color} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Cards
