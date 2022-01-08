import { useState } from 'react'
import storage from '../../firebase/firebase.config.js'
import Loader from '../../components/Loader/Loader'

import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

const CourseUploadForm = () => {
  const [image, setImage] = useState(null)
  const [courseName, setCourseName] = useState('')
  const [courseCategory, setCourseCategory] = useState('')
  const [courseDescription, setCourseDescription] = useState('')
  const [loading, setLoading] = useState(false)

  const uploadFileAndSubmit = async () => {
    if (image == null) {
      return
    }
    setLoading(true)
    const storageRef = ref(storage, `files/${image.name}`)
    const uploadTask = uploadBytesResumable(storageRef, image)

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Get task progress
        // const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        // console.log('Upload is ' + progress + '% done')
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused')
            break
          case 'running':
            console.log('Upload is running')
            break
          default:
            break
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          fetch(`${process.env.REACT_APP_API}/course`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            },
            body: JSON.stringify({
              name: courseName,
              category: courseCategory,
              description: courseDescription,
              imgUrl: downloadURL,
            }),
          }).then(() => {
            setLoading(false)
            alert('Course Uploaded Successfully')
          })
        })
      }
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    uploadFileAndSubmit()
  }

  return (
    <>
      <Loader active={loading} />
      <div className="w-2/5 m-auto py-28">
        <p className="flex justify-center text-2xl p-2 border-b-4 border-blue-500 mb-5 font-nunito">
          UPLOAD COURSE
        </p>
        <form className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 border-2 border-gray-200">
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-light mb-2">
              Name of Course <span className="text-red-500 text-xl">*</span>
            </label>
            <input
              className="shadow appearance-none border text-xs rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              required
              placeholder="Enter Course Name"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-light mb-2">
              Course Category <span className="text-red-500 text-xl">*</span>
            </label>
            <input
              className="shadow appearance-none border text-xs rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              required
              placeholder="Enter Course Category"
              value={courseCategory}
              onChange={(e) => setCourseCategory(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800  text-sm font-light mb-2">
              Course Descriptiom
            </label>
            <input
              className="shadow appearance-none border text-xs rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              required
              placeholder="Enter Course Description"
              value={courseDescription}
              onChange={(e) => setCourseDescription(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-light mb-2">
              Image Url
            </label>
            <input
              className="shadow appearance-none text-xs border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              type="file"
              required
              placeholder="Enter Image Url"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default CourseUploadForm
