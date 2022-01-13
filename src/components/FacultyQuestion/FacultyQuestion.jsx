import React from 'react'
import AddQuestion from './AddQuestion'
import { useParams } from 'react-router-dom'

function FacultyQuestion() {
  let params = useParams()
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col">
          <div className="flex justify-left text-3xl px-8 py-4 font-nunito">
            Questions
          </div>
        </div>
      </div>
      <AddQuestion courseId={params.id} />
    </>
  )
}

export default FacultyQuestion
