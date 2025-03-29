import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const NeuralBackground: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const timeRef = useRef(0);
  const mousePosition = useRef({ x: 0, y: 0 });
  const { camera } = useThree();

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Convert mouse position to normalized device coordinates (-1 to +1)
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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

    // Get current positions
    const positions = pointsRef.current.geometry.getAttribute('position');
    if (!positions) return;

    const array = positions.array as Float32Array;
    const mouseInfluence = 0.5; // Adjust this value to control mouse influence

    // Update point positions with mouse influence
    for (let i = 0; i < array.length; i += 3) {
      // Base movement
      array[i] += Math.sin(timeRef.current + i) * 0.01;
      array[i + 1] += Math.cos(timeRef.current + i) * 0.01;
      array[i + 2] += Math.sin(timeRef.current + i * 0.5) * 0.01;

      // Mouse influence
      const distanceFromMouse = Math.sqrt(
        Math.pow(array[i] - mousePosition.current.x * 5, 2) +
        Math.pow(array[i + 1] - mousePosition.current.y * 5, 2)
      );

      if (distanceFromMouse < 2) {
        const influence = (2 - distanceFromMouse) / 2;
        array[i] += (mousePosition.current.x * 5 - array[i]) * influence * mouseInfluence;
        array[i + 1] += (mousePosition.current.y * 5 - array[i + 1]) * influence * mouseInfluence;
      }
    }
    positions.needsUpdate = true;

    // Update line positions
    const linePositions = linesRef.current.geometry.getAttribute('position');
    if (linePositions) {
      const lineArray = linePositions.array as Float32Array;
      let lineIndex = 0;

      // Update each connection
      for (let i = 0; i < connections.length; i++) {
        const pointConnections = connections[i];
        if (pointConnections && pointConnections.length > 0) {
          for (const endIndex of pointConnections) {
            if (lineIndex * 6 + 5 < lineArray.length) {
              // Start point
              lineArray[lineIndex * 6] = array[i * 3];
              lineArray[lineIndex * 6 + 1] = array[i * 3 + 1];
              lineArray[lineIndex * 6 + 2] = array[i * 3 + 2];
              // End point
              lineArray[lineIndex * 6 + 3] = array[endIndex * 3];
              lineArray[lineIndex * 6 + 4] = array[endIndex * 3 + 1];
              lineArray[lineIndex * 6 + 5] = array[endIndex * 3 + 2];
              lineIndex++;
            }
          }
        }
      }
      linePositions.needsUpdate = true;
    }

    // Rotate the entire scene based on mouse position
    const targetRotationX = mousePosition.current.y * 0.2;
    const targetRotationY = mousePosition.current.x * 0.2;
    
    pointsRef.current.rotation.x += (targetRotationX - pointsRef.current.rotation.x) * 0.1;
    pointsRef.current.rotation.y += (targetRotationY - pointsRef.current.rotation.y) * 0.1;
    linesRef.current.rotation.x = pointsRef.current.rotation.x;
    linesRef.current.rotation.y = pointsRef.current.rotation.y;
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