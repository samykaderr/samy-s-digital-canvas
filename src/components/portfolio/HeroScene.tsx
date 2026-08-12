import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Icosahedron, TorusKnot } from "@react-three/drei";
import { useRef } from "react";
import type { Group, Mesh } from "three";

function Knot() {
  const mesh = useRef<Mesh>(null);
  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += delta * 0.25;
    mesh.current.rotation.x += delta * 0.1;
  });

  return (
    <TorusKnot ref={mesh} args={[1.15, 0.34, 220, 32]}>
      <meshBasicMaterial wireframe color="#6d8bff" />
    </TorusKnot>
  );
}

function Shell() {
  return (
    <Icosahedron args={[2.35, 1]}>
      <meshBasicMaterial wireframe transparent opacity={0.16} color="#8b5cf6" />
    </Icosahedron>
  );
}

function ParallaxRig({ children }: { children: React.ReactNode }) {
  const group = useRef<Group>(null);
  const { pointer } = useThree();
  useFrame(() => {
    if (!group.current) return;
    group.current.rotation.y += (pointer.x * 0.5 - group.current.rotation.y) * 0.05;
    group.current.rotation.x += (-pointer.y * 0.35 - group.current.rotation.x) * 0.05;
  });
  return <group ref={group}>{children}</group>;
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <ParallaxRig>
        <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.9}>
          <Knot />
        </Float>
        <Shell />
      </ParallaxRig>
    </Canvas>
  );
}
