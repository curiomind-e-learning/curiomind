import React from 'react'
import { useState, useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import hurrayImg from './hurray.png'

const Grades = () => {
  const [grade, setGrade] = useState({})
  const [isLoading, setisLoading] = useState(false)
  let params = useParams()
  const fetchGrades = useCallback(async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API}/course/score/${params.id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      }
    )
    const data = await response.json()
    setGrade(data)
    setisLoading(false)
    //eslint-disable-next-line
  }, [params])

  useEffect(() => {
    setisLoading(true)
    fetchGrades()
    return () => {
      setGrade({})
      setisLoading(false)
    }
  }, [fetchGrades])

  return (
    <>
      <Loader active={isLoading} />
      <Navbar />
      <div className="grid grid-flow-col grid-cols-5">
        <Sidebar courseId={params.id} />
        <div className="flex flex-col col-span-4 pt-24 border-l-2 pl-5 education-bg">
          <p className="text-5xl font-nunito font-extralight px-10">Grades</p>
          {grade.achievement && (
            <div className="grid grid-cols-2">
              <div className="font-nunito text-blackOlive p-10 pt-36">
                <h1 className="text-3xl">Your Scores:</h1>
                <p className="text-lg text-gray-600 pt-5">
                  Assignment Score: {grade.achievement.score.assignment}
                </p>
                <p className="text-lg text-gray-600">
                  Exam Score: {grade.achievement.score.exam}
                </p>
              </div>
              <img src={hurrayImg} alt="hurray"></img>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Grades
