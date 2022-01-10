import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
const CourseAssignment = () => {
  const [assignment, setAssignment] = useState([])
  const [isLoading, setisLoading] = useState(false)
  let params = useParams()

  const getCourseDetails = async () => {
    setisLoading(true)
    const response = await fetch(
      `${process.env.REACT_APP_API}/assignment/${params.id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      }
    )
    const data = await response.json()
    setAssignment(data)
    console.log(assignment)
    setisLoading(false)
  }

  useEffect(() => {
    getCourseDetails()
    return () => {
      setAssignment([])
      setisLoading(false)
    }
  }, [])

  return (
    <div>
      <div className="w-full py-3 px-3">
        <span className="text-gray-600 text-lg">{assignment.question}</span>
        <div className="mt-2 flex flex-col">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio"
              name="Type"
              value="1"
              defaultChecked
            />
            <span className="ml-2">1</span>
          </label>
          <label className="inline-flex items-center">
            <input type="radio" className="form-radio" name="Type" value="2" />
            <span className="ml-2">2</span>
          </label>
          <label className="inline-flex items-center">
            <input type="radio" className="form-radio" name="Type" value="3" />
            <span className="ml-2">3</span>
          </label>
          <label className="inline-flex items-center">
            <input type="radio" className="form-radio" name="Type" value="4" />
            <span className="ml-2">4</span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default CourseAssignment
