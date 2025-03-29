import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const NeuralBackground: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  // Generate random points for the neural network
  const points = new Float32Array(1000 * 3);
  const lines = new Float32Array(2000 * 3);
  
  for (let i = 0; i < 1000; i++) {
    points[i * 3] = (Math.random() - 0.5) * 10;
    points[i * 3 + 1] = (Math.random() - 0.5) * 10;
    points[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  for (let i = 0; i < 2000; i++) {
    lines[i * 3] = (Math.random() - 0.5) * 10;
    lines[i * 3 + 1] = (Math.random() - 0.5) * 10;
    lines[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += 0.001;
      pointsRef.current.rotation.y += 0.001;
    }
    if (linesRef.current) {
      linesRef.current.rotation.x += 0.001;
      linesRef.current.rotation.y += 0.001;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      {/* Neural nodes */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes.position"
            count={1000}
            array={points}
            itemSize={3}
            args={[points, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#00f6ff"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>

      {/* Neural connections */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes.position"
            count={2000}
            array={lines}
            itemSize={3}
            args={[lines, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#b026ff"
          transparent
          opacity={0.3}
        />
      </lineSegments>
    </>
  );
};

export default NeuralBackground; 