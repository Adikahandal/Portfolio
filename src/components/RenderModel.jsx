
"use client"
import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import clsx from 'clsx'
import React, { Suspense } from 'react'

const RenderModel = ({children, ClassName,environment}) => {
  return (
    <Canvas
        className={clsx("w-screen h-screen -z-10 relative ", ClassName)}
    >
        <Suspense fallback={null}>
          {children}
        </Suspense>
        <Environment preset={ environment|| 'forest'} />
    </Canvas>
  )
}

export default RenderModel
