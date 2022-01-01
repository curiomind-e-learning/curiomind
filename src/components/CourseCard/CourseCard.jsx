import CardContent from './CourseCard.json'
import Card from '../Card/Card'

const CourseCard = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 grid-flow-row px-8 py-10 place-items-center">
        {CardContent.map(({ imgUrl, text, color }) => (
          <div style={{ width: '320px' }} key={text}>
            <Card imgUrl={imgUrl} width={120} text={text} color={color} />
          </div>
        ))}
      </div>
  )
}

export default CourseCard
