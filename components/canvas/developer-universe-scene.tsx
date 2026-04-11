"use client";

import { AdaptiveDpr, AdaptiveEvents } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";

import { SectionNode } from "@/components/canvas/section-node";
import { sections, type SectionId } from "@/data/site";

type DeveloperUniverseSceneProps = {
  focusedSectionId: SectionId;
  onNodeClick: (sectionId: SectionId) => void;
  onNodeFocus: (sectionId: SectionId) => void;
};

function StarField() {
  const nearPoints = useMemo(() => {
    const positions = new Float32Array(180 * 3);

    for (let index = 0; index < 180; index += 1) {
      const stride = index * 3;
      const radius = 9 + Math.random() * 18;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[stride] = radius * Math.sin(phi) * Math.cos(theta);
      positions[stride + 1] = radius * Math.cos(phi) * 0.42;
      positions[stride + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }

    return positions;
  }, []);

  const farPoints = useMemo(() => {
    const positions = new Float32Array(140 * 3);

    for (let index = 0; index < 140; index += 1) {
      const stride = index * 3;
      const radius = 18 + Math.random() * 26;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[stride] = radius * Math.sin(phi) * Math.cos(theta);
      positions[stride + 1] = radius * Math.cos(phi) * 0.5;
      positions[stride + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }

    return positions;
  }, []);

  useFrame((state) => {
    state.scene.rotation.y = Math.sin(state.clock.elapsedTime * 0.08) * 0.02;
  });

  return (
    <>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[nearPoints, 3]}
            count={nearPoints.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#f5f5f5"
          size={0.022}
          sizeAttenuation
          transparent
          opacity={0.18}
          depthWrite={false}
        />
      </points>

      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[farPoints, 3]}
            count={farPoints.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#ffffff"
          size={0.017}
          sizeAttenuation
          transparent
          opacity={0.11}
          depthWrite={false}
        />
      </points>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.75, -0.5]}>
        <ringGeometry args={[3.8, 4.1, 80]} />
        <meshBasicMaterial color="#0c0c0c" transparent opacity={0.34} />
      </mesh>
    </>
  );
}

function CameraRig({ focusedSectionId }: { focusedSectionId: SectionId }) {
  const lookAt = useMemo(() => new THREE.Vector3(), []);
  const currentLookAt = useRef(new THREE.Vector3(0, 0.8, 0));

  useFrame((state, delta) => {
    const activeSection =
      sections.find((section) => section.id === focusedSectionId) ?? sections[0];
    const camera = state.camera as THREE.PerspectiveCamera;

    camera.position.x = THREE.MathUtils.damp(
      camera.position.x,
      activeSection.cameraPosition[0],
      3.2,
      delta,
    );
    camera.position.y = THREE.MathUtils.damp(
      camera.position.y,
      activeSection.cameraPosition[1],
      3.2,
      delta,
    );
    camera.position.z = THREE.MathUtils.damp(
      camera.position.z,
      activeSection.cameraPosition[2],
      2.4,
      delta,
    );

    lookAt.set(
      activeSection.lookAt[0],
      activeSection.lookAt[1],
      activeSection.lookAt[2],
    );

    currentLookAt.current.x = THREE.MathUtils.damp(
      currentLookAt.current.x,
      lookAt.x,
      2.6,
      delta,
    );
    currentLookAt.current.y = THREE.MathUtils.damp(
      currentLookAt.current.y,
      lookAt.y,
      2.6,
      delta,
    );
    currentLookAt.current.z = THREE.MathUtils.damp(
      currentLookAt.current.z,
      lookAt.z,
      2.6,
      delta,
    );

    camera.fov = THREE.MathUtils.damp(
      camera.fov,
      activeSection.cameraFov,
      2.2,
      delta,
    );
    camera.updateProjectionMatrix();
    camera.lookAt(currentLookAt.current);
  });

  return null;
}

export default function DeveloperUniverseScene({
  focusedSectionId,
  onNodeClick,
  onNodeFocus,
}: DeveloperUniverseSceneProps) {
  const [hoveredSectionId, setHoveredSectionId] = useState<SectionId | null>(null);

  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0.3, 0.5, 6.2], fov: 33, near: 0.1, far: 100 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#000000", 7, 16]} />
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        <ambientLight intensity={0.34} color="#d4d4d4" />
        <hemisphereLight
          args={["#1a1a1a", "#030303", 0.55]}
          position={[0, 6, 0]}
        />
        <directionalLight position={[-3.5, 4.6, 3]} intensity={1.55} color="#f5f5f5" />
        <directionalLight position={[4, 1, 5]} intensity={0.42} color="#7e7e7e" />
        <pointLight position={[1.5, 0.8, 2.6]} intensity={1.1} distance={8} color="#12331d" />

        <CameraRig focusedSectionId={focusedSectionId} />
        <group>
          <StarField />

          {sections.map((section) => (
            <SectionNode
              key={section.id}
              isFocused={focusedSectionId === section.id}
              isHovered={hoveredSectionId === section.id}
              onClick={() => onNodeClick(section.id)}
              onHover={(hovered) => {
                setHoveredSectionId(hovered ? section.id : null);
                if (hovered) {
                  onNodeFocus(section.id);
                }
              }}
              section={section}
            />
          ))}
        </group>
      </Canvas>
    </div>
  );
}
