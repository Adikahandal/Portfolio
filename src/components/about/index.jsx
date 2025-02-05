import React from 'react'
import ItemLayout from './ItemLayout'

const AboutDetails = () => {
    return (
        <section className='py-0  xs:py-10 w-full'>
            <div className='grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full'>
                <ItemLayout className={" col-span-full   lg:col-span-8 row-span-2 flex-col items-start"}>
                    <h2 className='text-xl md:text-2xl text-left w-full capitalize'>Conjurer of MERN spells</h2>
                    <p className='font-light'>
                        With JavaScript as my wand and the MERN stack as my spellbook, I craft powerful digital enchantments. Wielding MongoDB, Express.js, React.js, and Node.js, I conjure seamless, dynamic, and scalable web experiences.

                        Like a true Slytherin, I code with cunning, precision, and ambition, ensuring every spell of application is both functional and captivating. From brewing sleek interfaces to weaving robust backends, my magic lies in creating user-friendly and high-performance solutions.

                        Join me on this arcane journey of innovation, where I explore new technologies and push the limits of web development, one spell at a time.
                    </p>
                </ItemLayout>
                <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4 text-yellow_accent"}>
                    <p className='font-semibold w-full text-left text-2xl sm:text-5xl '>
                        0+ <sub className='font-semibold text-base'>clients</sub>
                    </p>
                </ItemLayout>
                <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4 text-yellow_accent"}>
                    <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
                        2+ <sub className='font-semibold text-base'>Years of Experience</sub>
                    </p>
                </ItemLayout>

                <ItemLayout className={"col-span-full sm:col-span-8 md:col-span-7 lg:col-span-5 !p-0"}>
                    <img className='w-full h-auto' src='https://github-readme-stats.vercel.app/api/top-langs?&layout=donut&username=Adikahandal&theme=transparent&hide_border=true&title_color=fffc9c&text_color=fff&icon_color=fffc9c&text_bold=false' alt='Aditya Kahandal' loading='lazy' />
                </ItemLayout>

                <ItemLayout className={"col-span-full sm:col-span-8 md:col-span-7 !p-0"}>
                    <img className='w-full h-auto' src='https://github-readme-stats.vercel.app/api?username=Adikahandal&theme=transparent&hide_border=true&title_color=fffc9c&text_color=fff&icon_color=fffc9c&text_bold=false' alt='Aditya Kahandal' loading='lazy' />
                </ItemLayout>

                <ItemLayout className={"col-span-full sm:col-span-8 md:col-span-7 lg:col-span-6 !p-6"}>
                    <img className='w-full h-40' src='https://skillicons.dev/icons?i=js,html,css,angular,cpp,mongodb,mysql,nextjs,py,threejs&theme=light&perline=5' alt='Aditya Kahandal' loading='lazy' />
                </ItemLayout>

                {/* <ItemLayout className={"col-span-6 !p-0"}>
                    <img className='w-full h-auto' src="https://github-readme-streak-stats.herokuapp.com?user=Adikahandal&theme=dark&hide_border=true&type=png&background=EB545400&ring=FFFC9C&currStreakLabel=FFFC9C" alt='Aditya Kahandal' loading='lazy' />
                </ItemLayout> */}

                <ItemLayout className={"col-span-full sm:col-span-8 md:col-span-7 lg:col-span-6 !p-0"}>
                    <img className='w-full h-auto' src='https://github-readme-stats.vercel.app/api/pin/?username=Adikahandal&repo=Todo_react&theme=transparent&hide_border=true&title_color=fffc9c&text_color=fff&icon_color=fffc9c&text_bold=false&description_line_count=2' alt='Aditya Kahandal' loading='lazy' />
                </ItemLayout>
            </div>
        </section>
    )
}

export default AboutDetails
