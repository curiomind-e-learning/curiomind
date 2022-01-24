import React, { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'

const CourseExam = () => {
  const [assignment, setAssignment] = useState([])
  const [isLoading, setisLoading] = useState(false)
  let params = useParams()
  let score = 0

  const getCourseDetails = useCallback(async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API}/assignment/e/${params.id}`,
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
    //eslint-disable-next-line
  }, [params])

  useEffect(() => {
    setisLoading(true)
    getCourseDetails()
    return () => {
      setAssignment([])
      setisLoading(false)
    }
  }, [getCourseDetails])

  const checkAnswers = async (score) => {
    await fetch(
      `${process.env.REACT_APP_API}/course/update/score/${params.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          score: {
            exam: score,
          },
        }),
      }
    )

    if (!alert(`Your Score is ${score}`)) {
      window.location.reload()
    }
  }

  return (
    <>
      <Loader active={isLoading} />
      <Navbar />
      <div className="grid grid-flow-col grid-cols-5">
        <Sidebar courseId={params.id} />
        <div className="flex flex-col col-span-4 pt-24 border-l-2 pl-5 education-bg">
          <p className="text-5xl font-nunito font-extralight px-10">Exam</p>
          <div className="w-full py-5 px-16">
            {assignment &&
              assignment.map((no, key) => (
                <React.Fragment key={no._id}>
                  <div className="text-gray-900 text-xl py-5 font-nunito">
                    {key + 1}) {no.question}
                  </div>
                  <div className="mt-2 flex flex-col">
                    {no.options.map((questionOpt, idx) => (
                      <label
                        className="inline-flex items-center"
                        key={`${questionOpt}-${idx}`}
                      >
                        <input
                          type="radio"
                          className="form-radio"
                          name={no.question}
                          value={questionOpt}
                          onChange={() =>
                            no.answer === questionOpt ? score++ : null
                          }
                        />
                        <span className="text-gray-500 ml-2 font-nunito">
                          {questionOpt}
                        </span>
                      </label>
                    ))}
                  </div>
                </React.Fragment>
              ))}
          </div>
          <button
            className="flex justify-center text-center py-2 m-10 rounded-xl hover:bg-green-900  text-xl w-36 h-10 bg-green-700 text-white font-nunito"
            onClick={() => checkAnswers(score)}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </>
  )
}

export default CourseExam
