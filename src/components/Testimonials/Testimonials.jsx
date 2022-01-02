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
            <div className="absolute bottom-0 right-0 ">
              <svg
                width="361"
                height="338"
                viewBox="0 0 250 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M357.838 5.75146C357.838 5.75146 119.005 180.327 3 94.461V214.723V334.986H357.838V5.75146Z"
                  fill="#83C6CF"
                  stroke="#83C6CF"
                  stroke-opacity="0.8"
                  stroke-width="5.6865"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div className={styles.TestimonialsText}>{item.testimonal}</div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Testimonials
