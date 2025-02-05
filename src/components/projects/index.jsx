"use client"
import React from 'react'
import ProjectsLayout from './ProjectsLayout'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
      opacity: 1,
      transition: {
          staggerChildren: 0.3,
          delayChildren:1.5,
      }
  }
}
const Projectlist = ({projects}) => {
  return (
    <motion.div 

    variants={container}
    initial="hidden"
    animate="show"
    
    className='w-full  max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8  flex flex-col items-center'>
      {projects.map((project, index)=>{
        return <ProjectsLayout key={index} {...project}/>
      })}
    </motion.div>
  )
}

export default Projectlist
