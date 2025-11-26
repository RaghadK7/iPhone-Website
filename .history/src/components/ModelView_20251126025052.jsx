import { PerspectiveCamera } from "@react-three/drei";
import Lights from "./Lights";
import { Suspense } from "react";
import IPhone from "./IPhone";

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationSize, size, item }) => {
  return (
    <group
      ref={groupRef}
      name={gsapType}
      className={`border-2 border-red-500 w-full h-full ${
        index === 2 ? "right-[-100%]" : ""
      }`}
    >
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />
      <Suspense fallback={<div>Loading...</div>}>
        <IPhone />
      </Suspense>
    </group>
  );
};

export default ModelView;
