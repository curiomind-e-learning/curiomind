import React from 'react'
import Card from '../Card/Card'
import styles from './asset/CourseOverview.module.css'
import profileImg from './asset/profile.svg'

const CourseOverview = () => {
    const sideNavItems = ['About','Overview', 'Assignment', 'Exam', 'Grades']
    const menuItems = ['Home', 'Services', 'Courses', 'Testimonial', 'Contact us']
    const getPath = (page) => {
        return `/#${page}`;
    };
    return (
        <>
            <div className='flex min-h-screen' style={{fontFamily:'Nunito'}}>
                <div className='w-64 bg-white border-r border-gray-300'>
                    <div className="leading-loose text-3xl px-8 text-secondary" style={{ fontFamily: 'Pacifico' }}>Curiomind</div>
                    {sideNavItems.map((e)=>(
                        <div className='mt-12 flex'>
                            <div 
                                className='ml-9 px-6 py-2 text-gray-600 text-xl font-regular' 
                                id={styles.navItem}>
                            <a href='/course'>{e}</a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex-1'>
                    <div className="flex justify-around mt-4">
                        {menuItems.map((item) => (
                              <div key={item} className="text-xl font-light">
                                <a href={getPath({item})}>{item}</a>
                            </div>
                        ))}
                        <div className='text-xl text-blue-500 flex flex-row'>
                            <img src={profileImg} id={styles.profilePic} alt=".." width={45} ></img>
                            <p id={styles.profileName}>John Doe</p>
                        </div>
                    </div>
                    <div id={styles.containerCourse}> 
                        <div className="w-4/5 bg-white rounded-full mx-20" style={{position:'relative', top:'7.5rem'}}>
                            <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-l-full" style={{width:'65%'}}> 65%</div>
                        </div>
                    </div>
                    <div className='w-4/5 ml-20 mt-12 text-l font-light text-gray-600'>
                        A course description is. a short, pithy statement which informs a student about 
                        the subject matter, approach, breadth, and applicability of the course. It focuses 
                        on the content. We are looking for a list of topics. about 80 words maximum. The course 
                        description orients students by outlining the rationale for the course subject or theme, 
                        framing a brief overview of the key content, knowledge and skills to be learned and stating the 
                        major learning strategies and activities that students will experience.
                    </div>
                    <div>
                    <div className="grid sm:grid-cols-1 md:grid-cols-1 pl-40 py-6 place-items-left">
                        <div style={{ width: '280px'}}>
                            <Card imgUrl="https://www.linkpicture.com/q/Vector-2.svg" text="Professor Name Professor Position University Of Something" color="#E7EAC4" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CourseOverview
