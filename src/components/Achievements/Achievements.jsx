import { useEffect, useState } from 'react'
import Card from './Card/Card'

const Achievements = () => {
  const [achievements, setAchievements] = useState([{}, {}])
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // setLoading(true)
        const result = await fetch(`${process.env.API_URL}/achievements`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        })
        const data = await result.json()
        if (result.status === 200) {
          setAchievements(data)
        }
        // setLoading(false)
      } catch (error) {
        // setError(true)
      }
    }
    fetchData()
    return () => {
      setAchievements([])
      // setLoading(true)
      // setError(false)
    }
  }, [])

  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col">
        <div className="flex justify-left text-3xl px-8 pb-2">Achievements</div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 grid-flow-row p-8 place-items-center">
        {achievements.map(({ courseName, category }, index) => (
          <Card
            courseName={courseName}
            key={`${courseName}-${index}`}
            category={category}
          />
        ))}
      </div>
    </div>
  )
}

export default Achievements
