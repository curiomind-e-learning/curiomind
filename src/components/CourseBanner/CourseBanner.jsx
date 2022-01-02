import Card from './Card/Card'

const CourseBanner = ({ toShow }) => {
  const getCards = () => {
    switch (toShow) {
      case 'Home':
        return [
          {
            title: 'Introduction to React',
            description: 'Learn how to build a React app from scratch',
            image: 'https://i.imgur.com/7YQQKHx.png',
            link: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
          },
          {
            title: 'Introduction to Vue',
            description: 'Learn how to build a Vue app from scratch',
            image: 'https://i.imgur.com/7YQQKHx.png',
            link: 'https://www.udemy.com/course/vue-the-complete-guide-incl-vuex/',
          },
        ]
      case 'Ongoing':
        return [
          {
            title: 'Ongoing Introduction to React',
            description: 'Ongoing Learn how to build a React app from scratch',
            image: 'https://i.imgur.com/7YQQKHx.png',
            link: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
          },
          {
            title: 'Ongoing Introduction to Vue',
            description: 'Ongoing Learn how to build a Vue app from scratch',
            image: 'https://i.imgur.com/7YQQKHx.png',
            link: 'https://www.udemy.com/course/vue-the-complete-guide-incl-vuex/',
          },
        ]
      case 'Completed':
        return [
          {
            title: 'Completed Introduction to React',
            description:
              'Completed Learn how to build a React app from scratch',
            image: 'https://i.imgur.com/7YQQKHx.png',
            link: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
          },
          {
            title: 'Completed Introduction to Vue',
            description: 'Completed Learn how to build a Vue app from scratch',
            image: 'https://i.imgur.com/7YQQKHx.png',
            link: 'https://www.udemy.com/course/vue-the-complete-guide-incl-vuex/',
          },
        ]
      default:
        return []
    }
  }

  return (
    <section className="bg-gray-light flex flex-col items-center justify-center p-8 space-y-4">
      {getCards().map((card, index) => (
        <Card title={card.title} key={index} />
      ))}
    </section>
  )
}

export default CourseBanner
