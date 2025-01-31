"use client";

import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

export default function ElderWand(props) {
  const { nodes, materials } = useGLTF("/models/elder_wand.glb");
  const wandRef = useRef();

  const [rotationDirectionz, setRotationDirectionz] = useState(1); 
  const maxRotationz = Math.PI ; 

  useEffect(() => {
    const interval = setInterval(() => {
      if (wandRef.current) {
        // Animate rotation on the X-axis
        const newRotationz = wandRef.current.rotation.z + rotationDirectionz * 0.01;
        if (newRotationz >= maxRotationz/6 || newRotationz <= -maxRotationz/6) {
          setRotationDirectionz(-rotationDirectionz); 
        }
        wandRef.current.rotation.z = newRotationz;
      }
    }, 16); 

    return () => clearInterval(interval); 
  }, [rotationDirectionz]);

  return (
    <group
      {...props}
      dispose={null}
      position={[-4.5,2.5, 0]}
      rotation={[0,0.6,1.8]}
      scale={1.1}
    >
      <mesh
        name="defaultMaterial"
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial.geometry}
        material={materials.ElderWand}
        ref={wandRef}
      />
    </group>
  );
}

useGLTF.preload("/models/elder_wand.glb");
