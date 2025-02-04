import React from 'react'
import ProjectsLayout from './ProjectsLayout'

const Projectlist = ({projects}) => {
  return (
    <div className='w-full  max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8  flex flex-col items-center'>
      {projects.map((project, index)=>{
        return <ProjectsLayout key={index} {...project}/>
      })}
    </div>
  )
}

export default Projectlist
