"use client"
import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Dumbledore(props) {
  const { nodes, materials } = useGLTF('/models/dumbledore.glb')
  const dumbledoreRef = useRef()

  const [rotationDirection, setRotationDirection] = useState(1); 
  const maxRotation = Math.PI / 18; 

 
  const initialRotation = [0.18, 1, 0]; 

  useFrame(() => {
    if (dumbledoreRef.current) {
     
      const currentRotationY = dumbledoreRef.current.rotation.y + rotationDirection * 0.002;

      if (currentRotationY >= maxRotation || currentRotationY <= -maxRotation) {
        setRotationDirection(-rotationDirection);
      }

      dumbledoreRef.current.rotation.set(initialRotation[0], currentRotationY, initialRotation[2]);
    }
  })

  return (
    <group {...props} dispose={null} ref={dumbledoreRef} position={[0, -3.3, 0.8]} scale={3}>
      <group scale={0.01}>
        <group position={[0, -0.098, -11.067]} rotation={[Math.PI / 2, 0, 0]}>
          <primitive object={nodes._rootJoint} />
          <skinnedMesh
            geometry={nodes.Object_7.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_7.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_9.geometry}
            material={materials.material_1}
            skeleton={nodes.Object_9.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_11.geometry}
            material={materials.material_2}
            skeleton={nodes.Object_11.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_13.geometry}
            material={materials.material_3}
            skeleton={nodes.Object_13.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_15.geometry}
            material={materials.material_4}
            skeleton={nodes.Object_15.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_17.geometry}
            material={materials.None}
            skeleton={nodes.Object_17.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_19.geometry}
            material={materials.material_6}
            skeleton={nodes.Object_19.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_21.geometry}
            material={materials.material_7}
            skeleton={nodes.Object_21.skeleton}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/dumbledore.glb')
