"use client";
import * as THREE from "three";
import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, Image, Text, TrackballControls } from "@react-three/drei";


function Logo({ imgSrc, text, position, ...props }: { imgSrc: string; text: string; position: THREE.Vector3 }) {
  const [hovered, setHovered] = useState(false);
  const over = (e: React.PointerEvent) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);
  return (
    <Billboard position={position} {...props}>
      <Image
        url={imgSrc}
        scale={hovered ? 1.6 : 1.5}
        onPointerOver={over}
        onPointerOut={out}
        transparent
      />
      <Text
        position={[0, -1.1, 0]} // Adjust as needed
        fontSize={0.8} // Adjust font size as needed
        color={"black"}
        onPointerOver={over}
        onPointerOut={out}
      >
        {text}
      </Text>
    </Billboard>
  );
}

function Cloud({ positions }: { positions: [THREE.Vector3, string, string][] }) {
  const groupRef = useRef<THREE.Group>(null);

  // Using the useFrame hook to rotate the group on the x-axis slowly
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0005; // Adjust this value for speed
      groupRef.current.rotation.x += 0.0005; // Adjust this value for speed
    }
  });

  return (
    <group ref={groupRef}>
      {positions.map(([pos, imgSrc, label]: [THREE.Vector3, string, string], index: number) => (
      <Logo
        key={index}
        position={pos}
        imgSrc={imgSrc}
        text={label}
      />
      ))}
    </group>
  );
}

export default function TechnologyCloud() {
  const positions: [THREE.Vector3, string, string][] = [
    // Vertical line of P
    [new THREE.Vector3(-5.5, 7.5, 0), "/logos/javascript.svg", "JavaScript"],
    [new THREE.Vector3(-5.5, 5, 0), "/logos/typescript.svg", "TypeScript"],
    [new THREE.Vector3(-5.5, 2.5, 0), "/logos/react.svg", "React"],
    [new THREE.Vector3(-5.5, 0, 0), "/logos/nextjs.svg", "Next.js"],
    [new THREE.Vector3(-5.5, -2.5, 0), "/logos/storybook.svg", "Storybook"],
    [new THREE.Vector3(-5.5, -5, 0), "/logos/vue.svg", "Vue.js"],
    [new THREE.Vector3(-5.5, -7.5, 0), "/logos/sqlite.svg", "SQLite"],

    // Arc of P
    [new THREE.Vector3(-2, 7.5, 0), "/logos/prisma.svg", "Prisma"],
    [new THREE.Vector3(1, 7.5, 0), "/logos/adobe.svg", "Adobe"],
    [new THREE.Vector3(4, 7, 0), "/logos/expo.svg", "Expo"],
    [new THREE.Vector3(5.5, 5, 0), "/logos/sass.svg", "SASS"],
    [new THREE.Vector3(5.5, 2.5, 0), "/logos/firebase.svg", "Firebase"],
    [new THREE.Vector3(5, 0, 0), "/logos/git.svg", "Git"],
    [new THREE.Vector3(2.5, 0, 0), "/logos/figma.svg", "Figma"],
    [new THREE.Vector3(0, 0, 0), "/logos/css.svg", "CSS"],
    [new THREE.Vector3(-2.5, 0, 0), "/logos/html.svg", "HTML"],
  ];

  return (
    <Canvas
      dpr={[1, 5]}
      camera={{ position: [0, 0, 15], fov: 100 }}
      className="h-full w-full min-h-[300px]"
    >
      <fog attach="fog" args={["#202025", 0, 80]} />
      <Suspense fallback={null}>
        <Cloud positions={positions} />
      </Suspense>
      {/* @ts-expect-error, controls don't need to be advanced here*/}
      <TrackballControls />
    </Canvas>
  );
}
