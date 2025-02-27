import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

function ThreeDModel() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls enableZoom={false} />
      <Box position={[0, 0, 0]}>
        <meshStandardMaterial attach="material" color="orange" />
      </Box>
    </Canvas>
  );
}

export default ThreeDModel;
