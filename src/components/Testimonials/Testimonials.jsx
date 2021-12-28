import Carousel from 'react-elastic-carousel'
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
    <div className="p-20">
      <div className="flex justify-center pt-10 pb-5" id="Testimonial">
        <hr className="w-1/4 border-b-2 border-gray-400" />
      </div>
      <div className="leading-loose flex justify-center text-3xl px-8">
        Testimonials
      </div>

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
