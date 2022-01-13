import { useState } from 'react'
import storage from '../../firebase/firebase.config.js'
import Loader from '../../components/Loader/Loader'

import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import Navbar from '../Navbar/Navbar.jsx'
import Footer from '../Footer/Footer.jsx'

const CourseUploadForm = () => {
  // const [isSubmit, setIsSubmit] = useState(false)
  // const [image, setImage] = useState(null)
  const [imgUrl, setImgUrl] = useState('')
  const [video1Url, setVideo1Url] = useState('')
  const [video2Url, setVideo2Url] = useState('')
  const [video3Url, setVideo3Url] = useState('')
  const [video4Url, setVideo4Url] = useState('')
  const [video5Url, setVideo5Url] = useState('')
  const [courseName, setCourseName] = useState('')
  const [courseCategory, setCourseCategory] = useState('')
  const [courseDescription, setCourseDescription] = useState('')
  const [loading, setLoading] = useState(false)

  const uploadFileAndSubmit = async (file, setFile) => {
    if (file === null) {
      return
    }
    setLoading(true)
    const storageRef = ref(storage, `files/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Get task progress
        // const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        // console.log('Upload is ' + progress + '% done')
        // switch (snapshot.state) {
        //   case 'paused':
        //     console.log('Upload is paused')
        //     break
        //   case 'running':
        //     console.log('Upload is running')
        //     break
        //   default:
        //     break
        // }
      },
      (error) => {
        setLoading(false)
        alert(error.message)
      },
      () => {
        // Handle successful uploads on complete
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFile(downloadURL)
          setLoading(false)
        })
      }
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
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
        imgUrl: imgUrl,
        videos: [video1Url, video2Url, video3Url, video4Url, video5Url],
      }),
    }).then(() => {
      setLoading(false)
      // setIsSubmit(true)
      alert('Course Uploaded Successfully')
    })
  }

  return (
    <>
      <Loader active={loading} />
      <Navbar />
      <div className="w-2/5 m-auto py-28">
        <p className="flex justify-center text-2xl p-2 border-b-4 border-cornflowerBlue mb-5 font-nunito">
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
              Course Description <span className="text-red-500 text-xl">*</span>
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
              Image Url <span className="text-red-500 text-xl">*</span>
            </label>
            <input
              className="shadow appearance-none text-xs border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              type="file"
              required
              placeholder="Enter Image Url"
              accept="image/*"
              onChange={(e) => {
                uploadFileAndSubmit(e.target.files[0], setImgUrl)
              }}
            />
          </div>
          <label className="block text-gray-900 text-sm font-light mb-2">
            WEEK VIDEOS <span className="text-red-500 text-xl">*</span>
          </label>
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-light mb-2">
              Week 1 Video
            </label>
            <input
              className="shadow appearance-none text-xs border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              type="file"
              required
              placeholder="Enter Image Url"
              accept="video/*"
              onChange={(e) => {
                e.target.files[0] &&
                  uploadFileAndSubmit(e.target.files[0], setVideo1Url)
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-light mb-2">
              Week 2 Video
            </label>
            <input
              className="shadow appearance-none text-xs border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              type="file"
              required
              placeholder="Enter Image Url"
              accept="video/*"
              onChange={(e) => {
                e.target.files[0] &&
                  uploadFileAndSubmit(e.target.files[0], setVideo2Url)
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-light mb-2">
              Week 3 Video
            </label>
            <input
              className="shadow appearance-none text-xs border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              type="file"
              placeholder="Enter Image Url"
              accept="video/*"
              required
              onChange={(e) => {
                e.target.files[0] &&
                  uploadFileAndSubmit(e.target.files[0], setVideo3Url)
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-light mb-2">
              Week 4 Video
            </label>
            <input
              className="shadow appearance-none text-xs border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              type="file"
              required
              placeholder="Enter Image Url"
              accept="video/*"
              onChange={(e) => {
                e.target.files[0] &&
                  uploadFileAndSubmit(e.target.files[0], setVideo4Url)
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-light mb-2">
              Week 5 Video
            </label>
            <input
              className="shadow appearance-none text-xs border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              type="file"
              required
              placeholder="Enter Image Url"
              accept="video/*"
              onChange={(e) =>
                e.target.files[0] &&
                uploadFileAndSubmit(e.target.files[0], setVideo5Url)
              }
            />
          </div>

          <div className="flex items-center justify-around">
            <button
              className="bg-blue-800 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default CourseUploadForm
