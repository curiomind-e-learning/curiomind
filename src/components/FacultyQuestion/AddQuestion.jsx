import React from 'react'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import Loader from '../Loader/Loader'
import DisplayQuestion from './DisplayQuestion'

export default function AddQuestion({ courseId }) {
  const [isOpen, setIsOpen] = useState(false)
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [options, setOptions] = useState('')
  const [loading, setLoading] = useState(false)
  const [isExam, setIsExam] = useState(false)

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
        answer: answer.trim(),
        options: options.split('#').map((option) => option.trim()),
        course: courseId,
        isExam: isExam,
      }),
    }).then(() => {
      setLoading(false)
      setAnswer('')
      setQuestion('')
      setOptions('')
      setIsOpen(false)
    })
  }

  return (
    <>
      <Loader active={loading} />
      <div className="container mx-auto pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 p-8 gap-4">
          <div className="col-span-1">
            <button
              onClick={() => setIsOpen(true)}
              className="bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Questions
            </button>
          </div>
        </div>
      </div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed z-10 inset-0 overflow-y-auto"
      >
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

        <div
          className="fixed z-10 inset-0 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-0">
                <p className="flex text-2xl p-2 border-b-4 border-gray-500 mb-5 font-nunito">
                  Add Question
                </p>
              </div>
              <form className="bg-white">
                <div className=" px-6 py-1">
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
                <div className=" px-6 py-1">
                  <label className="block text-gray-800 text-sm font-light mb-2">
                    Answer <span className="text-red-500 text-xl">*</span>
                  </label>
                  <input
                    className="shadow appearance-none border text-xs rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    required
                    placeholder="Enter Answer"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                  />
                </div>
                <div className=" px-6 py-1">
                  <label className="block text-gray-800 text-sm font-light mb-2">
                    Options <span className="text-red-500 text-xl">*</span>
                  </label>
                  <input
                    className="shadow appearance-none border text-xs rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    required
                    placeholder="Separate options by #"
                    value={options}
                    onChange={(e) => setOptions(e.target.value)}
                  />
                </div>
                <div className=" px-6 py-1">
                  <label htmlFor="exam">
                    <input
                      type="checkbox"
                      className="mr-2"
                      id="exam"
                      name="exam"
                      value={isExam}
                      defaultChecked={isExam}
                      onClick={() => {
                        setIsExam(!isExam)
                      }}
                    />
                    Exam
                  </label>
                </div>
                <div className="px-6 py-4 flex space-x-2">
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Submit
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Dialog>
      <DisplayQuestion />
    </>
  )
}
