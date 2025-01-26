
"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Phoenix(props) {
  const { nodes, materials } = useGLTF('/models/Phoenix.glb')

  const modelRef = useRef()

  useFrame((state, delta, xrFrame) => {
    // console.log(state.clock)
    modelRef.current.position.x = -1 + Math.cos(state.clock.elapsedTime) * 0.12;
    modelRef.current.position.y = 0.5 + Math.sin(state.clock.elapsedTime) * 0.3;
    modelRef.current.position.z = -5 + Math.sin(state.clock.elapsedTime) * 1;
  })

  return (
    <group {...props} dispose={null}
      ref={modelRef}
      position={[1, 0.5, -3]}
      // scale = {[1,1,1]}
      rotation={[0.1, 0.4, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
    </group>
  )
}

useGLTF.preload('/models/Phoenix.glb')
