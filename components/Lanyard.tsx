/* eslint-disable react/no-unknown-property */
'use client';
import { useEffect, useRef, useState } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, Lightformer } from '@react-three/drei';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';

// Import the GLB file from the public directory

import * as THREE from 'three';
import { useTexture } from '@react-three/drei';
import { RepeatWrapping } from 'three';

extend({ MeshLineGeometry, MeshLineMaterial });

export default function Lanyard({
  position = [0, 0, 30] as [number, number, number],
  gravity = [0, -40, 0] as [number, number, number],
  fov = 20,
  transparent = true
}) {
  return (
    <div className="relative z-0 w-full h-[400px] flex justify-center items-center transform scale-100 origin-center">
      <Canvas
        camera={{ position: position, fov: fov }}
        gl={{ alpha: transparent }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)}
      >
        <ambientLight intensity={Math.PI} />
        <Physics gravity={gravity} timeStep={1 / 60}>
          <Band />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
        </Environment>
      </Canvas>
    </div>
  );
}

function Band({ maxSpeed = 50, minSpeed = 0 }) {
  const band = useRef<THREE.Mesh>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fixed = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const j1 = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const j2 = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const j3 = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const card = useRef<any>(null);
  const vec = new THREE.Vector3(), ang = new THREE.Vector3(), rot = new THREE.Vector3(), dir = new THREE.Vector3();
  // Add type assertions for nodes and materials
  const { nodes, materials } = useGLTF('/card.glb') as unknown as {
    nodes: Record<string, { geometry: THREE.BufferGeometry }>;
    materials: Record<string, { map?: THREE.Texture } & THREE.Material>;
  };
  
  // Load the lanyard texture
  const texture = useTexture('/lanyard.png');
  useEffect(() => {
    if (texture) {
      texture.wrapS = RepeatWrapping;
      texture.wrapT = RepeatWrapping;
      texture.repeat.set(1, 16); // More repeats for less stretch
      texture.needsUpdate = true;
    }
  }, [texture]);
  
  const [curve] = useState(() => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]));
  const [dragged, drag] = useState<false | { x: number, y: number, z: number }>(false);
  const [hovered, hover] = useState(false);

  // Rope joints
  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 0.7]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 0.7]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 0.7]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 2.65, 0]]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => void (document.body.style.cursor = 'auto');
    }
  }, [hovered, dragged]);

  useEffect(() => {
    const handleResize = () => {
      // setIsSmall(window.innerWidth < 1024); // removed
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card.current, j1.current, j2.current, j3.current, fixed.current].forEach((ref) => ref?.wakeUp());
      if (card.current && card.current.setNextKinematicTranslation && dragged && typeof dragged === 'object') {
        card.current.setNextKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z });
      }
    }
    if (fixed.current) {
      [j1.current, j2.current].forEach((ref) => {
        if (!ref) return;
        if (!ref.lerped) ref.lerped = new THREE.Vector3().copy(ref.translation());
        const clampedDistance = Math.max(0.1, Math.min(1, ref.lerped.distanceTo(ref.translation())));
        ref.lerped.lerp(ref.translation(), delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)));
      });
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      // @ts-expect-error: meshline geometry type not recognized by TS
      band.current.geometry.setPoints(curve.getPoints(32));
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
  });

  curve.curveType = 'chordal';

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} type="fixed" canSleep={true} colliders={false} angularDamping={4} linearDamping={4} />
        <RigidBody ref={j1} position={[0.5, 0, 0]} type="dynamic" canSleep={true} colliders={false} angularDamping={4} linearDamping={4}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody ref={j2} position={[1, 0, 0]} type="dynamic" canSleep={true} colliders={false} angularDamping={4} linearDamping={4}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody ref={j3} position={[1.5, 0, 0]} type="dynamic" canSleep={true} colliders={false} angularDamping={4} linearDamping={4}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody ref={card} position={[1.5, 0, 0]} type={dragged ? "kinematicPosition" : "dynamic"} canSleep={true} colliders={false} angularDamping={4} linearDamping={4}>
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={4.5}
            position={[0, -2.7, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e) => {
              const target = e.target as (EventTarget & { releasePointerCapture?: (id: number) => void });
              if (target && target.releasePointerCapture) target.releasePointerCapture(e.pointerId);
              drag(false);
            }}
            onPointerDown={(e) => {
              const target = e.target as (EventTarget & { setPointerCapture?: (id: number) => void });
              if (target && target.setPointerCapture) target.setPointerCapture(e.pointerId);
              drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())));
            }}>
            <mesh geometry={nodes.card.geometry as THREE.BufferGeometry}>
              <meshPhysicalMaterial map={materials.base.map as THREE.Texture} map-anisotropy={16} clearcoat={1} clearcoatRoughness={0.15} roughness={0.9} metalness={0.8} />
            </mesh>
            <mesh geometry={nodes.clip.geometry as THREE.BufferGeometry} material={materials.metal as THREE.Material} material-roughness={0.3} />
            <mesh geometry={nodes.clamp.geometry as THREE.BufferGeometry} material={materials.metal as THREE.Material} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        {/* @ts-expect-error: meshline JSX type */}
        <meshLineGeometry />
        {/* @ts-expect-error: meshline JSX type */}
        <meshLineMaterial
          map={texture}
          useMap
          color="white"
          lineWidth={0.82}
          transparent
          opacity={1}
        />u
      </mesh>
    </>
  );
} 