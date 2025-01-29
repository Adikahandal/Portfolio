"use client";
import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Sorting_hat(props) {
  const { nodes, materials } = useGLTF("/models/sorting_hat.glb");
  const modelRef = useRef();
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for reverse
  const maxRotation = Math.PI / 4; // Rotate 45 degrees (halfway)

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += direction * 0.003;

      // Reverse direction if it reaches max or min rotation
      if (modelRef.current.rotation.y >= -3 + maxRotation || modelRef.current.rotation.y <= -3) {
        setDirection((prev) => -prev);
      }
    }
  });

  return (
    <group
      {...props}
      dispose={null}
      ref={modelRef}
      position={[0,1,0]}
      scale={[0.024, 0.024, 0.024]}
      rotation={[0.35, -3, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube1_lambert7_0.geometry}
        material={materials.lambert7}
        scale={8.838}
      />
    </group>
  );
}

useGLTF.preload("/models/sorting_hat.glb");
