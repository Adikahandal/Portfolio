import { BtnList } from '@/app/data'
import { Divide } from 'lucide-react';
import React from 'react'
import NavButton from './NavButton';

const Navigation = () => {

  const angleIncrement = 360 / BtnList.length;


  return (

    <div className='fixed w-full h-screen z-50 flex items-center justify-center top-0'>
      <div className='flex items-center justify-center relative hover:pause animate-spin-slow group'>
        {
          BtnList.map((btn, index) => {

            const angleRad = (index * angleIncrement * Math.PI) / 180
            const radius = 'calc(19vw - 1rem)'
            const x = `calc(${radius}* ${Math.cos(angleRad)})`;
            const y = `calc(${radius}* ${Math.sin(angleRad)})`;

            return <NavButton key={btn.label} x={x} y={y} {...btn} />
          })
        }
      </div>
    </div>


  )
}

export default Navigation
