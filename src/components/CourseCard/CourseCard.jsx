import CardContent from './CourseCard.json'
import Card from '../Card/Card'

const CourseCard = () => {
  return (
    <div>
      {CardContent.map(({ imgUrl, text, color }) => (
        <div style={{ width: '200px' }} key={text}>
          <Card imgUrl={imgUrl} text={text} color={color} />
        </div>
      ))}
    </div>
  )
}

export default CourseCard
