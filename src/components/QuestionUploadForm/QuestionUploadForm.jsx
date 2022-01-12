import { useState } from 'react'
import Loader from '../../components/Loader/Loader'
import Navbar from '../Navbar/Navbar.jsx'
import Footer from '../Footer/Footer.jsx'
import { useParams } from 'react-router-dom'
const QuestionUploadForm = () => {
  const params = useParams()
  console.log(params.id)
  const [option1, setOption1] = useState('')
  const [option2, setOption2] = useState('')
  const [option3, setOption3] = useState('')
  const [option4, setOption4] = useState('')
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [used, setUsed] = useState(true)
  const [loading, setLoading] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`${process.env.REACT_APP_API}/assignment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        question: question,
        answer: answer,
        isExam: used,
        options: [option1, option2, option3, option4],
        course: params.id,
      }),
    }).then(() => {
      setLoading(false)
      setAnswer('')
      setQuestion('')
      setOption1('')
      setOption2('')
      setOption3('')
      setOption4('')
      window.alert('Uploaded Successfully. Upload Another')
    })
  }
  return (
    <>
      <Loader active={loading} />
      <Navbar />
      <div className="w-2/5 m-auto py-28">
        <p className="flex justify-center text-2xl p-2 border-b-4 border-blue-500 mb-5 font-nunito">
          UPLOAD QUESTION
        </p>
        <form className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 border-2 border-gray-200">
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-light mb-2">
              Question <span className="text-red-500 text-xl">*</span>
            </label>
            <input
              className="shadow appearance-none border text-xs rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              required
              placeholder="Enter Question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-light mb-2">
              Answer <span className="text-red-500 text-xl">*</span>
            </label>
            <input
              className="shadow appearance-none border text-xs rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              required
              placeholder="Enter Course Category"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>
          <label className="block text-gray-900  text-sm font-light mb-2">
            OPTIONS <span className="text-red-500 text-xl">*</span>
          </label>
          <div className="mb-4">
            <label className="block text-gray-800  text-sm font-light mb-2">
              Option 1
            </label>
            <input
              className="shadow appearance-none border text-xs rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              required
              placeholder="Enter Course Description"
              value={option1}
              onChange={(e) => setOption1(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800  text-sm font-light mb-2">
              Option 2
            </label>
            <input
              className="shadow appearance-none border text-xs rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              required
              placeholder="Enter Course Description"
              value={option2}
              onChange={(e) => setOption2(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800  text-sm font-light mb-2">
              Option 3
            </label>
            <input
              className="shadow appearance-none border text-xs rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              required
              placeholder="Enter Course Description"
              value={option3}
              onChange={(e) => setOption3(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800  text-sm font-light mb-2">
              Option 4
            </label>
            <input
              className="shadow appearance-none border text-xs rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              required
              placeholder="Enter Course Description"
              value={option4}
              onChange={(e) => setOption4(e.target.value)}
            />
          </div>
          <label className="block text-gray-900  text-sm font-light mb-2">
            UPLOAD QUESTIONS FOR?{' '}
            <span className="text-red-500 text-xl">*</span>
          </label>
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="Type"
                value="true"
                defaultChecked
                onChange={(e) => setUsed(e.target.value)}
              />
              <span className="ml-2">Exam</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                className="form-radio"
                name="Type"
                value="false"
                onChange={(e) => setUsed(e.target.value)}
              />
              <span className="ml-2">Assignment</span>
            </label>
          </div>

          <div className="flex items-center justify-around">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={handleSubmit}
            >
              ADD
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default QuestionUploadForm
