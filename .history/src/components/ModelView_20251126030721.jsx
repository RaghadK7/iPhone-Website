import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, View } from "@react-three/drei";
import * as THREE from "three";
import IPhone from "./IPhone";

const Loader = () => {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#666" wireframe />
    </mesh>
  );
};

const ModelView = ({ 
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  size,
  item 
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
    >
      {/* Camera */}
      <ambientLight intensity={0.3} />
      
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      {/* Lights */}
      <directionalLight 
        position={[1, 1, 1]} 
        intensity={2}
      />
      <directionalLight 
        position={[-1, -1, -1]} 
        intensity={0.5}
      />

      <Suspense fallback={<Loader />}>
        <group 
          ref={groupRef}
          name={`${index === 1 ? 'small' : 'large'}`}
          position={[0, 0, 0]}
        >
          {/* هنا نستخدم IPhone component */}
          <IPhone 
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </group>
      </Suspense>

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />

      <Environment preset="sunset" />
    </View>
  );
};

// استيراد PerspectiveCamera من drei
import { PerspectiveCamera } from "@react-three/drei";

export default ModelView;