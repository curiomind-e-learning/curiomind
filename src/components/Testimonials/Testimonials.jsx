import Carousel from 'react-elastic-carousel'
import Card from '../Card/Card'
import Title from '../Title/Title'
import testimonials from './Testimonials.json'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
]
const Testimonials = () => {
  return (
    <div className="p-20" id="Testimonial">
      <Title title="Testimonials" desc1="What our users say..." desc2="" />

      <Carousel breakPoints={breakPoints}>
        {testimonials.map(({ imgUrl, testimonal }) => (
          <div
            className="p-2"
            style={{
              width: '21rem',
              padding: '1rem',
            }}
            key={testimonal}
          >
            <Card
              imgUrl={imgUrl}
              text={testimonal}
              color="#94D1BE"
              imgRadius="rounded-full"
              quotes
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Testimonials
