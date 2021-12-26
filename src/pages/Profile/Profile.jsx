import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Achievements from '../../components/Achievements/Achievements'
import ProfileDetails from '../../components/ProfileDetails/ProfileDetails'

const Profile = () => {
  return (
    <>
      <Navbar />
      <ProfileDetails />
      <Achievements />
      <Footer />
    </>
  )
}

export default Profile
