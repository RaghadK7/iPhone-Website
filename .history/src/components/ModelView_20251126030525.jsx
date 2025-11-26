import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

const Model = ({ modelPath }) => {
  // تحقق من وجود المسار
  if (!modelPath) {
    console.error('❌ Model path is required');
    return null;
  }

  console.log('🔄 Loading model from:', modelPath);

  const { scene } = useGLTF(modelPath);
  
  console.log('✅ Model loaded successfully:', scene);
  
  // تعديل الـ materials إذا لزم الأمر
  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return <primitive object={scene} scale={1.5} position={[0, 0, 0]} />;
};

const Loader = () => {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="gray" wireframe />
    </mesh>
  );
};

const ModelView = ({ 
  modelPath,
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  size,
  item 
}) => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{
          preserveDrawingBuffer: true,
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight 
          position={[10, 10, 10]} 
          intensity={1}
          castShadow
        />
        <spotLight 
          position={[-5, 5, 5]} 
          angle={0.3} 
          penumbra={1} 
          intensity={0.5}
        />

        <Suspense fallback={<Loader />}>
          <group ref={groupRef}>
            {modelPath ? (
              <Model modelPath={modelPath} />
            ) : (
              <mesh>
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial color="orange" />
              </mesh>
            )}
            <Environment preset="sunset" />
          </group>
        </Suspense>

        <OrbitControls
          ref={controlRef}
          enableZoom={true}
          enablePan={false}
          rotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
          target={[0, 0, 0]}
        />
      </Canvas>
    </div>
  );
};

export default ModelView;