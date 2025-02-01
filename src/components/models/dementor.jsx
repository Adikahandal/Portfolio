"use client"
import React, { useRef, useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Dementor(props) {
  const { nodes, materials } = useGLTF('/models/Dementor.glb')
  const group = useRef()

  // Smoothly interpolate the direction of movement
  const [targetDirection, setTargetDirection] = useState({
    x: Math.random() * 2 - 1, // Random between -1 and 1
    y: Math.random() * 2 - 1, // Random between -1 and 1
    z: Math.random() * 2 - 1  // Random between -1 and 1
  })

  const currentDirection = useRef({
    x: 0, y: 0, z: 0
  })

  useFrame(() => {
    if (group.current) {
      // Smoothly interpolate the direction to give a floating effect (slower change)
      currentDirection.current.x = lerp(currentDirection.current.x, targetDirection.x, 0.02) // Slower interpolation
      currentDirection.current.y = lerp(currentDirection.current.y, targetDirection.y, 0.02) // Slower interpolation
      currentDirection.current.z = lerp(currentDirection.current.z, targetDirection.z, 0.02) // Slower interpolation

      // Move the Dementor smoothly in the interpolated direction (slower movement)
      group.current.position.x += currentDirection.current.x * 0.02 // Reduced speed
      group.current.position.y += currentDirection.current.y * 0.02 // Reduced speed
      group.current.position.z += currentDirection.current.z * 0.02 // Reduced speed

      // Apply the boundary constraints (keep within screen dimensions)
      group.current.position.x = Math.max(-5, Math.min(5, group.current.position.x))
      group.current.position.y = Math.max(-3, Math.min(3, group.current.position.y))
      group.current.position.z = Math.max(-5, Math.min(5, group.current.position.z))

      // Continuously change direction by updating the target direction randomly
      if (Math.random() < 0.01) { // Random chance for a smooth change in direction
        setTargetDirection({
          x: Math.random() * 2 - 1, // Random between -1 and 1
          y: Math.random() * 2 - 1, // Random between -1 and 1
          z: Math.random() * 2 - 1  // Random between -1 and 1
        })
      }
    }
  })

  // Linear interpolation function
  const lerp = (start, end, alpha) => {
    return start + (end - start) * alpha
  }

  return (
    <group {...props} ref={group} dispose={null}
      position={[0, -1, 1]}
      rotation={[0, -3, 0.2]}
      scale={[1.3,2,1.3]}
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

useGLTF.preload('/models/Dementor.glb')
