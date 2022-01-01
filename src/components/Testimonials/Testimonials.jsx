import Carousel from 'react-elastic-carousel'
import Title from '../Title/Title'
import styles from './asset/Testimonials.module.css'
import testimonials from './Testimonials.json'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
]
const Testimonials = () => {
  return (
    <div className="p-20" id="Testimonial">
      <Title title="Testimonials" desc1="What our customers say" desc2="" />

      <Carousel breakPoints={breakPoints}>
        {testimonials.map((item, index) => (
          <div
            style={{
              backgroundImage: `url(${item.imgUrl})`,
              backgroundSize: 'contain',
            }}
            className={styles.TestimonialsBox}
            key={`${item}${index}`}
          >
            <img
              src="https://www.linkpicture.com/q/Vector-1.svg"
              alt=".."
              className="w-full absolute bottom-0 right-0 rounded-2xl"
            ></img>
            <div className={styles.TestimonialsText}>{item.testimonal}</div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Testimonials
