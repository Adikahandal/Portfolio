import { Github, Home, Linkedin, NotebookText, FolderKanban, Phone, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


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

const NavButton = ({ x, y, link, label, icon, newTab }) => {
    return (
        <div className='absolute cursor-pointer z-50' style={{ transform: `translate(${x},${y})` }}>
            <Link
                href={link}
                target={newTab ? '_blank' : '_self'}
                className='text-foreground rounded-full flex items-center justify-center   bg-background/20 border border-accent/30 backdrop-blur-[6px] shadow-glass-inset hover:shadow-glass-sm'
                aria-label={label}
                name={label}
            >
                <span className="relative p-4">{getIcon(icon)}</span>
            </Link>

        </div>
    )
}

export default NavButton
