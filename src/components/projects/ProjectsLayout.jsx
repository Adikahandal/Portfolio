import Link from 'next/link'
import React from 'react'

const ProjectsLayout = ({name ,description, date , demoLink}) => {
  return (
    <Link
    href={demoLink}
    target={'_blank'}
    className='flex text-sm md:text-md lg:text-base items-center justify-between w-full relative rounded-lg oveflow-hidden p-4 md:p-6 custom-bg2'>
        <div className='flex items-center justify-center space-x-2'>
            <h2 className='text-foreground'>{name}</h2>
            <p className='text-muted hidden sm:inline-block'>{description}</p>
        </div>
        <div className='self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted '/>
        <p className='text-muted sm:text-foreground'>
            {new Date(date).toDateString()}
        </p>
    </Link>
  )
}

export default ProjectsLayout
