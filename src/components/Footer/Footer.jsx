import styles from './asset/Footer.module.css'
import Socials from '../Socials/Socials.jsx'
const Footer = () => {
  return (
      <footer className="grid-flow-row pt-6" id={styles.footerStyle}>
        <div className='flex'>
            <img src='https://www.linkpicture.com/q/address.svg' alt='location'></img>
            <div className='text-xl pt-4 px-4'>Mountain View, California, United States</div>
        </div>
        <div className='flex'>
            <img src='https://www.linkpicture.com/q/ci_phone.svg' alt='phone'></img>
            <div className='text-xl pt-4 px-4'>236734792700208</div>
        </div>
        <div className={styles.footerStyle}>
            <div className={styles.footerBottom}>
            <div className={styles.text}>Privacy Policy | Terms of use | Honor Code</div>
                <div className="grid place-items-end">
                        <div className="flex justify-self-end self-end">
                            <div className='text-2xl' style={{"marginTop":10}}>Follow us on:</div>
                            <Socials
                                fbUrl="https://twitter.com/dscciem"
                                instaUrl="https://www.linkedin.com/company/gdsc-ciem"
                                twitterUrl="https://www.instagram.com/dscciem/"
                            />
                        </div>
                    </div>
                </div>
            </div>
      </footer>
  )
}

export default Footer
