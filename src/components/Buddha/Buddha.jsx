import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

const isMobile = () => window.innerWidth <= 738;

const Buddha = () => {
    const buddha = useGLTF('/Buddha/scene.gltf');
    const meshRef = useRef();

    // Rotate the Buddha continuously
    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.003; // Adjust rotation speed here
            if (meshRef.current.rotation.y >= Math.PI * 2) {
                meshRef.current.rotation.y -= Math.PI * 2;
            }
        }
    });

    const scale = isMobile() ? 1.5 : 1.5;
    return (
        <mesh ref={meshRef}>
            <hemisphereLight intensity={2.5} groundColor='black' />
            <primitive
                object={buddha.scene}
                scale={scale}
                position={[0, -0.03, 0]}
                rotation={[0, 0, 0]}
            />
        </mesh>
    );
};

const BuddhaCanvas = () => {
    return (
        <Canvas
            frameloop='always' // Use 'always' to ensure continuous updates
            shadows
            camera={{ position: [0, 0, 0.2], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={null}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Buddha />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default BuddhaCanvas;
