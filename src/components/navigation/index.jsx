"use client"
import { BtnList } from '@/app/data'
import React from 'react'
import NavButton from './NavButton';
import useScreenSize from '../hooks/useScreenSize';
import ResponsiveComponent from '../ResponsiveComponent';

const Navigation = () => {
    const angleIncrement = 360 / BtnList.length;

    const size = useScreenSize();

    const isLarge = size >= 1072;
    const isMedium = size >= 880;
    const isShort = size >= 500;

    return (
        <div className='w-full fixed h-screen flex items-center z-10 justify-center'>
            <ResponsiveComponent>
                {({ size }) => {
                    return size && size >= 500 ?
                        (<div className='flex items-center justify-center relative hover:pause animate-spin-slow group'>
                            {
                                BtnList.map((btn, index) => {
                                    const angleRad = (index * angleIncrement * Math.PI) / 180
                                    const radius = isLarge ? 'calc(20vw - 1rem)' : isMedium ? 'calc(30vw - 1rem)' : isShort ? 'calc(40vw - 1rem)' : 'calc(60vw - 1rem)'
                                    const x = `calc(${radius}*${Math.cos(angleRad)})`
                                    const y = `calc(${radius}*${Math.sin(angleRad)})`

                                    return < NavButton key={btn.label} x={x} y={y} {...btn} />
                                })
                            }
                        </div>)
                        :
                        (
                            <>
                                <div className='w-full px-2.5 xs:p-0 xs:w-max flex flex-col items-start xs:items-center justify-center relative group'>
                                    {
                                        BtnList.slice(0,(BtnList.length/2)+1).map((btn, index) => {
                                            
                                            return < NavButton key={btn.label} x={0} y={0} {...btn} />
                                        })
                                    }
                                </div>

                                <div className='w-full px-2.5 xs:p-0 xs:w-max flex flex-col items-end xs:items-center justify-center relative group'>
                            {
                                BtnList.slice((BtnList.length/2)+1,BtnList.length).map((btn, index) => {
                                    

                                    return < NavButton key={btn.label} x={0} y={0} {...btn}  labelDirection='left'/>
                                })
                            }
                        </div>
                            </>
                        )
                }}

            </ResponsiveComponent>
        </div>
    )
}

export default Navigation
