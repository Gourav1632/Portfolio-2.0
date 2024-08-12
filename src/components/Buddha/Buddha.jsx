import React, { Suspense,useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { BoxHelper, Box3, Vector3 } from 'three';

const isMobile = () => {
  return window.innerWidth <= 738;
};

const Buddha = () => {
    const buddha = useGLTF('/Buddha/scene.gltf');

    const scale = isMobile() ? 1.5 : 1.5;
    return(
        <mesh>
        <hemisphereLight intensity={2.5} groundColor='black' />
        <primitive
          object={buddha.scene}
          scale={scale}
          position={[0, -0.03, 0]}
          rotation={[0, 0, 0]}
        />
      </mesh>
    )
};

const BuddhaCanvas = () => {
    return (
        <Canvas
          frameloop='demand'
          shadows
          camera={{ position: [0, 0,0.2], fov: 25 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense >
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Buddha/>
          </Suspense>
    
          <Preload all />
        </Canvas>
      );
};

export default BuddhaCanvas;
