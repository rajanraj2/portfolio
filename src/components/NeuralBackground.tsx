import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const NeuralBackground: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const timeRef = useRef(0);

  // Generate random points for the neural network
  const { points, lines, connections } = useMemo(() => {
    const numPoints = 100;
    const points = new Float32Array(numPoints * 3);
    const lines: number[] = [];
    const connections: number[][] = [];

    // Generate points in a sphere
    for (let i = 0; i < numPoints; i++) {
      const radius = 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      points[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      points[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      points[i * 3 + 2] = radius * Math.cos(phi);
    }

    // Generate connections between points
    for (let i = 0; i < numPoints; i++) {
      connections[i] = [];
      for (let j = i + 1; j < numPoints; j++) {
        const distance = Math.sqrt(
          Math.pow(points[i * 3] - points[j * 3], 2) +
          Math.pow(points[i * 3 + 1] - points[j * 3 + 1], 2) +
          Math.pow(points[i * 3 + 2] - points[j * 3 + 2], 2)
        );

        if (distance < 3) {
          connections[i].push(j);
          lines.push(
            points[i * 3], points[i * 3 + 1], points[i * 3 + 2],
            points[j * 3], points[j * 3 + 1], points[j * 3 + 2]
          );
        }
      }
    }

    return { points, lines: new Float32Array(lines), connections };
  }, []);

  // Create geometries using useMemo to prevent recreation on each render
  const pointGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(points, 3));
    return geometry;
  }, [points]);

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(lines, 3));
    return geometry;
  }, [lines]);

  useFrame((state) => {
    if (!pointsRef.current || !linesRef.current) return;

    timeRef.current += 0.01;

    // Animate points
    const positions = pointsRef.current.geometry.getAttribute('position');
    if (positions) {
      const array = positions.array as Float32Array;
      for (let i = 0; i < array.length; i += 3) {
        array[i] += Math.sin(timeRef.current + i) * 0.01;
        array[i + 1] += Math.cos(timeRef.current + i) * 0.01;
        array[i + 2] += Math.sin(timeRef.current + i * 0.5) * 0.01;
      }
      positions.needsUpdate = true;
    }

    // Animate lines
    const linePositions = linesRef.current.geometry.getAttribute('position');
    if (linePositions) {
      const array = linePositions.array as Float32Array;
      const pointArray = positions?.array as Float32Array;
      
      if (pointArray) {
        let lineIndex = 0;
        for (let i = 0; i < connections.length; i++) {
          const pointConnections = connections[i];
          if (pointConnections && pointConnections.length > 0) {
            for (const endIndex of pointConnections) {
              if (lineIndex * 6 + 5 < array.length) {
                array[lineIndex * 6] = pointArray[i * 3];
                array[lineIndex * 6 + 1] = pointArray[i * 3 + 1];
                array[lineIndex * 6 + 2] = pointArray[i * 3 + 2];
                array[lineIndex * 6 + 3] = pointArray[endIndex * 3];
                array[lineIndex * 6 + 4] = pointArray[endIndex * 3 + 1];
                array[lineIndex * 6 + 5] = pointArray[endIndex * 3 + 2];
                lineIndex++;
              }
            }
          }
        }
      }
      linePositions.needsUpdate = true;
    }

    // Rotate the entire scene
    pointsRef.current.rotation.x = Math.sin(timeRef.current * 0.5) * 0.1;
    pointsRef.current.rotation.y = Math.cos(timeRef.current * 0.5) * 0.1;
    linesRef.current.rotation.x = Math.sin(timeRef.current * 0.5) * 0.1;
    linesRef.current.rotation.y = Math.cos(timeRef.current * 0.5) * 0.1;
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      {/* Neural nodes */}
      <points ref={pointsRef} geometry={pointGeometry}>
        <pointsMaterial
          size={0.05}
          color="#00f6ff"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>

      {/* Neural connections */}
      <lineSegments ref={linesRef} geometry={lineGeometry}>
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