
"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Dragon_model(props) {
  const { nodes, materials } = useGLTF('/models/Generate_a_high_quali_0123070733_texture.glb')

  const modelRef = useRef()
  useFrame((state, delta, xrFrame) => {
    // console.log(state.clock)
    modelRef.current.position.x = -0.8 + Math.cos(state.clock.elapsedTime) * 0.12;
    modelRef.current.position.y = 4 + Math.sin(state.clock.elapsedTime)*0.4 ;
    modelRef.current.position.z = -5 
  })

  return (
    <group {...props} dispose={null}
      ref={modelRef}
      position={[-0.8, 4, -7]}
      scale={[1, 1, 1]}
      rotation={[-0.1, -0.61, 0]}

    >
      <mesh
        name="mesh_0"
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
    </group>
  )
}

useGLTF.preload('/models/Generate_a_high_quali_0123070733_texture.glb')
