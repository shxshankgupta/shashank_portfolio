"use client";

import { Edges, Float, Ring } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import type { SceneSection } from "@/data/site";

type SectionNodeProps = {
  section: SceneSection;
  isFocused: boolean;
  isHovered: boolean;
  onClick: () => void;
  onHover: (hovered: boolean) => void;
};

export function SectionNode({
  section,
  isFocused,
  isHovered,
  onClick,
  onHover,
}: SectionNodeProps) {
  const groupRef = useRef<THREE.Group>(null);
  const primaryMeshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!groupRef.current || !primaryMeshRef.current) {
      return;
    }

    const emphasis = isHovered || isFocused ? 1 : 0;
    const targetScale = 1 + emphasis * 0.09;
    const targetY = section.position[1] + emphasis * 0.12;

    groupRef.current.scale.x = THREE.MathUtils.damp(
      groupRef.current.scale.x,
      targetScale,
      4.4,
      delta,
    );
    groupRef.current.scale.y = THREE.MathUtils.damp(
      groupRef.current.scale.y,
      targetScale,
      4.4,
      delta,
    );
    groupRef.current.scale.z = THREE.MathUtils.damp(
      groupRef.current.scale.z,
      targetScale,
      4.4,
      delta,
    );
    groupRef.current.position.y = THREE.MathUtils.damp(
      groupRef.current.position.y,
      targetY,
      3.8,
      delta,
    );

    primaryMeshRef.current.rotation.x += delta * 0.06;
    primaryMeshRef.current.rotation.y += delta * 0.11;

    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.14;
      ringRef.current.scale.x = THREE.MathUtils.damp(
        ringRef.current.scale.x,
        1 + emphasis * 0.06,
        4,
        delta,
      );
      ringRef.current.scale.y = ringRef.current.scale.x;
      ringRef.current.scale.z = ringRef.current.scale.x;
    }

    if (glowRef.current) {
      const material = glowRef.current.material as THREE.MeshBasicMaterial;
      material.opacity = THREE.MathUtils.damp(
        material.opacity,
        isHovered ? 0.08 : isFocused ? 0.05 : 0.012,
        4,
        delta,
      );
    }
  });

  return (
    <Float
      speed={section.float.speed}
      rotationIntensity={section.float.rotationIntensity}
      floatIntensity={section.float.floatIntensity}
    >
      <group
        ref={groupRef}
        position={section.position}
        onClick={onClick}
        onPointerEnter={() => onHover(true)}
        onPointerLeave={() => onHover(false)}
      >
        <mesh ref={primaryMeshRef}>
          {section.shape === "sphere" ? (
            <sphereGeometry args={[0.62, 48, 48]} />
          ) : null}
          {section.shape === "box" ? (
            <boxGeometry args={[1, 1, 1]} />
          ) : null}
          {section.shape === "octahedron" ? (
            <octahedronGeometry args={[0.82, 0]} />
          ) : null}
          {section.shape === "torus-knot" ? (
            <torusKnotGeometry args={[0.45, 0.14, 140, 18]} />
          ) : null}
          <meshPhysicalMaterial
            color={isHovered || isFocused ? "#161616" : "#101010"}
            metalness={0.72}
            roughness={0.26}
            clearcoat={1}
            clearcoatRoughness={0.22}
            reflectivity={0.42}
            emissive={isHovered || isFocused ? "#0b1710" : "#020202"}
            emissiveIntensity={isHovered ? 0.45 : isFocused ? 0.28 : 0.08}
          />
          <Edges
            color={isHovered || isFocused ? "#484848" : "#212121"}
            threshold={20}
          />
        </mesh>

        <Ring
          args={[0.96, 1.01, 64]}
          position={[0, 0, 0]}
          rotation={[Math.PI / 2, 0.4, 0]}
          ref={ringRef}
        >
          <meshPhysicalMaterial
            color={isHovered || isFocused ? "#252525" : "#171717"}
            transparent
            opacity={0.88}
            metalness={0.4}
            roughness={0.32}
            clearcoat={0.85}
            clearcoatRoughness={0.18}
          />
        </Ring>

        <mesh ref={glowRef} scale={[1.55, 1.55, 1.55]}>
          <sphereGeometry args={[0.72, 32, 32]} />
          <meshBasicMaterial color="#22c55e" transparent opacity={0.012} depthWrite={false} />
        </mesh>

        <mesh position={[0, -1.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.8, 64]} />
          <meshBasicMaterial
            color={isFocused ? "#22c55e" : "#ffffff"}
            transparent
            opacity={isFocused ? 0.04 : 0.015}
          />
        </mesh>
      </group>
    </Float>
  );
}
