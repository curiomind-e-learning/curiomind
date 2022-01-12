import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const QuestionUpload = () => {
  const [courseid, setCourseid] = useState('')
  const navigate = useNavigate()
  return (
    <div className="w-2/5 m-auto py-28">
      <p className="flex justify-center text-2xl p-2 border-b-4 border-blue-500 mb-5 font-nunito">
        ENTER YOUR GENERATED COURSE ID
      </p>
      <form className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 border-2 border-gray-200">
        <div className="mb-4">
          <label className="block text-gray-800 text-sm font-light mb-2">
            Course ID <span className="text-red-500 text-xl">*</span>
          </label>
          <input
            className="shadow appearance-none border text-xs rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            required
            placeholder="Enter Course ID"
            value={courseid}
            onChange={(e) => setCourseid(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={(e) => navigate(`/question-upload/${courseid}`)}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default QuestionUpload
