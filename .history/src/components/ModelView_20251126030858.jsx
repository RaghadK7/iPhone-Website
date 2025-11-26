import React, { Suspense } from "react";
import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import * as THREE from "three";
import IPhone from "./IPhone";
import Lights from "./Lights";

const Loader = () => {
  return (
    <mesh>
      <sphereGeometry args={[0.5, 16, 16]} />
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
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      {/* Lights Component */}
      <Lights />

      <Suspense fallback={<Loader />}>
        <group 
          ref={groupRef}
          name={`${index === 1 ? 'small' : 'large'}`}
          position={[0, 0, 0]}
        >
          {/* استخدام IPhone component */}
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
    </View>
  );
};

export default ModelView;