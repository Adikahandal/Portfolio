"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Wizard(props) {
  const { nodes, materials } = useGLTF('/models/Wizard.glb')

  const modelRef = useRef()

  useFrame((state,delta, xrFrame) =>{
    // console.log(state.clock)
    // modelRef.current.position.x = -0.3 + Math.sin(state.clock.elapsedTime)*0.1;
    modelRef.current.position.y= 1.12 + Math.cos(state.clock.elapsedTime)*0.065;
    modelRef.current.position.z= 2 + Math.cos(state.clock.elapsedTime)*0.1;
  })

  return (
    <group {...props} dispose={null}
      ref={modelRef}
      position={[-.4,1,2]}
      scale={[1.5,1.5,1.5]}
      rotation={[-0.1,0.1,0]}
    >
      <group position={[0.2, 0, 0]} scale={1.37}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0.geometry}
          material={nodes.mesh_0.material}
          position={[0, -1, 0]}
          rotation={[0, -0.096, -0.005]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/Wizard.glb')
