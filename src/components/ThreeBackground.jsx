import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Sphere, Torus, Box } from '@react-three/drei';

const FloatingShapes = () => {
  const torusRef = useRef();
  const boxRef = useRef();
  const sphereRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.2;
      torusRef.current.rotation.y = time * 0.3;
    }
    if (boxRef.current) {
      boxRef.current.rotation.x = time * 0.3;
      boxRef.current.rotation.y = time * 0.4;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#eab308" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#ffffff" />
      
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <Torus ref={torusRef} args={[1.5, 0.4, 16, 100]} position={[-4, 1, -5]}>
          <meshStandardMaterial color="#eab308" wireframe opacity={0.6} transparent />
        </Torus>
      </Float>
      
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <Box ref={boxRef} args={[1.5, 1.5, 1.5]} position={[4, -1, -3]}>
          <meshStandardMaterial color="#ffffff" wireframe opacity={0.4} transparent />
        </Box>
      </Float>
      
      <Float speed={3} rotationIntensity={1} floatIntensity={1}>
        <Sphere ref={sphereRef} args={[1, 32, 32]} position={[0, -3, -6]}>
          <meshStandardMaterial color="#eab308" wireframe opacity={0.3} transparent />
        </Sphere>
      </Float>

      <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
    </>
  );
};

const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <FloatingShapes />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
