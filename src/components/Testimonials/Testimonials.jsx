import Carousel from 'react-elastic-carousel'
import Title from '../Title/Title'
import styles from './asset/Testimonials.module.css'
import testimonials from './Testimonials.json'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
]
const Testimonials = () => {
  return (
    <div className="p-20" id="Testimonial">
      <Title title="Testimonials" desc1="What our customers say" desc2="" />

      <Carousel breakPoints={breakPoints}>
        {testimonials.map((item, index) => (
          <div className={styles.TestimonialsBox} key={`${item}${index}`}>
            <div className={styles.TestimonialsText}>{item.testimonal}</div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Testimonials
