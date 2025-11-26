import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Lights from "./Lights";
import { PerspectiveCamera } from "@react-three/drei";
import IPhone from "./IPhone";

const ModelView = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />
      <Suspense fallback={<div>Loading...</div>}>
        <IPhone />
      </Suspense>
    </Canvas>
  );
};

export default ModelView;
