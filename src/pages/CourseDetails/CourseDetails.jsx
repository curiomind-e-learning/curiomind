import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import FacultyQuestion from '../../components/FacultyQuestion/FacultyQuestion'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import EditProfileIcon from '../../components/ProfileDetails/EditProfileIcon.svg'

const CourseDetails = () => {
  const [edit, setEdit] = useState(false)
  const [course, setCourse] = useState({})
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [instructorName, setInstructorName] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [videoUrls, setVideoUrls] = useState([])
  const [id, setId] = useState('')

  const params = useParams()

  const getCourse = useCallback(async () => {
    const res = await fetch(
      `${process.env.REACT_APP_API}/course/${params.id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      }
    )
    const data = await res.json()
    setCourse(data)
    setName(data.name)
    setDescription(data.description)
    setCategory(data.category)
    setInstructorName(data.instructors[0].name)
    setImgUrl(data.imgUrl)
    setId(data._id)
    setVideoUrls(data.videos)
  }, [params.id])

  useEffect(() => {
    getCourse()
    return () => {
      setCourse({})
      setName('')
      setDescription('')
      setCategory('')
      setInstructorName('')
      setId('')
      setImgUrl('')
    }
  }, [getCourse])

  return (
    <>
      <Navbar />
      <div className="grid grid-flow-row grid-cols-2">
        <div className="flex flex-row w-full py-8 items-center justify-center h-80">
          <img className="rounded-full h-36 w-36" src={imgUrl} alt="" />
          <div className="flex flex-col">
            <p
              className="text-3xl text-blue-600 px-6"
              style={{ fontFamily: 'Nunito' }}
            >
              {name}
            </p>

            <p
              className="text-xl py-2 text-blue-400 px-6"
              style={{ fontFamily: 'Nunito' }}
            >
              {category}
            </p>
            <p
              className="text-xl py-2 text-blue-400 px-6"
              style={{ fontFamily: 'Nunito' }}
            >
              {instructorName}
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="block ml-auto justify-between mr-20 mt-40 items-center">
            <button
              className="bg-middleBlueGreen flex items-center justify-evenly text-blackOlive
             font-semibold py-2 px-4 rounded-2xl drop-shadow-sm"
              onClick={() => {
                if (edit) {
                  fetch(`${process.env.REACT_APP_API}/course/${params.id}`, {
                    method: 'PUT',
                    headers: {
                      'Content-Type': 'application/json',
                      Authorization: `Bearer ${sessionStorage.getItem(
                        'token'
                      )}`,
                    },
                    body: JSON.stringify({
                      name,
                      description,
                      category,
                      videos: videoUrls,
                    }),
                  }).then(() => {
                    setEdit(!edit)
                  })
                }
                setEdit(!edit)
              }}
            >
              <img src={EditProfileIcon} style={{ height: '2rem' }} alt="" />
              {edit ? 'Done' : 'Edit Course'}
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col">
          <div
            className="flex justify-left text-3xl px-8 py-4"
            style={{ fontFamily: 'Nunito' }}
          >
            Course Details
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 p-8 gap-4">
          <div className="col-span-1">
            <label
              className="text-md text-gray-400 ml-5"
              style={{ fontFamily: 'Nunito' }}
            >
              Name
            </label>
            <input
              className="rounded-full appearance-none border w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Course Name"
              value={name}
              required
              disabled={!edit}
              onChange={(e) => {
                setCourse({ ...course, name: setName(e.target.value) })
              }}
            />
          </div>
          <div className="col-span-1">
            <label
              className="text-md text-gray-400 ml-5"
              style={{ fontFamily: 'Nunito' }}
            >
              Category
            </label>
            <input
              className="rounded-full appearance-none border w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Email"
              value={category}
              required
              disabled={!edit}
              onChange={(e) => {
                setCourse({ ...course, category: setCategory(e.target.value) })
              }}
            />
          </div>
          <div className="col-span-1">
            <label
              className="text-md text-gray-400 ml-5"
              style={{ fontFamily: 'Nunito' }}
            >
              Description
            </label>
            <textarea
              className="appearance-none border w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Course Description"
              value={description}
              required
              disabled={!edit}
              onChange={(e) => {
                setCourse({
                  ...course,
                  description: setDescription(e.target.value),
                })
              }}
            />
          </div>
          <div className="col-span-1">
            <label
              className="text-md text-gray-400 ml-5"
              style={{ fontFamily: 'Nunito' }}
            >
              Id
            </label>
            <input
              className="rounded-full appearance-none border w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Id"
              value={id}
              required
              disabled
            />
          </div>
          {videoUrls.map((url, idx) => (
            <div className="col-span-1" key={`${params.id}-${idx}`}>
              <label
                className="text-md text-gray-400 ml-5"
                style={{ fontFamily: 'Nunito' }}
              >
                Video Link {idx + 1}
              </label>
              <input
                className="rounded-full appearance-none border w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder={`Video Link ${idx + 1}`}
                value={url}
                required
                disabled={!edit}
                onChange={(e) => {
                  setCourse({
                    ...course,
                    videos: setVideoUrls(
                      videoUrls.map((url, index) =>
                        index === idx ? e.target.value : url
                      )
                    ),
                  })
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <FacultyQuestion />
      <Footer />
    </>
  )
}

export default CourseDetails
