import { Github, Home, Linkedin, NotebookText, FolderKanban, Phone, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import ResponsiveComponent from '../ResponsiveComponent'
import clsx from 'clsx'


const getIcon = (icon) => {
    switch (icon) {
        case "home":
            return <Home strokeWidth={1.5} />

        case "about":
            return <User strokeWidth={1.5} />

        case "projects":
            return <FolderKanban strokeWidth={1.5} />

        case "contact":
            return <Phone strokeWidth={1.5} />

        case "github":
            return <Github strokeWidth={1.5} />

        case "linkedin":
            return <Linkedin strokeWidth={1.5} />

        case "resume":
            return <NotebookText strokeWidth={1.5} />

        default:
            return <Home strokeWidth={1.5} />
    }
}

const NavButton = ({ x, y, link, label, icon, newTab,labelDirection="right" }) => {
    return (
        <ResponsiveComponent>

            {({ size }) => {
                return size && size >= 500 ?
                    (<div className='absolute cursor-pointer z-50' style={{ transform: `translate(${x},${y})` }}>
                        <Link
                            href={link}
                            target={newTab ? '_blank' : '_self'}
                            className='text-foreground rounded-full flex items-center justify-center custom-bg1'
                            aria-label={label}
                            name={label}
                        >
                            <span className="relative w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause hover:text-accent">

                                {getIcon(icon)}

                                <span className='peer bg-transparent absolute top-0 left-0 w-full h-full '></span>
                                <span className='absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap'>
                                    {label}
                                </span>

                            </span>
                        </Link>
                    </div>
                    ) : (
                    <div className='w-fit py-3 cursor-pointer z-50'>
                        <Link
                            href={link}
                            target={newTab ? '_blank' : '_self'}
                            className='text-foreground rounded-full flex items-center justify-center custom-bg1'
                            aria-label={label}
                            name={label}
                        >
                            <span className="relative w-10 h-10  xs:w-14 xs:h-14 p-2 xs:p-4 hover:text-accent">

                                {getIcon(icon)}

                                <span className='peer bg-transparent absolute top-0 left-0 w-full h-full '/>

                                <span className={clsx('absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap',labelDirection === "left"? "right-full left-auto":"")}>
                                    {label}
                                </span>

                            </span>
                        </Link>
                    </div>)

            }}


        </ResponsiveComponent>
    )
}

export default NavButton
