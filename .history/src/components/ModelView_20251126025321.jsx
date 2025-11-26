import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import IPhone from "./IPhone";

const Model = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath); // تأكدي من تمرير المسار الصحيح
  return <primitive object={scene} />;
};

const ModelView = ({ modelPath }) => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Suspense fallback={null}>
        <Model modelPath={modelPath} />
        <Environment preset="sunset" />
      </Suspense>
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};

export default ModelView;
