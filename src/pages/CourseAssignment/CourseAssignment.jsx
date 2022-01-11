import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
const CourseAssignment = () => {
  const [assignment, setAssignment] = useState([])
  const [isLoading, setisLoading] = useState(false)
  let params = useParams()
  let score = 0

  const getCourseDetails = useCallback(async () => {
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
  }, [params])

  useEffect(() => {
    setisLoading(true)
    getCourseDetails()
    return () => {
      setAssignment([])
      setisLoading(false)
    }
  }, [getCourseDetails])

  const checkAnswers = (score) => {
    if (!alert(`Your Score is ${score}`)) {
      window.location.reload()
    }
  }

  return (
    <>
      <Loader active={isLoading} />
      <div>
        <div className="flex justify-center text-center pt-5 text-3xl underline font-nunito">
          ASSIGNMENT
        </div>
        <div className="w-full py-5 px-16">
          {assignment &&
            assignment.map((no, key) => (
              <>
                <div className="text-gray-900 text-xl py-5 font-nunito">
                  {key + 1}) {no.question}
                </div>
                <div className="mt-2 flex flex-col">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      value={no.options[0]}
                      onChange={(e) => {
                        no.answer === no.options[0]
                          ? score++
                          : console.log(score)
                      }}
                    />
                    <span className="text-gray-500 ml-2 font-nunito">
                      {no.options[0]}
                    </span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      value={no.options[1]}
                      onChange={(e) => {
                        no.answer === no.options[1]
                          ? score++
                          : console.log(score)
                      }}
                    />
                    <span className="text-gray-500 ml-2 font-nunito">
                      {no.options[1]}
                    </span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      value={no.options[2]}
                      onChange={(e) => {
                        no.answer === no.options[2]
                          ? score++
                          : console.log(score)
                      }}
                    />
                    <span className="text-gray-500 ml-2 font-nunito">
                      {no.options[2]}
                    </span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      value={no.options[3]}
                      onChange={(e) => {
                        no.answer === no.options[3]
                          ? score++
                          : console.log(score)
                      }}
                    />
                    <span className="text-gray-500 ml-2 font-nunito">
                      {no.options[3]}
                    </span>
                  </label>
                </div>
              </>
            ))}
        </div>
        <button
          className="flex justify-center text-center py-2 m-10 rounded-xl hover:bg-green-900  text-xl w-36 h-10 bg-green-700 text-white font-nunito"
          onClick={(e) => checkAnswers(score)}
        >
          SUBMIT
        </button>
      </div>
    </>
  )
}

export default CourseAssignment
